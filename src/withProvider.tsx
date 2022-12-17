import React, { Component, Context, Provider, useContext } from "react";
import { UserContext } from "./Contexts";

const withProvider = <T,P>(provider: Context<T>) => (IncomingComponent: Component<P>) => (props: P) => {
  const contextData = useContext<T>(provider);
  return <IncomingComponent {...props} {...contextData} />;
};

export default withProvider;

export const withUser = withProvider(UserContext);
