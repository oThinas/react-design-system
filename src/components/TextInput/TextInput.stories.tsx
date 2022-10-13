import { Envelope } from 'phosphor-react'
import { Meta, StoryObj } from '@storybook/react'
import { ITextInputRootProps, TextInput } from '.'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope/>
      </TextInput.Icon>,
      <TextInput.Input placeholder='Type your email address here'/>
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
  }
} as Meta<ITextInputRootProps>

export const Default: StoryObj<ITextInputRootProps> = {
  args: {

  },
  argTypes: {

  }
}

export const WithoutIcon: StoryObj<ITextInputRootProps> = {
  args: {
    children: (
      <TextInput.Input placeholder='Type your email address here'/>
    )
  },
  argTypes: {

  }
}