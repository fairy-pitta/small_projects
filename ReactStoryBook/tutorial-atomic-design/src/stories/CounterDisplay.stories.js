import React from 'react';
import { CounterDisplay } from '../components/molecules/CounterDisplay';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Molecules/CounterDisplay',
  component: CounterDisplay,
};

const Template = (args) => <CounterDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 10,
  increment: action('increment'),
  decrement: action('decrement'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  count: 10,
  increment: action('increment'),
  decrement: action('decrement'),
  disabled: true,
};
