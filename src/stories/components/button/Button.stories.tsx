/* eslint-disable no-duplicate-imports */
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from './Button'
import { colors } from '../color'
import { space } from '../spacing'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Antd/Button',
  component: Button,
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  size: 'medium',
  label: 'primary',
  backgroundColor: `${colors.foundation.primary}`,
  color: `${colors.contents.ContentDefault}`,
  borderColor: `${colors.border.borderOpaque}`,
  paddingX: `${space.space4}`,
  paddingY: `${space.space2}`,
}

export const Secondary = Template.bind({})
Secondary.args = {
  size: 'medium',
  label: 'secondary',
  backgroundColor: `${colors.foundation.secondary}`,
  color: `${colors.contents.contentSecondary}`,
  borderColor: `${colors.border.borderTransparent}`,
  paddingX: `${space.space4}`,
  paddingY: `${space.space2}`,
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  size: 'medium',
  label: 'tertiary',
  backgroundColor: `${colors.foundation.tertiary}`,
  color: `${colors.contents.contentSecondary}`,
  borderColor: `${colors.border.borderTransparent}`,
  paddingX: `${space.space4}`,
  paddingY: `${space.space2}`,
}

export const Accent = Template.bind({})
Accent.args = {
  size: 'medium',
  label: 'accent',
  backgroundColor: `${colors.foundation.accent}`,
  color: `${colors.contents.ContentDefault}`,
  borderColor: `${colors.border.borderTransparent}`,
  paddingX: `${space.space4}`,
  paddingY: `${space.space2}`,
}

export const Negative = Template.bind({})
Negative.args = {
  size: 'medium',
  label: 'negative',
  backgroundColor: `${colors.foundation.negative}`,
  color: `${colors.contents.ContentDefault}`,
  borderColor: `${colors.border.borderTransparent}`,
  paddingX: `${space.space4}`,
  paddingY: `${space.space2}`,
}

export const Warning = Template.bind({})
Warning.args = {
  size: 'medium',
  label: 'warning',
  backgroundColor: `${colors.foundation.warning}`,
  color: `${colors.contents.ContentDefault}`,
  borderColor: `${colors.border.borderTransparent}`,
  paddingX: `${space.space4}`,
  paddingY: `${space.space2}`,
}

export const Positive = Template.bind({})
Positive.args = {
  size: 'medium',
  label: 'positive',
  backgroundColor: `${colors.foundation.positive}`,
  color: `${colors.contents.ContentDefault}`,
  borderColor: `${colors.border.borderTransparent}`,
  paddingX: `${space.space4}`,
  paddingY: `${space.space2}`,
}

export const Default = Template.bind({})
Default.args = {
  size: 'medium',
  label: 'default',
}

export const Dashed = Template.bind({})
Dashed.args = {
  size: 'medium',
  label: 'dashed',
}

// FIXME: label 안 나오고 패딩 없는 등 문제 발생 원인 찾아서 수정할 것
export const Text = Template.bind({})
Dashed.args = {
  size: 'medium',
  label: 'text',
}

export const Link = Template.bind({})
Link.args = {
  size: 'medium',
  label: 'link',
}
