import { createContext } from "react";

type UserConextType = {
  user: string;
  setUser: (a: string) => void;
};

export const UserContext = createContext<UserConextType>({
  user: "",
  setUser: () => {},
});
