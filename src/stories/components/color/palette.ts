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
} from '../../../theme/js/global'

export const colors = {
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
    contentDefault: GlobalWhite,
    contentPrimary: LightContentsContentPrimary,
    contentSecondary: LightContentsContentSecondary,
    contentTertiary: LightContentsContentTertiary,
  },
  border: {
    borderOpaque: LightBorderBorderOpaque,
    borderTransparent: LightBorderBorderTransparent,
  },
}
