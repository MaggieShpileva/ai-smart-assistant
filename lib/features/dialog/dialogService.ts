import customAxios from '@/network'

export type Message = {
  user?: string
  bot?: string
}

export const dialogService = {
  generateContent: async (message: string): Promise<string> => {
    // const response = await fetch(`${BASE_URL}/api/chat`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(message),
    // })
    const res = await customAxios.post(`?key=${process.env.NEXT_PUBLIC_API_KEY || ''}`, {
      contents: [
        {
          parts: [{ text: message }],
        },
      ],
    })
    return res.data.candidates[0].content.parts[0].text
  },
}
