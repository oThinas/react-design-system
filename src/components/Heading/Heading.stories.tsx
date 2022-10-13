import { Meta, StoryObj } from '@storybook/react'
import { IHeadingProps, Heading } from '.'

export default {
  title: 'Components/Heading',
  component: Heading,
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
} as Meta<IHeadingProps>

export const Large: StoryObj<IHeadingProps> = {
  args: {
    size: 'lg'
  }
}
export const Medium: StoryObj<IHeadingProps> = {
  args: {
    size: 'md'
  }
}
export const Small: StoryObj<IHeadingProps> = {
  args: {
    size: 'sm'
  }
}

export const CustomTag: StoryObj<IHeadingProps> = {
  args: {
    size: 'md',
    asChild: true,
    children: (
      <h1>Heading with h1 tag</h1>
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