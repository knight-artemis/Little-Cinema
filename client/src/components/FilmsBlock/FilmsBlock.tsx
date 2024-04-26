import FilmCard from "../FilmCard/FilmCard";
import style from './FilmsBlock.module.scss'

export default function FilmsBlock() {
  return (
    <div className={style.filmsBlock}>
      <FilmCard />
      <FilmCard />
      <FilmCard />
      <FilmCard />
      <FilmCard />
      <FilmCard />
      <FilmCard />
      <FilmCard />
      <FilmCard />
      <FilmCard />
      <FilmCard />
      <FilmCard />
    </div>
  );
}
