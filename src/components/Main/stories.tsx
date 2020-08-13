import { Meta, Story } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta;

export const Basic: Story = () => (
  <Main
    title={text('Title', 'NextJS')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJS e Styled-Components'
    )}
  />
);
