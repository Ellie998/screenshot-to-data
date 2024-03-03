const dotenv = require("dotenv");
const OpenAI = require("openai");

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.API_KEY, // This is the default and can be omitted
});

async function sendOpenaiReq(prompt) {
  const response = await openai.images.generate({
    model: "dall-e-2",
    prompt: prompt, // 프롬포트 명령
    n: 1, // 출력할 이미지 갯수
    size: "1024x1024",
  });

  return response.data[0].url;
}

module.exports = { sendOpenaiReq };
