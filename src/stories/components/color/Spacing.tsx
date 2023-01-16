// TODO: 숫자를 자동으로 증가시킬 방법이 있는지 알아볼 것
type Size = 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 64

type Unit = 'px'

interface Props {
  backgroundColor?: string
  size: `${Size}${Unit}`
  onClick?: () => void
}

export const Spacing = ({ size, backgroundColor, ...props }: Props) => {
  return <div style={{ backgroundColor, width: size, height: size }} {...props} />
}
