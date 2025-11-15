import { NextResponse } from 'next/server';

const WORKFLOW_ID = process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { 
            role: 'system', 
            content: 'Ти консультант першої лінії на меблевому інтернет магазині компанії Мебельний Дім Колобових. Завжди відповідай коротко і тільки українською.'
          },
          { role: 'user', content: message }
        ],
      }),
    });

    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content || 'Помилка';

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
