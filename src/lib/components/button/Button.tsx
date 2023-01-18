import { useEffect, useState } from 'react'

import { AxiosError } from 'axios'
import type ButtonType from '../../../types/button'
import { colors } from '../../../utils/color'
import { getButtonStyle } from '../../../server/apis/button'
import styled from 'styled-components'

interface Props {
  backgroundColor?: string
  color?: string
  size?: 'large' | 'medium' | 'small'
  label?: string
  onClick?: () => void
}

type ButtonProps = Pick<Props, 'size' | 'label'>

function Button({ size = 'medium', backgroundColor = 'primary', color = 'contentDefault', label = 'primary' }: Props) {
  const [btnSize, setBtnSize] = useState({} as ButtonType.BtnSize)
  const [btnType, setBtnType] = useState({} as ButtonType.BtnType)

  const currentBgColor = colors.foundation[backgroundColor as keyof typeof colors.foundation]
  const currentColor = colors.contents[color as keyof typeof colors.contents]

  useEffect(() => {
    getButtonStyle()
      .then(res => {
        setBtnSize(res.btnSize)
        // TODO: style.json > btnType에서 text 프로퍼티 제거 가능하면 제거할 것
        setBtnType(res.btnType)
      })
      .catch((err: AxiosError) => console.error(err.message))
  }, [])

  const Button = styled.button<ButtonProps>`
    background-color: #fff;
    border: 0;
    border-radius: 0.375rem;
    cursor: pointer;
    display: inline-block;
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    line-height: 1;
    text-transform: capitalize;

    ${props => btnType[props.label as keyof ButtonType.BtnType]}
    ${props => btnSize[props.size as keyof ButtonType.BtnSize]}
  `

  // FOUT 해결을 위해 Object.keys().length 확인
  return Object.keys(btnType).length ? (
    <Button
      type="button"
      style={{
        backgroundColor: currentBgColor,
        color: currentColor,
        border: `${currentBgColor} 1px solid`,
        padding: `8px`,
      }}
      label={label}
      size={size}
    >
      {label}
    </Button>
  ) : null
}

export default Button
