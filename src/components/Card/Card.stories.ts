import { StoryObj, Meta } from "@storybook/react";
import Card from "./Component";

const cardMeta: Meta<typeof Card> = {
  component: Card,
  title: "Card",
  //  add docs
  tags: ["autodocs"],
  argTypes: {
    imageUrl: {
      control: "text",
    },
    date: {
      control: "text",
    },
    readTime: {
      control: "text",
    },
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    buttonText: {
      control: "text",
    },
  },
};

export default cardMeta;

type ButtonStory = StoryObj<typeof cardMeta>;

export const Base: ButtonStory = {
  args: {
    imageUrl:
      "https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
    date: "2023-12-12",
    readTime: "5 min read",
    title: "Title",
    description: "Description",
    buttonText: "Button",
  },
};
