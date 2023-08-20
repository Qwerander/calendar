import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface IlayoutProps {
  children?: ReactNode; 
}

export function Layout({ children }: IlayoutProps) {
  return (
    <>
      {children}
      <Outlet />
    </>
  );
}
