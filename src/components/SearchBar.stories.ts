import { SearchBar } from "./SearchBar";
import { StoryObj, Meta } from "@storybook/react";

const searchBarMeta: Meta<typeof SearchBar> = {
  component: SearchBar,
  title: "SearchBar",
  //  add docs
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
