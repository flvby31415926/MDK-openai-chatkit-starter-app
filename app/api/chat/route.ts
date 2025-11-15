import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { message } = await request.json();

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'Ти консультант першої лінії на меблевому інтернет магазині компанії Мебельний Дім Колобових. Завжди відповідай коротко і тільки українською.' },
        { role: 'user', content: message }
      ],
    }),
  });

  const data = await res.json();
  return NextResponse.json({ reply: data.choices?.[0]?.message?.content });
}
