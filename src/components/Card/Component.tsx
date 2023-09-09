import Button from "../Button";
import { CardProps } from "./types";

const Card = ({
  imageUrl,
  date,
  readTime,
  title,
  description,
  buttonText,
}: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 space-y-4 transition-all transform max-w-sm">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
        />
      )}

      <div className="flex items-center text-sm text-gray-500 space-x-2">
        <p>{date}</p>
        <p>&sdot;</p>
        <p>{readTime}</p>
      </div>

      <h2 className="text-lg font-semibold">{title}</h2>

      <p className="text-sm text-gray-600">
        {description && description.length > 50
          ? description.substring(0, 50) + "..."
          : description}
      </p>

      <div className="flex justify-end">
        <Button size="small" color="primary">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Card;
