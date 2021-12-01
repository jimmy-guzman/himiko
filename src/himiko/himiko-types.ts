// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type HimikoPossibleValues = Record<string, any>

export type HimikoSupportedElements = HTMLInputElement | HTMLTextAreaElement

export type HimikoChangeEvent = React.ChangeEvent<HimikoSupportedElements>

export type HimikoChangeHandler = (event: HimikoChangeEvent) => void

export type HimikoState<T extends HimikoPossibleValues> = [
  T,
  HimikoChangeHandler
]

export interface HimikoProviderProps<T extends HimikoPossibleValues> {
  children: React.ReactNode
  initialState: T
}
