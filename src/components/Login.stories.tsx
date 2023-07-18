import { Meta, StoryObj } from "@storybook/react";
import { Login } from "./Login";

const loginMeta: Meta<typeof Login> = {
  component: Login,
  title: "Login",
  //  add docs
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

// @ts-ignore
const Template: StoryObj<typeof Login> = (args) => <Login {...args} />;

// @ts-ignore
export const Base = Template.bind({});
Base.args = {
  email: "",
  password: "",
};
