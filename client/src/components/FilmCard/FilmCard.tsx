import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { filmType } from "../../types";
import axios from "axios";
import style from "./FilmCard.module.scss";

export default function FilmCard({ id }: { id: string }) {
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

  useLayoutEffect(() => {
    const getFilmInfo = async (): Promise<void> => {
      try {
        axios
          .get(`${import.meta.env.VITE_API}/movie/${id}`, {
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
  }, [id]);

  const navigate = useNavigate();

  return (
    <div className={style.mainDiv} onClick={() => navigate(`/movie/${id}}`)}>
      <img className={style.cardImg} src={filmInfo.banner} alt="" />
      <div className={style.infoDiv}>
        <div className={style.rating}>{filmInfo.rating}</div>
        <div className={style.miniInfoDiv}>
          <span className={style.name}>{filmInfo.title}</span>
          <span className={style.year}>{filmInfo.year}</span>
        </div>
      </div>
    </div>
  );
}
