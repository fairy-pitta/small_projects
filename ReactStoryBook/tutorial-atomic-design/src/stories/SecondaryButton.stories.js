import React from 'react';
import { SecondaryButton } from '../components/atoms/buttons/SecondaryButton';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Atoms/SecondaryButton',
  component: SecondaryButton,
};

const Template = (args) => <SecondaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Secondary',
  onClick: action('clicked'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Secondary (Disabled)',
  onClick: action('clicked'),
  disabled: true,
};