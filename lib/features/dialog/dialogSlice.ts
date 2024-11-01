import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { dialogService, Message } from './dialogService'
import { RequestStatus } from '../global/serviceGlobal'

type DialogState = {
  messages: Message[]
  status: RequestStatus
  error: string | null
}

const initialState: DialogState = {
  messages: [],
  status: RequestStatus.IDLE,
  error: null,
}

const dialogSlice = createSlice({
  name: 'dialog',
  initialState: initialState,
  reducers: {
    addUserMessage(state, { payload }: PayloadAction<string>) {
      state.messages.push({ user: payload })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(generateContent.pending, (state) => {
        state.status = RequestStatus.LOADING
      })
      .addCase(generateContent.fulfilled, (state, { payload }) => {
        state.status = RequestStatus.SUCCEEDED
        state.messages.push({ bot: payload })
      })
      .addCase(generateContent.rejected, (state) => {
        state.status = RequestStatus.FAILED
      })
  },
})

export const generateContent = createAsyncThunk<string, string, { rejectValue: string }>(
  'generateContent',
  async (message: string) => {
    try {
      const response = await dialogService.generateContent(message)
      if (!response) {
        throw new Error('Ошибка')
      }
      return response
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Ошибка: ${error.message}`)
      }
      throw new Error('Неизвестная ошибка')
    }
  }
)
export default dialogSlice.reducer

export const { addUserMessage } = dialogSlice.actions
