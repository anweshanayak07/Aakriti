import { useState, useEffect } from 'react';
import { Download, Wand2, RefreshCw, Cuboid, Key } from 'lucide-react';
import { ModelViewer } from './components/ModelViewer';
import { Logo3D } from './components/Logo3D';
import { fal } from "@fal-ai/client";

function App() {
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('fal_api_key') || '');
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [progressText, setProgressText] = useState('');
  const [modelUrl, setModelUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('fal_api_key', apiKey);
  }, [apiKey]);

  const generateModel = async () => {
    if (!apiKey) {
      setError('Please provide a Fal.ai API Key.');
      return;
    }
    if (!prompt) {
      setError('Please enter a description for the 3D model.');
      return;
    }

    setIsGenerating(true);
    setError(null);
    setProgressText('Connecting to Fal.ai (Hunyuan3D)...');
    setModelUrl(null);

    // Configure the fal client with the user's API key
    fal.config({
      credentials: apiKey,
    });

    try {
      const result: any = await fal.subscribe("fal-ai/hunyuan-3d/v3.1/rapid/text-to-3d", {
        input: {
          prompt: prompt,
        },
        logs: true,
        onQueueUpdate: (update) => {
          if (update.status === "IN_PROGRESS") {
            const logs = update.logs?.map((log: any) => log.message).join(" | ");
            setProgressText(logs ? `Generating: ${logs.slice(0, 50)}...` : 'Generating 3D Model... (this may take a minute)');
          } else if (update.status === "COMPLETED") {
            setProgressText('Finalizing model...');
          }
        },
      });

      console.log('Fal AI Result:', result.data);

      const url = result.data?.model_output?.mesh?.url 
               || result.data?.mesh?.url 
               || result.data?.model_3d?.url;

      if (!url) {
        throw new Error('Could not find model URL in response. Check console for details.');
      }

      setModelUrl(url);
      setIsGenerating(false);
      setProgressText('');
    } catch (err: any) {
      console.error(err);
      
      // Provide a more helpful error message for API/Authentication issues
      if (err.name === 'ApiError' || err.status === 401 || err.status === 403) {
        setError('API Error: Your Fal.ai API key is either invalid, missing, or out of free credits. Please verify your key at fal.ai.');
      } else {
        setError(err.message || 'An unexpected error occurred while generating.');
      }
      
      setIsGenerating(false);
    }
  };

  const downloadModel = async () => {
    if (!modelUrl) return;
    try {
      const response = await fetch(modelUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `aakriti-model-${Date.now()}.glb`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError('Failed to download the model.');
    }
  };

  return (
    <div className="app-container">
      <header>
        <div className="brand-title-container">
          <Logo3D size={58} className="header-logo" />
          <h1><span className="highlight">AAK</span>RITI</h1>
        </div>
        <p className="subtitle">Give shape and form to your imagination in 3D</p>
      </header>

      <main className="main-content">
        {/* Left Panel: Controls */}
        <section className="glass-panel controls-panel">
          
          <div className="input-group">
            <label htmlFor="apiKey">
              <Key size={14} style={{ display: 'inline', marginRight: '5px' }} />
              Fal.ai API Key
            </label>
            <input 
              type="password" 
              id="apiKey" 
              placeholder="Enter your fal.ai API key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <span className="helper-text">Get a free key (with starting credits) at fal.ai</span>
          </div>

          <div className="input-group" style={{ marginTop: '1rem' }}>
            <label htmlFor="prompt">
              <Wand2 size={14} style={{ display: 'inline', marginRight: '5px' }} />
              Description
            </label>
            <textarea 
              id="prompt" 
              placeholder="e.g. A cute low poly red panda sitting on a stump..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            ></textarea>
          </div>

          {error && <div className="error-text">{error}</div>}

          <button 
            className="btn btn-primary" 
            onClick={generateModel}
            disabled={isGenerating || !prompt}
          >
            {isGenerating ? <><RefreshCw className="spinner-icon" size={18} /> Generating...</> : <><Wand2 size={18} /> Generate 3D Model</>}
          </button>
        </section>

        {/* Right Panel: 3D Viewer */}
        <section className="glass-panel viewer-panel">
          {isGenerating ? (
            <div className="loading-state">
              <div className="spinner"></div>
              <div className="progress-text">{progressText}</div>
              <p className="helper-text" style={{ marginTop: '10px' }}>Using high-quality Hunyuan3D model on Fal.ai.</p>
            </div>
          ) : modelUrl ? (
            <>
              <ModelViewer url={modelUrl} />
              <div className="model-actions">
                <button className="action-btn" onClick={downloadModel} title="Download .glb">
                  <Download size={20} />
                </button>
              </div>
            </>
          ) : (
            <div className="empty-state">
              <Cuboid size={64} color="var(--primary-color)" style={{ opacity: 0.5, marginBottom: '1rem' }} />
              <h3 style={{ color: 'var(--text-light)', marginBottom: '0.5rem' }}>No Model Generated</h3>
              <p className="helper-text">Enter a prompt and hit generate to see your 3D model here.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
