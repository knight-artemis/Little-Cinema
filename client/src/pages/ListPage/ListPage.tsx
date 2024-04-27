import { useEffect } from "react";
import FilmsBlock from "../../components/FilmsBlock/FilmsBlock";
import style from "./ListPage.module.scss";
import NavButton from "../../components/NavButton/NavButton";
import ScrollToTop from "react-scroll-to-top";

export default function ListPage() {
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavButton number={5} />
      <FilmsBlock />
      <ScrollToTop smooth />
    </>
  );
}
