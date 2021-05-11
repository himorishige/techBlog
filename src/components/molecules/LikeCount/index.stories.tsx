import React from 'react';
import { Meta, Story } from '@storybook/react';
import LikeCount, { Props } from '.';

export default {
  title: 'TechBlog/Molecules/LikeCount',
  component: LikeCount,
} as Meta;

const Template: Story<Props> = (args) => <LikeCount {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 100,
};
