import React from "react";
import Footer from "./Footer";
import { Header } from "./Header";
import Loader from "./Loader";

interface LayoutIProps {
  children: React.ReactNode;
  active?: number;
  page?: string;
  loading?: boolean;
}

const Layout = ({ children, loading, active, page }: LayoutIProps) => {
  return (
    <>
      {loading && <Loader />}

      {page && active && <Header active={active} page={page} />}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
