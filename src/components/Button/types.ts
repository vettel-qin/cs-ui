export type ButtonType = 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
export type ButtonSize = 'large' | 'default' | 'small'
export type NativeType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  plain?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  nativeType?: NativeType
  autofocus?: boolean
}

export interface ButtonInstance {
  ref: HTMLButtonElement
}
