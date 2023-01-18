import {
  GlobalSpace1,
  GlobalSpace10,
  GlobalSpace11,
  GlobalSpace12,
  GlobalSpace13,
  GlobalSpace14,
  GlobalSpace15,
  GlobalSpace16,
  GlobalSpace2,
  GlobalSpace3,
  GlobalSpace4,
  GlobalSpace5,
  GlobalSpace6,
  GlobalSpace7,
  GlobalSpace8,
  GlobalSpace9,
} from '../../../../theme/js/global'

type Size =
  | typeof GlobalSpace1
  | typeof GlobalSpace2
  | typeof GlobalSpace3
  | typeof GlobalSpace4
  | typeof GlobalSpace5
  | typeof GlobalSpace6
  | typeof GlobalSpace7
  | typeof GlobalSpace8
  | typeof GlobalSpace9
  | typeof GlobalSpace10
  | typeof GlobalSpace11
  | typeof GlobalSpace12
  | typeof GlobalSpace13
  | typeof GlobalSpace14
  | typeof GlobalSpace15
  | typeof GlobalSpace16

type Unit = 'px'

interface Props {
  size: `${Size}${Unit}`
}

export const Spacing = ({ size, ...props }: Props) => {
  return <div style={{ backgroundColor: '#0075ff', width: size, height: size }} {...props} />
}
