import React from 'react';
import { Meta, Story } from '@storybook/react';
import PostItem, { Props } from '.';

export default {
  title: 'TechBlog/Molecules/PostItem',
  component: PostItem,
} as Meta;

const Template: Story<Props> = (args) => <PostItem {...args} />;

export const Default = Template.bind({});
Default.args = {};
