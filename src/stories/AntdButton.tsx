import styled from 'styled-components'

export interface ButtonProps {
  btnType: 'primary' | 'default' | 'dashed' | 'link'
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
}

const Button = styled.button<{ btnType: string; size: string }>`
  background-color: #fff;
  border: 0;
  border-radius: 0.375rem;
  cursor: pointer;
  display: inline-block;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  line-height: 1;

  ${props => {
    switch (props.btnType) {
      case 'primary':
        return `background-color: #1677ff; color: white;`
      case 'default':
        return `border: 0.0625rem solid #d9d9d9; box-shadow: 0 0.125rem 0 rgb(0 0 0 / 0.02);`
      case 'dashed':
        return `border: 0.0625rem solid #d9d9d9; border-style: dashed; box-shadow: 0 0.125rem 0 rgb(0 0 0 / 0.02);`
      case 'link':
        return `color: #1677ff;`
    }
  }}

  ${props => {
    switch (props.size) {
      case 'small':
        return `font-size: 0.75rem; padding: 0.625rem 1rem;`
      case 'medium':
        return `font-size: 0.875rem; padding: 0.6875rem 1.25rem;`
      case 'large':
        return `font-size: 1rem; padding: 0.75rem 1.5rem;`
    }
  }}
`

export const AntdButton = ({ btnType = 'primary', size = 'medium', backgroundColor, label, ...props }: ButtonProps) => {
  return (
    <Button type="button" style={{ backgroundColor }} btnType={btnType} size={size} {...props}>
      {label}
    </Button>
  )
}
