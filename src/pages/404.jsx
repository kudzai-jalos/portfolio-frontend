import { useEffect } from "react";
import Layout from "../components/layout/Layout";
import layoutClasses from "../components/layout/Layout.module.css";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page not found.";

    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <Layout>
      <main className={layoutClasses.container}>
        <h1>Page not found.</h1>
      </main>
    </Layout>
  );
};

export default NotFound;
