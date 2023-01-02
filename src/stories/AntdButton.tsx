import { useEffect, useState } from 'react'

import { AxiosError } from 'axios'
import type ButtonType from '../types/button'
import { getButtonStyle } from '../server/apis/button'
import styled from 'styled-components'

interface Props {
  layout: 'primary' | 'default' | 'dashed' | 'link'
  backgroundColor?: string
  size: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
}

interface ButtonProps {
  layout: 'primary' | 'default' | 'dashed' | 'link'
  size: 'small' | 'medium' | 'large'
}

export const AntdButton = ({ layout, size, backgroundColor, label, ...props }: Props) => {
  const [btnSize, setBtnSize] = useState({} as ButtonType.BtnSize)
  const [btnType, setBtnType] = useState({} as ButtonType.BtnType)

  useEffect(() => {
    getButtonStyle()
      .then(res => {
        setBtnSize(res.btnSize)
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

    ${props => btnType[props.layout as keyof ButtonType.BtnType]}
    ${props => btnSize[props.size as keyof ButtonType.BtnSize]}
  `

  // Object.keys().length를 확인하는 까닭은 FOUT 해결을 위해서다
  return Object.keys(btnType).length ? (
    <Button type="button" style={{ backgroundColor }} layout={layout} size={size} {...props}>
      {label}
    </Button>
  ) : null
}
