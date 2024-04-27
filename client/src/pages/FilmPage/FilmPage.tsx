import { useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { filmType } from "../../types";
import axios from "axios";
import style from "./FilmPage.module.scss";

export default function FilmPage() {
  const { id } = useParams();
  const navigate = useNavigate();

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
      const id = 555;
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
  }, []);

  return (
    <div className={style.mainDiv}>
      <button className={style.backButton} onClick={() => navigate(-1)}>
        Назад
      </button>
      <h1>
        {/* {filmInfo.name} */}
        Большой Лебовски
      </h1>
      <div className={style.bigDiv}>
        <div className={style.infoDiv}>
          <div className={style.description}>
            {/* {filmInfo.description} */}
            Лос-Анджелес, 1991 год, война в Персидском заливе. Главный герой по
            прозвищу Чувак считает себя совершенно счастливым человеком. Его
            жизнь составляют игра в боулинг и выпивка. Но внезапно его счастье
            нарушается, гангстеры по ошибке принимают его за
            миллионера-однофамильца, требуют деньги, о которых он ничего не
            подозревает, и, ко всему прочему, похищают жену миллионера, будучи
            уверенными, что «муж» выплатит за нее любую сумму.
          </div>
          <div className={style.text}>
            {/* Длительность: {filmInfo.movieLength} мин. */}
            Длительность: 110 мин.
          </div>
          <div className={style.text}>
            {/* Дата выхода: {filmInfo.premiere.world} */}
            Дата выхода: 12.05.2000
          </div>
          <div className={style.text}>Жанр:{ }</div>
        </div>
        <div className={style.posterDiv}>
          <img
            // src={filmInfo.poster.url}
            src="https://image.openmoviedb.com/kinopoisk-images/6201401/86be967f-598d-46f2-bc59-bc222e2ca837/orig"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
