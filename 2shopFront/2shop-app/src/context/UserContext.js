import react from "react";

const user = {
  firstname: "",
  email: "",
};

const UserContext = react.createContext(user);

export default UserContext;
