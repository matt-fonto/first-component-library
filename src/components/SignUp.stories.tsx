import { Meta, StoryObj } from "@storybook/react";
import { SignUp } from "./SignUp";

const signUpMeta: Meta<typeof SignUp> = {
  component: SignUp,
  title: "SignUp",
  //  add docs
  tags: ["autodocs"],
  argTypes: {
    fullName: {
      control: "text",
    },
    email: {
      control: "text",
    },
    password: {
      control: "text",
    },
  },
};

export default signUpMeta;

// @ts-ignore
const Template: StoryObj<typeof SignUp> = (args) => <SignUp {...args} />;

// @ts-ignore
export const Base = Template.bind({});
Base.args = {
  fullName: "",
  email: "",
  password: "",
};
