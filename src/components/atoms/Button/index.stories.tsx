import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { Props } from '.';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export default {
  title: 'TechBlog/Atoms/Button',
  component: Button,
  argTypes: {
    mainColor: { control: 'color' },
    bgColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const LikeButton = Template.bind({});
LikeButton.args = {
  children: (
    <>
      <FontAwesomeIcon icon={faHeart} /> いいね
    </>
  ),
};
