import Button from "../Button";
import { SignUpProps } from "./types";

const SignUp = ({ fullName, email, password }: SignUpProps) => {
  return (
    <form className="bg-white px-8 pt-6 pb-8 mb-4 rounded shadow-md max-w-sm">
      <div className="mb-4">
        <label className="label" htmlFor="name">
          Full Name
        </label>

        <input
          className="input"
          id="name"
          type="text"
          placeholder="Full Name"
          value={fullName}
        />
      </div>

      <div className="mb-4">
        <label className="label" htmlFor="email">
          Email
        </label>

        <input
          className="input"
          id="email"
          type="email"
          placeholder="Email"
          value={email}
        />
      </div>

      <div className="mb-6">
        <label className="label" htmlFor="password">
          Password
        </label>

        <input
          className="input"
          id="password"
          type="password"
          placeholder="Your Password"
          value={password}
        />
      </div>

      <div className="flex justify-center">
        <Button size="large" color="primary">
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default SignUp;
