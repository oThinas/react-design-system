import { Meta, StoryObj } from '@storybook/react'
import { ICheckboxProps, Checkbox } from '.'

import { Text } from '../Text'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return(
        <div className='flex items-center gap-2'>
          {Story()}
          <Text size='sm'>
            Lembrar de mim
          </Text>
        </div>
      )
    }
  ]
} as Meta<ICheckboxProps>

export const Default: StoryObj<ICheckboxProps> = {
  argTypes: {
    asChild: {
      table: {
        disable: true
      }
    }
  }
}
