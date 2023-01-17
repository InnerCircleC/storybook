import {
  GlobalBlack,
  GlobalInfoAccent,
  GlobalInfoNegative,
  GlobalInfoPositive,
  GlobalInfoWarning,
  GlobalWhite,
  LightTertiary,
} from '../../../../theme/js/global'

const colors = {
  primary: GlobalBlack,
  secondary: GlobalWhite,
  tertiary: LightTertiary,
  accent: GlobalInfoAccent,
  negative: GlobalInfoNegative,
  warning: GlobalInfoWarning,
  positive: GlobalInfoPositive,
}

interface Props {
  color: keyof typeof colors
}

export const Color = ({ color, ...props }: Props) => {
  return <div style={{ backgroundColor: colors[color], width: '340px', height: '197px' }} {...props} />
}
