interface propType {
  text: String;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function Button({ text, handleClick }: propType) {
  return (
    <button
      className="text-2xl bg-indigo-300 p-2 rounded-lg w-48 shadow-lg shadow-cyan-500/50 "
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
