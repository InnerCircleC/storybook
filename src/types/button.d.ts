namespace ButtonType {
  export interface BtnSize {
    small: string
    medium: string
    large: string
  }

  export interface BtnType {
    primary: string
    default: string
    dashed: string
    link: string
  }

  export interface Data {
    btnSize: BtnSize
    btnType: BtnType
  }
}

export default ButtonType
