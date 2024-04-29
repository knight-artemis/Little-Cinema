import { useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { filmType } from "../../types";
import axios from "axios";
import style from "./FilmPage.module.scss";
import Modal from "../../components/Modal/Modal";
import VideoCard from "../../components/VideoCard/VideoCard";

export default function FilmPage() {
  const { id } = useParams();
  const updId = id?.slice(0, -1);
  const navigate = useNavigate();

  const initialState: filmType = {
    imdb_id: "",
    title: "",
    year: 0,
    popularity: 0,
    description: "",
    content_rating: "",
    movie_length: 0,
    rating: 0,
    created_at: "",
    trailer: "",
    image_url: "",
    release: "",
    plot: "",
    banner: "",
    type: "",
    more_like_this: {},
    gen: [],
    keywords: [],
  };

  const [filmInfo, setFilmInfo] = useState<filmType>(initialState);
  const [modalActive, setModalActive] = useState<boolean>(true);
  const [date, setDate] = useState<string>("");

  useLayoutEffect(() => {
    const getFilmInfo = async (): Promise<void> => {
      try {
        axios
          .get(`${import.meta.env.VITE_API}/movie/${updId}`, {
            withCredentials: true,
          })
          .then((res) => setFilmInfo(res.data))
          .catch((err) =>
            console.log("Ошибка получения информации о фильме", err)
          );
      } catch (error) {
        console.log(error);
      }
    };
    getFilmInfo();
  }, []);

  useLayoutEffect(() => {
    const premDate = filmInfo.release.split("-");
    const finaldate = `${premDate[2]}.${premDate[1]}.${premDate[0]}`;
    setDate(finaldate);
  }, [filmInfo]);

  return (
    <>
      <div className={style.mainDiv}>
        <div className={style.headerDiv}>
          <button className={style.backButton} onClick={() => navigate(-1)}>
            Back
          </button>
          <h1>{filmInfo.title}</h1>
        </div>
        <div className={style.posterDiv}>
          <img className={style.pageImg} src={filmInfo.banner} alt="" />
        </div>
        <div className={style.infoDiv}>
          <div className={style.description}>{filmInfo.description}</div>
          <div className={style.modalButtonDiv}>
            <button
              className={style.watchButton}
              onClick={() => setModalActive((prev) => !prev)}
            >
              Watch trailer
            </button>
          </div>
          <div className={style.miniInfoDiv}>
            <div className={style.text}>
              Duration: {filmInfo.movie_length} min.
            </div>
            <div className={style.text}>Release date: {date}</div>
            <div className={style.text}>Popularity: {filmInfo.popularity}</div>
            <div className={style.text}>
              Age rating: {filmInfo.content_rating}
            </div>
            <div className={style.text}>
              Genre: {filmInfo.gen.map((genre) => genre.genre).join(", ")}
              {`.`}
            </div>
            <div className={style.text}>
              Keywords:{" "}
              {filmInfo.keywords.map((word) => word.keyword).join(", ")}
              {`.`}
            </div>
          </div>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <VideoCard link={filmInfo.trailer} />
      </Modal>
    </>
  );
}
