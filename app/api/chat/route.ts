import customAxios from '@/network'

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
    return Response.json(
      res.data.candidates,

      { status: 200 }
    )
  } catch (error) {
    return Response.json(
      {
        error: `api/chat error->, ${error}`,
      },
      { status: 500 }
    )
  }
}
