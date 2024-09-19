export default function SearchBar({ setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Search"
      className="w-full p-2 text-center rounded-md"
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}
