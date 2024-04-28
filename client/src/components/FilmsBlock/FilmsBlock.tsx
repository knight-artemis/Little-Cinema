import { useLayoutEffect, useState } from "react";
import FilmCard from "../FilmCard/FilmCard";
import style from "./FilmsBlock.module.scss";

export default function FilmsBlock({ id }: { id: number }) {
  const [filmList, setFilmsList] = useState<number[]>([]);

  useLayoutEffect(() => {
    switch (id) {
      case 1:
        setFilmsList([
          809449, 490167, 464484, 472612, 2717, 9691, 329, 651746, 300772, 435,
          399949, 258687,
        ]);
        break;
      case 2:
        setFilmsList([
          419796, 911064, 678285, 333022, 772340, 685351, 836197, 356086,
          586930, 479603, 950288, 922576,
        ]);
        break;
      case 3:
        setFilmsList([
          412345, 375689, 938102, 567291, 609873, 357124, 429809, 723015,
          976432, 892561, 300098, 745960,
        ]);
        break;
      case 4:
        setFilmsList([
          903451, 642108, 436725, 392470, 732916, 543752, 369814, 845609,
          990734, 457201, 300923, 666598,
        ]);
        break;
      case 5:
        setFilmsList([
          321456, 432987, 908654, 759023, 385172, 637209, 578136, 810945,
          949260, 406731, 300589, 873412,
        ]);
        break;
      default:
        setFilmsList([
          333, 444, 555, 666, 777, 888, 999, 1000, 1500, 2000, 3000, 5000,
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
