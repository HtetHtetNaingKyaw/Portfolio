import React, { createContext, useContext, useState } from "react";
import { useGetUserSession } from "../react-query/owner";
import { Models } from "appwrite";

type AuthContextType = {
  account: Models.User<Models.Preferences> | undefined;
  setAccount: React.Dispatch<
    React.SetStateAction<Models.User<Models.Preferences> | undefined>
  >;
};

const AuthContext = createContext<AuthContextType>({
  account: undefined,
  setAccount: () => {},
});

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data: account, isPending } = useGetUserSession();

  const [currentAccount, setCurrentAccount] = useState(account);

  const data = { account: currentAccount, setAccount: setCurrentAccount };


  return (
    <AuthContext.Provider value={data}>
      {isPending ? <div className="text-lg">Loading...</div> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
