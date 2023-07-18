import { Button } from "./Button";

interface LoginProps {
  email: string;
  password: string;
}

export const Login = ({ email, password }: LoginProps) => {
  return (
    <form className="bg-white p-6 rounded-lg shadow-md max-w-sm">
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          className="border border-gray-400 p-2 w-full rounded"
          type="email"
          placeholder="Email"
          value={email}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Password</label>
        <input
          className="border border-gray-400 p-2 w-full rounded"
          type="password"
          placeholder="Password"
          value={password}
        />
      </div>

      <div className="flex justify-center">
        <Button size="large">Login</Button>
      </div>
    </form>
  );
};
