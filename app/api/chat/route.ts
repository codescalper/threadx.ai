import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";
// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// Set the runtime to edge for best performance
export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { topic, number, drop, checked } = await req.json();

    // Ask OpenAI for a streaming completion given the prompt
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [
        {
          role: "user",
          content: `Generate ${number} (if the number is 1 then please give only one post basically whatever is the number give that many posts and then stop that's the strict order) Twitter threads on the topic:${topic} with no hashtags and clearly labeled "1." and "2." till the number mentioned. The vibe of the thread should be ${drop} and ${
            checked
              ? "Add some realted emoji to the topic."
              : "Make sure there is no emoji, not a single emoji should be there in any of the posts and it's a strict rule for you don't break it, and no mention of other people, stick to the topic. Strictly there should be no emoji."
          }
            Make sure each generated thread post is less than 220 characters, and at the end of every thread add the 🧵(current number of posts)/${number}`,
        },
      ],
    });

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);
    // Respond with the stream
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error(error);
    // You can also return a response with an error message if you want
    return new Response("An error occurred", { status: 500 });
  }
}
