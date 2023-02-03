declare interface UrlI {
  url: string
}

declare interface RequestI {
  n: number
  prompt: string
  size: string
}

declare interface ClearI {
  setPrompt: Dispatch<SetStateAction<string>>
  setResult: Dispatch<SetStateAction<ResultI>>
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

declare type AlertT = { type: 'success' | 'danger'; message: string }

declare interface ResponseI {
  result: ResultI | null
  message: MessageI
}

declare interface ResultI {
  created: number
  data: UrlI[]
}

declare interface MessageI {
  ErrorLog: TErrorLogs
 Status: string
  Count: string
}

declare type TErrorLogs = ErrorLogI[]

declare interface ErrorLogI {
  Scope: string
  StatusCode: string
  RootCause: string
  Trace: string
}