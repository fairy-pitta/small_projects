import React from 'react';
import { PrimaryButton } from '../components/atoms/buttons/PrimaryButton';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Atoms/PrimaryButton',
  component: PrimaryButton,
};

const Template = (args) => <PrimaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Primary',
  onClick: action('clicked'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Primary (Disabled)',
  onClick: action('clicked'),
  disabled: true,
};