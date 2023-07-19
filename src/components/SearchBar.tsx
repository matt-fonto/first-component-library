import { Button } from "./Button";

interface SearchBarProps {
  query?: string;
  onChange?: (query: string) => void;
}

export const SearchBar = ({ query, onChange }: SearchBarProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-md">
      <div className="relative flex items-center">
        <svg
          className="absolute left-3 h-5 w-5 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        <input
          id="search"
          className="pl-10 pr-4 py-2 w-full rounded-md text-gray-700 focus:outline-none focus:bg-white"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => onChange?.(e.target.value)}
        />

        <Button size="small" color="primary">
          Search
        </Button>
      </div>
    </div>
  );
};
