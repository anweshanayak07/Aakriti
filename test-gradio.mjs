import { client } from "@gradio/client";

async function run() {
  console.log("Connecting to hysts/Shap-E...");
  const app = await client("hysts/Shap-E");
  console.log("Predicting...");
  const result = await app.predict("/text-to-3d", [
		"a cute cat", // string  in 'Prompt' Textbox component
		0, // number (numeric value between 0 and 2147483647) in 'Seed' Slider component
		15, // number (numeric value between 1 and 20) in 'Guidance scale' Slider component
		64, // number (numeric value between 32 and 256) in 'Number of inference steps' Slider component
  ]);
  console.log(result);
}

run().catch(console.error);
