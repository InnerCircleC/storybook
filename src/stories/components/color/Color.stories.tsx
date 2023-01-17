/* eslint-disable no-duplicate-imports */
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Color } from './Color'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Foundation/Color',
  component: Color,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Color>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Color> = args => <Color {...args} />

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Foundation = Template.bind({})
Foundation.args = {
  color: 'primary',
}
