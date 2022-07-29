import { ComponentStory } from '@storybook/react';
import InputComp from '../src/Component/Input/Input';

export default {
  title: 'Components/Inputs',
  component: InputComp,
  argTypes: {
    variant: {
      options: ['outlined', 'filled', 'standard'],
      control: { type: 'select' },
    },
  },
};

const Template: ComponentStory<typeof InputComp> = args => <InputComp {...args} />;

export const TextField = Template.bind({});
TextField.args = {
  label: 'Email Address',
  disabled: false,
  variant: 'filled',
  size: 'small',
};
