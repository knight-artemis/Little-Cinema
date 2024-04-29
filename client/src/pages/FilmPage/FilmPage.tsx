import { useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { filmType } from "../../types";
import axios from "axios";
import style from "./FilmPage.module.scss";

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
    <div className={style.mainDiv}>
      <div className={style.headerDiv}>
        <button className={style.backButton} onClick={() => navigate(-1)}>
          Назад
        </button>
        <h1>
          {filmInfo.title}
          {/* Большой Лебовски */}
        </h1>
      </div>
      <div className={style.posterDiv}>
        <img
          className={style.pageImg}
          src={filmInfo.banner}
          // src="https://image.openmoviedb.com/kinopoisk-images/6201401/86be967f-598d-46f2-bc59-bc222e2ca837/orig"
          alt=""
        />
      </div>
      <div className={style.infoDiv}>
        <div className={style.description}>
          {filmInfo.description}
          {/* Лос-Анджелес, 1991 год, война в Персидском заливе. Главный герой по
          прозвищу Чувак считает себя совершенно счастливым человеком. Его жизнь
          составляют игра в боулинг и выпивка. Но внезапно его счастье
          нарушается, гангстеры по ошибке принимают его за
          миллионера-однофамильца, требуют деньги, о которых он ничего не
          подозревает, и, ко всему прочему, похищают жену миллионера, будучи
          уверенными, что «муж» выплатит за нее любую сумму. */}
        </div>
        <div className={style.text}>
          Duration: {filmInfo.movie_length} min.
          {/* Длительность: 110 мин. */}
        </div>
        <div className={style.text}>
          Release date: {date}
          {/* Дата выхода: 12.05.2000 */}
        </div>
        <div className={style.text}>
          Genre: {filmInfo.gen.map((genre) => genre.genre).join(", ")}
          {`.`}
          {/* Жанр: комедия, криминал. */}
        </div>
      </div>
    </div>
  );
}
