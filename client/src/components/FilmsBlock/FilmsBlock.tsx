import { useLayoutEffect, useState } from "react";
import FilmCard from "../FilmCard/FilmCard";
import style from "./FilmsBlock.module.scss";

export default function FilmsBlock({ id }: { id: number }) {
  const [filmList, setFilmsList] = useState<string[]>([]);

  useLayoutEffect(() => {
    switch (id) {
      case 1:
        setFilmsList([
          "tt0068646",
          "tt0133093",
          "tt0167260",
          "tt0111161",
          "tt0108052",
          "tt0083658",
          "tt0118799",
          "tt0080684",
          "tt0096874",
          "tt0079470",
          "tt4669788",
          "tt0110912",
        ]);
        break;
      case 2:
        setFilmsList([
          "tt0078788",
          "tt0468569",
          "tt0075148",
          "tt0093058",
          "tt0071562",
          "tt0110413",
          "tt0317248",
          "tt0103064",
          "tt1856101",
          "tt0073486",
          "tt0054215",
          "tt0083987",
        ]);
        break;
      case 3:
        setFilmsList([
          "tt0435761",
          "tt7286456",
          "tt6857112",
          "tt4154796",
          "tt1386697",
          "tt0361748",
          "tt1130884",
          "tt0167261",
          "tt0070948",
          "tt2024544",
          "tt1375666",
          "tt5074352",
        ]);
        break;
      case 4:
        setFilmsList([
          "tt0206634",
          "tt0409459",
          "tt0405094",
          "tt9071322",
          "tt0129167",
          "tt1172049",
          "tt0780504",
          "tt1074638",
          "tt1980209",
          "tt0347149",
          "tt1390411",
          "tt3315342",
        ]);
        break;
      case 5:
        setFilmsList([
          "tt5109784",
          "tt0482571",
          "tt2543164",
          "tt3799694",
          "tt0172495",
          "tt0380510",
          "tt10288566",
          "tt0332452",
          "tt5580390",
          "tt0477348",
          "tt0469494",
          "tt0458352",
        ]);
        break;
      default:
        setFilmsList([
          'tt0056172',
          'tt0097576',
          'tt0082971',
          'tt0109830',
          'tt0086190',
          'tt0113247',
          'tt0073195',
          'tt0167260',
          'tt0092005',
          'tt0083866',
          'tt0072684',
          'tt0057565',
        ]);
    }
  }, [id]);

  return (
    <div className={style.filmsBlock}>
      {filmList.map((el) => (
        <FilmCard id={el} />
      ))}
    </div>
  );
}
