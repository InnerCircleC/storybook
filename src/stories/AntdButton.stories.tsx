/* eslint-disable no-duplicate-imports */
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { AntdButton } from './AntdButton'

// import type { ButtonProps } from './AntdButton'

// declare module './AntdButton' {
//   const value: ButtonProps
//   export default value
// }

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Clone/AntdButton',
  component: AntdButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AntdButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AntdButton> = args => <AntdButton {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  layout: 'primary',
  size: 'medium',
  label: 'Primary Button',
}

export const Default = Template.bind({})
Default.args = {
  layout: 'default',
  size: 'medium',
  label: 'Default Button',
}

export const Dashed = Template.bind({})
Dashed.args = {
  layout: 'dashed',
  size: 'medium',
  label: 'Dashed Button',
}

// TODO: 추가할 것
// export const Text = Template.bind({})
// Text.args = {
//   layout: 'text',  size: 'medium',
//   label: 'Text Button',
// }

export const Link = Template.bind({})
Link.args = {
  layout: 'link',
  size: 'medium',
  label: 'Link Button',
}
