export type Message = {
  user?: string
  bot?: string
}

export const dialogService = {
  generateContent: async (message: string): Promise<string> => {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })
    const result = await response.json()
    return result[0].content.parts[0].text
  },
}
