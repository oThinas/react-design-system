import { Meta, StoryObj } from '@storybook/react'
import { IButtonProps, Button } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account'
  },
  argTypes: {
    
  }
} as Meta<IButtonProps>

export const Default: StoryObj<IButtonProps> = {
  argTypes: {
    asChild: {
      table: {
        disable: true
      }
    }
  }
}
