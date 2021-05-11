import React from 'react';
import { Meta, Story } from '@storybook/react';
import Heading, { Props } from '.';

export default {
  title: 'TechBlog/Atoms/Heading',
  component: Heading,
} as Meta;

const Template: Story<Props> = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'ブログ記事のタイトル',
};
