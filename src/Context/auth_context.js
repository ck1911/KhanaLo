import { createContext, useState } from "react";

export const AuthContext = createContext();

const initialState = {
  authenticated: false,
  isAdmin: false,
  userData: {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  },
};
const initialStateHistory = [
    {
        idMeal:52874,
        strMealThumb:"https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
        strMeal:"Beef and Mustard Pie",
        price:22,
        date:new Date("2023-03-25"),
        quantity:3
    },
    {
        idMeal:53071,
        strMealThumb:"https://www.themealdb.com/images/media/meals/pkopc31683207947.jpg",
        strMeal:"Beef Asado",
        price:30,
        date:new Date("2023-03-27"),
        quantity:2
    }
]

export const AuthProvider = ({ ...props }) => {
  const [user, setUser] = useState(initialState);
  const [history, setHistory] = useState(initialStateHistory);

  const login = (login_cred) => {
    if (login_cred.email === "admin" && login_cred.password === "admin") {
      setUser({
        isAdmin: true,
        authenticated: true,
        userData: login_cred,
      });
    } else {
      setUser({
        isAdmin: false,
        authenticated: true,
        userData: login_cred,
      });
    }

    return true
  };
  const logout = () => {
    setUser(initialState);
  };

  return (
    <AuthContext.Provider value={{ login, logout, setUser, user,setHistory,history }} {...props} />
  );
};
