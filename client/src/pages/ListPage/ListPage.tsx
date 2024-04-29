import FilmsBlock from "../../components/FilmsBlock/FilmsBlock";
// import style from "./ListPage.module.scss";
import Navigation from "../../components/Navigation/Navigation";
import ScrollToTop from "react-scroll-to-top";
import { useParams } from "react-router-dom";

export default function ListPage() {
  const { id } = useParams();
  const updId = parseInt(id ?? "1");

  return (
    <>
      <Navigation number={5} id={updId} />
      <FilmsBlock id={updId} />
      <ScrollToTop smooth />
    </>
  );
}
