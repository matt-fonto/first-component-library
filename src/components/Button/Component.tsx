import { COLOR_CLASSES, SIZE_CLASSES } from "./styles";
import { ButtonProps } from "./types";

const Button = ({ children, onClick, size, color }: ButtonProps) => {
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

export default Button;
