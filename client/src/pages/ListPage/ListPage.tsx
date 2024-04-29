import FilmsBlock from "../../components/FilmsBlock/FilmsBlock";
// import style from "./ListPage.module.scss";
import Navigation from "../../components/Navigation/Navigation";
import ScrollToTop from "react-scroll-to-top";
import { useParams } from "react-router-dom";
import style from './ListPage.module.scss'

export default function ListPage() {
  const { id } = useParams();
  const updId = parseInt(id ?? "1");

  return (
    <>
      <div className={style.navDiv} >
      <Navigation number={5} id={updId} />
      </div>
      <FilmsBlock id={updId} />
      <ScrollToTop smooth />
    </>
  );
}
