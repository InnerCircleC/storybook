import {
  GlobalBlack,
  GlobalInfoAccent,
  GlobalInfoNegative,
  GlobalInfoPositive,
  GlobalInfoWarning,
  GlobalWhite,
  LightBorderBorderOpaque,
  LightBorderBorderTransparent,
  LightContentsContentPrimary,
  LightContentsContentSecondary,
  LightContentsContentTertiary,
  LightTertiary,
} from '../../../../theme/js/global'

const colors = {
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
  border: {
    borderOpaque: LightBorderBorderOpaque,
    borderTransparent: LightBorderBorderTransparent,
  },
}

type KeyOfFoundation = keyof typeof colors.foundation
type KeyOfContentsColor = keyof typeof colors.contents
type KeyOfBorder = keyof typeof colors.border

interface Props {
  type: 'foundation' | 'contents' | 'border'
  foundationColor: KeyOfFoundation
  contentsColor: KeyOfContentsColor
  borderColor: KeyOfBorder
}

export const Color = ({ type, foundationColor, contentsColor, borderColor, ...props }: Props) => {
  const currentType = colors[type]
  const currentColor: KeyOfFoundation | KeyOfContentsColor | KeyOfBorder =
    foundationColor || contentsColor || borderColor
  const backgroundColor = currentType[currentColor as keyof typeof currentType]

  return (
    <div
      style={{
        backgroundColor,
        width: '340px',
        height: '197px',
      }}
      {...props}
    />
  )
}
