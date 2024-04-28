import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { filmType } from "../../types";
import axios from "axios";
import style from "./FilmCard.module.scss";

export default function FilmCard({ id }: { id: number }) {
  const initialState: filmType = {
    id: 0,
    name: "",
    rating: {
      kp: 0,
      imdb: 0,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: null,
    },
    description: "",
    premiere: { world: "" },
    year: 0,
    poster: { url: "", previewUrl: "" },
    genres: [{ name: "" }],
    movieLength: 0,
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
        console.log("Тут происходит запрос для FilmCard");
      } catch (error) {
        console.log(error);
      }
    };
    getFilmInfo();
  }, [id]);

  const navigate = useNavigate();

  return (
    <div className={style.mainDiv} onClick={() => navigate(`/movie/555}`)}>
      <img
        className={style.cardImg}
        src={filmInfo.poster.url}
        // src="https://image.openmoviedb.com/kinopoisk-images/6201401/86be967f-598d-46f2-bc59-bc222e2ca837/x1000"
        alt=""
      />
      <div className={style.infoDiv}>
        <div className={style.rating}>
          {filmInfo.rating.kp.toFixed(1)}
          {/* 8.4 */}
        </div>
        <div className={style.miniInfoDiv}>
          <span className={style.name}>
            {filmInfo.name}
            {/* Большой Лебовски */}
          </span>
          <span className={style.year}>
            {filmInfo.year}
            {/* 1994 */}
          </span>
        </div>
      </div>
    </div>
  );
}
