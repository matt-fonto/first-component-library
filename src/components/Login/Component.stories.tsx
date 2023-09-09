import { Meta } from "@storybook/react";
import Login from "./Component";
import { LoginProps } from "./types";

type StoryObj<T> = { (args: T): JSX.Element; args?: T };

const loginMeta: Meta<typeof Login> = {
  component: Login,
  title: "Login",
  tags: ["autodocs"],
  argTypes: {
    email: {
      control: "text",
    },
    password: {
      control: "text",
    },
  },
};

export default loginMeta;

const Template: StoryObj<LoginProps> = (args) => <Login {...args} />;

export const Base = Template.bind({});
Base.args = {
  email: "",
  password: "",
};
