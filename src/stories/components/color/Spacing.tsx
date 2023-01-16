// TODO: 숫자를 자동으로 증가시킬 방법이 있는지 알아볼 것
type Size = 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 64

type Unit = 'px'

interface Props {
  size: `${Size}${Unit}`
}

export const Spacing = ({ size, ...props }: Props) => {
  return <div style={{ backgroundColor: '#0075ff', width: size, height: size }} {...props} />
}
