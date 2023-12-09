import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);
console.log(process.env.OPENAI_API_KEY); //when will this get printed? when the server starts or when the function is called? a:

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
          content: `Generate ${number} (if the number is 1 then please give only one post bsacially whatever is the number give that many post and then stop that's the strict order) twitter threads on the topic:${topic} with no hashtags and clearly labeled "1." and "2." till the number mentioned. The vibe of the thread should be ${drop} ${
            checked
              ? "Make sure there is no emoji, no mention of other social media, and no mention of other people stick to the topic. Strictly there should be no emoji."
              : null
          }
            Make sure each generated thread post is less than 220 characters, and at the end of the every thread add the 🧵(current number of post)/${number}`,
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
