/* eslint-disable no-duplicate-imports */
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { AntdButton } from './AntdButton'

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
  size: 'medium',
  label: 'primary',
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

export const Link = Template.bind({})
Link.args = {
  size: 'medium',
  label: 'link',
}
