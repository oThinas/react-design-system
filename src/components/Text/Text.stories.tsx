import { Meta, StoryObj } from '@storybook/react'
import { ITextProps, Text } from '.'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsun.'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<ITextProps>

export const Large: StoryObj<ITextProps> = {
  args: {
    size: 'lg'
  }
}
export const Medium: StoryObj<ITextProps> = {
  args: {
    size: 'md'
  }
}
export const Small: StoryObj<ITextProps> = {
  args: {
    size: 'sm'
  }
}

export const CustomTag: StoryObj<ITextProps> = {
  args: {
    size: 'md',
    asChild: true,
    children: (
      <p>Text with p tag</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}