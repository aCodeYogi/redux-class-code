import {
  ButtonHTMLAttributes,
  createContext,
  FC,
  useContext,
  useState,
} from "react";

type ButtonProps = {
  theme?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
} & ButtonHTMLAttributes<HTMLButtonElement>;

type Product = {
  id: number;
  title: string;
  discipiton: string;
};

type User = {
  id: number;
  name: string;
  email: string;
};

type UserContextData =
  | {
      user: User;
      setUser: (u: User) => void;
    }
  | undefined;

const UserContext = createContext<UserContextData>(undefined);

const Button: FC<ButtonProps> = ({ theme, className, size, ...rest }) => {
  console.log("theme is", theme);

  const [product, setProduct] = useState(0);

  let themeClasses = "text-white";

  if (theme == "secondary") {
    themeClasses = "bg-white";
  }

  let sizeClass = "";

  switch (size) {
    case "small":
      sizeClass = "text-sm";
      break;
    case "medium":
      sizeClass = "text-xl";
      break;
    case "large":
      sizeClass = "text-3xl";
  }

  const xyz = useContext(UserContext);

  return (
    <button
      {...rest}
      className={
        "px-2 py-1 border rounded-md " +
        className +
        " " +
        themeClasses +
        " " +
        sizeClass
      }
    ></button>
  );
};

Button.defaultProps = {
  theme: "primary",
  size: "small",
};

export default Button;
