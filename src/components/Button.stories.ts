import { Button } from "./Button";
import { StoryObj, Meta } from "@storybook/react";

const buttonMeta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  //  add docs
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary", "danger"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
  },
};

export default buttonMeta;

type ButtonStory = StoryObj<typeof buttonMeta>;

export const Base: ButtonStory = {
  args: {
    children: "Button",
    color: "primary",
    size: "medium",
  },
};

export const LargePrimary: ButtonStory = {
  args: {
    children: "Button",
    color: "primary",
    size: "large",
  },
};

export const Secondary: ButtonStory = {
  args: {
    children: "Button",
    color: "secondary",
    size: "medium",
  },
};

export const Danger: ButtonStory = {
  args: {
    children: "Button",
    color: "danger",
  },
};
