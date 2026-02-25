// api/chat.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

type DeepSeekResponse = {
  choices?: {
    role: string;
    content: string;
  }[];
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: message },
        ],
      }),
    });

    const data: DeepSeekResponse = await response.json();

    const reply = data.choices?.[0]?.content || 'No response from AI';

    res.status(200).json({ reply });
  } catch (err: any) {
    console.error('SERVER ERROR:', err);
    res.status(500).json({ error: err.message || 'Internal server error' });
  }
}