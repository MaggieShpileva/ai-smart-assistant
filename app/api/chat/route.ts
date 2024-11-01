import customAxios from '@/network'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const userMessage = await req.json()
  try {
    const res = await customAxios.post(`?key=${process.env.NEXT_PUBLIC_API_KEY || ''}`, {
      contents: [
        {
          parts: [{ text: userMessage }],
        },
      ],
    })
    return NextResponse.json(
      res.data.candidates,

      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        error: `api/chat error->, ${error}`,
      },
      { status: 500 }
    )
  }
}
