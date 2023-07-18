export interface ButtonProps {
  // the children are of type ReactNode, which means that they can be anything that can be rendered by React
  children?: React.ReactNode;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "danger";
}

const SIZE_CLASSES = {
  small: "py-1 px-2 text-sm",
  large: "py-3 px-6 text-lg",
  medium: "py-2 px-4 text-md",
};

const COLOR_CLASSES = {
  primary: "bg-blue-500 hover:bg-blue-700",
  secondary: "bg-gray-500 hover:bg-gray-700",
  danger: "bg-red-500 hover:bg-red-700",
};

export const Button = ({ children, onClick, size, color }: ButtonProps) => {
  const sizeClasses = SIZE_CLASSES[size || "medium"];
  const colorClasses = COLOR_CLASSES[color || "primary"];

  return (
    <button
      onClick={onClick}
      className={`${sizeClasses} ${colorClasses} text-white font-bold rounded`}
    >
      {children}
    </button>
  );
};
