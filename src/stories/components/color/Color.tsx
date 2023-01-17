import {
  GlobalBlack,
  GlobalInfoAccent,
  GlobalInfoNegative,
  GlobalInfoPositive,
  GlobalInfoWarning,
  GlobalWhite,
  LightContentsContentPrimary,
  LightContentsContentSecondary,
  LightContentsContentTertiary,
  LightTertiary,
} from '../../../../theme/js/global'

const colors = {
  // primary: GlobalBlack,
  // secondary: GlobalWhite,
  // tertiary: LightTertiary,
  // accent: GlobalInfoAccent,
  // negative: GlobalInfoNegative,
  // warning: GlobalInfoWarning,
  // positive: GlobalInfoPositive,
  // contentPrimary: LightContentsContentPrimary,
  // contentSecondary: LightContentsContentSecondary,
  // contentTertiary: LightContentsContentTertiary,
  foundation: {
    primary: GlobalBlack,
    secondary: GlobalWhite,
    tertiary: LightTertiary,
    accent: GlobalInfoAccent,
    negative: GlobalInfoNegative,
    warning: GlobalInfoWarning,
    positive: GlobalInfoPositive,
  },
  contents: {
    contentPrimary: LightContentsContentPrimary,
    contentSecondary: LightContentsContentSecondary,
    contentTertiary: LightContentsContentTertiary,
  },
}

interface Props {
  type: 'foundation' | 'contents'
  foundationColor: keyof typeof colors.foundation
  contentsColor: keyof typeof colors.contents
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Color = ({ type, foundationColor, contentsColor, ...props }: Props) => {
  const color = foundationColor || contentsColor

  return (
    <div
      style={{
        backgroundColor: colors[type as keyof typeof colors.foundation & keyof typeof colors.contents][color],
        width: '340px',
        height: '197px',
      }}
      {...props}
    />
  )
}
