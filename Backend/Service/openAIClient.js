import { OpenAI } from "openai/client.js";

const client = new OpenAI({
    apiKey:process.env.OPENAI_API_KEY //Check!! api key needs to be string
})

export {
    client
}