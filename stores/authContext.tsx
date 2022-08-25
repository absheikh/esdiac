import * as React from "react";

export const AuthContext = React.createContext(
  {} as {
    user: any;
    token: any;
    signIn: ({ email, password }: any) => void;
    signOut: () => void;
    register: (data: any) => void;
  }
);
