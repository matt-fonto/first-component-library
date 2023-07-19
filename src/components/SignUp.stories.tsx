import { Meta } from "@storybook/react";
import { SignUp, SignUpProps } from "./SignUp";

type StoryObj<T> = { (args: T): JSX.Element };

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

const Template: StoryObj<SignUpProps> = (args) => <SignUp {...args} />;

export const Base = Template.bind({});
Base.args = {
  fullName: "",
  email: "",
  password: "",
};
