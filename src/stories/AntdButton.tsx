import { AxiosError } from 'axios'
import type ButtonType from '../types/button'
import { getButtonStyle } from '../server/apis/button'
import styled from 'styled-components'

interface ButtonProps {
  btnType: 'primary' | 'default' | 'dashed' | 'link'
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
}

// TODO: top level await를 사용하는 방식으로 바꾸기
let btnSize: ButtonType.BtnSize
let btnType: ButtonType.BtnType

const btnStyle = async () => {
  try {
    const data = await getButtonStyle()
    btnSize = data.btnSize
    btnType = data.btnType
  } catch (error) {
    const err = error as AxiosError
    console.error(err.message)
  }
}
btnStyle()

const Button = styled.button<{ btnType: string; size: string }>`
  background-color: #fff;
  border: 0;
  border-radius: 0.375rem;
  cursor: pointer;
  display: inline-block;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  line-height: 1;

  ${props => btnType[props.btnType as keyof typeof btnType]}
  ${props => btnSize[props.size as keyof typeof btnSize]}
`

export const AntdButton = ({ btnType = 'primary', size = 'medium', backgroundColor, label, ...props }: ButtonProps) => {
  return (
    <Button type="button" style={{ backgroundColor }} btnType={btnType} size={size} {...props}>
      {label}
    </Button>
  )
}
