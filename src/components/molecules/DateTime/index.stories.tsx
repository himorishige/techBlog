import React from 'react';
import { Meta, Story } from '@storybook/react';
import DateTime, { Props } from '.';

export default {
  title: 'TechBlog/Molecules/DateTime',
  component: DateTime,
} as Meta;

const Template: Story<Props> = (args) => <DateTime {...args} />;

export const Default = Template.bind({});
const now = Date.now();
Default.args = {
  label: '更新日：',
  datetime: now,
};
