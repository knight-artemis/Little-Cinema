import { useLayoutEffect, useState } from "react";
import { filmType } from "../../types";
import axios from "axios";
import style from "./FilmCard.module.scss";

export default function FilmCard() {
  const initialState: filmType = {
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
      <img
        // src={filmInfo.poster.previewUrl}
        src="https://image.openmoviedb.com/kinopoisk-images/6201401/86be967f-598d-46f2-bc59-bc222e2ca837/x1000"
        alt=""
      />
      <div className={style.infoDiv}>
        <div className={style.rating}>
          {/* {filmInfo.rating.kp} */}
          8.4
        </div>
        <div className={style.miniInfoDiv}>
          <span className={style.name}>
            {/* {filmInfo.name} */}
            Большой Лебовски
          </span>
          <span className={style.year}>
            {/* {filmInfo.year} */}
            1994
          </span>
        </div>
      </div>
    </div>
  );
}
