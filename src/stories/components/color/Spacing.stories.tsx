/* eslint-disable no-duplicate-imports */
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Spacing } from './Spacing'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Antd/Spacing',
  component: Spacing,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Spacing>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Spacing> = args => <Spacing {...args} />

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const PX4 = Template.bind({})
PX4.args = {
  size: '4px',
}
