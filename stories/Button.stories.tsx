import React from "react";
import {Meta, Story} from '@storybook/react';
import {Button , Props} from "../src/Button";

const meta: Meta = {
    title: 'Button',
    component: Button,
    argTypes: {
        children: {
            defaultValue:'Default  text'
        },
        background: {
            control: { type: 'select' },
        }

    }
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const filled = Template.bind({});

export const outlined = Template.bind({});

export const Link = Template.bind({});

export const Large = Template.bind({});

export const Small = Template.bind({});

filled.args = {
    variant: 'filled',
    children: 'filled Button',
    background: ''
};

outlined.args = {
    variant: 'outlined',
    children: 'outlined Button',
    background: ''
};

Link.args = {
    variant: 'link',
    children: 'Link Button',
    background: ''
};

Large.args = {
    variant: 'large',
    children: 'Large Button',
    background: ''
}

Small.args = {
    variant: 'small',
    children: 'Small Button',
    background: ''
}

