# AAKRITI (आकृति) 🧊

> **Giving shape, structure, and form to imagination in 3D.**

🔗 **Live Application**: [https://aakriti-3d.vercel.app/](https://aakriti-3d.vercel.app/)

**Developed by:** Anwesha Nayak

---

## 🌟 About AAKRITI

The word **AAKRITI** (originating from Sanskrit/Hindi ***आकृति***) signifies **"Form"**, **"Shape"**, **"Silhouette"**, or **"Structure"**. 

**AAKRITI** is an interactive web platform built to give physical shape and tangible form to creative ideas. By converting simple textual prompts into fully real-time interactive 3D models (`.glb`), AAKRITI bridges the gap between abstract imagination and 3D visualization.

---

## 🔗 Live Demo

Access the live application at: **[https://aakriti-3d.vercel.app/](https://aakriti-3d.vercel.app/)**

---

## ✨ Features

- **3D A Branding & Emblem**: Features a custom-designed geometric 3D 'A' logo with dynamic isometric facets and neon edge highlights, integrated as both the favicon and main brand icon.
- **Interactive 3D Canvas**: Real-time WebGL viewer powered by Three.js and React Three Fiber with orbit controls, 360° rotation, zoom, and dynamic lighting.
- **Text-to-3D Synthesis**: Converts text descriptions into detailed 3D meshes using advanced Hunyuan3D generation pipelines.
- **Direct GLB Export**: Download generated 3D models directly as `.glb` files ready for Blender, Unity, Unreal Engine, or web deployment.
- **Sleek Dark UI**: Modern glassmorphism interface styled with vibrant accent highlights (`#AAD922`) and dark obsidian tones.

---

## 🛠️ Tech Stack

- **Frontend Core**: React 19, TypeScript, Vite
- **3D Graphics & Rendering**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **UI & Icons**: Vanilla CSS (Glassmorphic design system), `lucide-react`
- **3D Generation Backend**: Fal.ai (`fal-ai/hunyuan-3d/v3.1/rapid/text-to-3d`)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd Aakriti
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## 💡 How to Use

1. Enter your **Fal.ai API Key** in the control panel on the left (key is stored locally in your browser session).
2. Enter a description of the object you wish to form (e.g. *"A futuristic sci-fi helmet with glowing cyan visor"*).
3. Click **Generate 3D Model**.
4. Once formed, interact with your 3D creation in the viewer panel (rotate, zoom, pan) and click the download button to export the `.glb` file.

---

## 🌐 Deployment

AAKRITI is deployed live on Vercel at [https://aakriti-3d.vercel.app/](https://aakriti-3d.vercel.app/).

---

## 👤 Author

Developed with ❤️ by **Anwesha Nayak**
