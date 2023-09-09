import { StoryObj, Meta } from "@storybook/react";
import SearchBar from "./Component";

const searchBarMeta: Meta<typeof SearchBar> = {
  component: SearchBar,
  title: "SearchBar",
  tags: ["autodocs"],
  argTypes: {
    query: {
      control: "text",
    },
  },
};

export default searchBarMeta;

type ButtonStory = StoryObj<typeof searchBarMeta>;

export const Base: ButtonStory = {
  args: {
    query: "test",
  },
};
