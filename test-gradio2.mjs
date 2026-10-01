import { client } from "@gradio/client";

async function run() {
  try {
    const app = await client("Tencent/Hunyuan3D-1");
    const endpoints = app.config.dependencies.map(d => d.api_name).filter(Boolean);
    console.log(endpoints);
  } catch(e) {
    console.error(e);
  }
}

run();
