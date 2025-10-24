interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-yellow-400 px-6 py-3 font-bold text-black uppercase flex items-center gap-2 hover:bg-yellow-500 transition"
    >
      {text} →
    </button>
  );
};

export default Button;