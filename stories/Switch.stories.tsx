import { ComponentStory } from '@storybook/react';
import SwitchComp from '../src/Component/Switch/Switch';

export default {
  title:  'Components/Inputs/Switch',
  component: SwitchComp,
  argTypes: {
    size: {
      options: ['small', 'medium'],
      control: { type: 'select' },
    },
  },
};

const Template: ComponentStory<typeof SwitchComp> = args => <SwitchComp {...args} />;

export const Switch = Template.bind({});
Switch.args = {
  title: 'Remember Me',
  subTitle: 'Save my login details for next time.',
  size: 'small',
  disabled: false,
  defaultChecked: true,
};
