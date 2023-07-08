import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <main className="max-w-3xl p-10 mx-auto">{children}</main>;
};

export default Container;
