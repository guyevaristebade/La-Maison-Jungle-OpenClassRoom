import React, { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-1">{children}</div>;
};

export default Layout;
