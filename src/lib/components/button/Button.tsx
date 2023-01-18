import { colors } from '../../../utils/color'
import styled from 'styled-components'

interface Props {
  backgroundColor?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'negative' | 'warning' | 'positive'
  color?: 'contentDefault' | 'contentPrimary' | 'contentSecondary' | 'contentTertiary'
  size?: 'large' | 'medium' | 'small'
  label?: string
  onClick?: () => void
}

type ButtonProps = Pick<Props, 'size' | 'label'>

const btnSize = {
  small: 'font-size: 0.75rem; padding: 0.625rem 1rem;',
  medium: 'font-size: 0.875rem; padding: 0.6875rem 1.25rem;',
  large: 'font-size: 1rem; padding: 0.75rem 1.5rem;',
}

function Button({ size = 'medium', backgroundColor = 'primary', color = 'contentDefault', label = 'primary' }: Props) {
  const currentBgColor = colors.foundation[backgroundColor]
  const currentColor = colors.contents[color]

  const ButtonComp = styled.button<ButtonProps>`
    border: 0;
    border-radius: 0.375rem;
    cursor: pointer;
    display: inline-block;
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    line-height: 1;
    text-transform: capitalize;

    ${props => btnSize[props.size ?? 'medium']}
  `

  return (
    <ButtonComp
      type="button"
      style={{
        backgroundColor: currentBgColor,
        color: currentColor,
        border: `${currentBgColor} 1px solid`,
        padding: `12px 16px`,
      }}
      label={label}
      size={size}
    >
      {label}
    </ButtonComp>
  )
}

export default Button
