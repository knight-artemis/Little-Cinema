import { useEffect, useState } from "react";
import NavButton from "../NavButton/NavButton";
import { useNavigate } from "react-router-dom";
import style from "./Navigation.module.scss";

export default function Navigation({
  number,
  id,
}: {
  number: number;
  id: number;
}) {
  const [pages, setPages] = useState<number[]>([1, 2, 3, 4, 5]);
  const navigate = useNavigate();

  useEffect(() => {
    if (number !== 5) {
      setPages((prevState) => {
        prevState = [];
        for (let i = 1; i <= number; i++) {
          prevState.push(i);
        }
        return prevState;
      });
    }
  }, []);
  return (
    <div className={style.navigation}>
      <button onClick={() => navigate(`/listPage/${id > 1 ? id - 1 : number}`)}>
        {`<<`}
      </button>
      {pages.map((el) => (
        <NavButton number={el} id={id} />
      ))}
      <button onClick={() => navigate(`/listPage/${id < number ? id + 1 : 1}`)}>
        {`>>`}
      </button>
    </div>
  );
}
