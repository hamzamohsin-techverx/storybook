import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../src/Component/Button/Button';

export default {
  title: 'Components/Buttons',
  component: Button,
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'select' },
    },
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Buttons = Template.bind({});
Buttons.args = {
  label: 'Talk to Sales',
  icon: true,
  size: 'large',
  disabled: false,
  color: 'primary',
};
