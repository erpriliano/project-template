import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Button, ButtonProps } from './index';

export default {
  title: 'Button',
  component: Button,
  decorators: [
    (storyFn) => (
      <div style={{
        margin: '2rem',
        maxHeight: '200px',
        maxWidth: '200px',
      }}
      >
        {storyFn()}
      </div>
    ),
  ],
} as Meta;

export const NormalButton: Story<ButtonProps> = (args) => <Button {...args} />;

NormalButton.args = {
  disabled: false,
  type: 'button',
  children: 'Demo Text',
};

NormalButton.argTypes = {
  onClick: { action: 'button-click' },
  type: {
    control: {
      type: 'select',
      options: ['button', 'submit', 'reset'],
    },
    description: 'Optional button [type] attribute',
  },
  disabled: {
    control: {
      type: 'boolean',
    },
    description: 'Enabling / disabling the button',
  },
  children: {
    control: {
      type: 'text',
    },
    description: 'Free string that comes up inside the button',
  },
};
