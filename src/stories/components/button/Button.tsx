import { useEffect, useState } from 'react'

import { AxiosError } from 'axios'
import type ButtonType from '../../../types/button'
import { getButtonStyle } from '../../../server/apis/button'
import styled from 'styled-components'

interface Props {
  backgroundColor?: string
  color?: string
  borderColor?: string
  paddingX?: string
  paddingY?: string
  size: 'large' | 'medium' | 'small'
  label: string
  onClick?: () => void
}

type ButtonProps = Pick<Props, 'size' | 'label'>

export const Button = ({
  size,
  backgroundColor,
  color,
  borderColor = '#fff',
  paddingX = '8px',
  paddingY = '8px',
  label,
  ...props
}: Props) => {
  const [btnSize, setBtnSize] = useState({} as ButtonType.BtnSize)
  const [btnType, setBtnType] = useState({} as ButtonType.BtnType)

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
  // Object.keys().length를 확인하는 까닭은 FOUT 해결을 위해서다
  return Object.keys(btnType).length ? (
    <Button
      type="button"
      style={{ backgroundColor, color, border: `${borderColor} 1px solid`, padding: `${paddingY} ${paddingX}` }}
      label={label}
      size={size}
      {...props}
    >
      {label}
    </Button>
  ) : null
}
