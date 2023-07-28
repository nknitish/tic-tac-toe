interface propType {
  text: String;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function Button({ text, handleClick }: propType) {
  return (
    <button
      className="text-1xl md:text-3xl bg-indigo-300 p-2 px-10 pr-10 rounded-lg shadow-lg shadow-cyan-500/50 "
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
