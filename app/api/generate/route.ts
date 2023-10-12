import { Configuration, OpenAIApi } from 'openai-edge';

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(config);
  

  export const runtime = 'edge';

  export async function POST(req: Request) {
    const { vibe, bio } = await req.json();

    // Ask OpenAI for a streaming completion given the prompt
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages: [
        {
          role: 'user',
          content: `Generate a ${vibe} twitter biographies with no hashtags and clearly labeled "1." and "2.". ${
            vibe === 'Funny'
              ? "Make sure there is a joke in there and it's a little ridiculous."
              : null
          }
            Make sure each generated biography is less than 160 characters, has short sentences that are found in Twitter bios, and base them on this context: ${bio}${
            bio.slice(-1) === '.' ? '' : '.'
          }`,
        },
      ],
    });
  
    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);
    // Respond with the stream
    return new StreamingTextResponse(stream);
  }