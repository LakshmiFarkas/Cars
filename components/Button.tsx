import { ButtonProps } from "@/types";
const Button = ({ title, customCSS, handleClick, type }: ButtonProps) => {
  return (
    <button
      className={`custom-button ${customCSS}`}
      disabled={false}
      type={type}
      onClick={() => {}}
    >
      <span>{title}</span>
    </button>
  );
};

export default Button;
