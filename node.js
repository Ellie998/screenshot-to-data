import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.API_KEY, // This is the default and can be omitted
});

async function main() {
  const response = await openai.images.generate({
    model: "dall-e-2",
    prompt: "a white siamese cat",
    n: 1,
    size: "1024x1024",
  });
  console.log(response.data[0].url);
}
main();
