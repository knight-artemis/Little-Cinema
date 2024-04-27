import { useNavigate } from "react-router-dom";
import style from "./NavButton.module.scss";
import clsx from "clsx";

export default function NavButton({
  number,
  id,
}: {
  number: number;
  id: number;
}) {
  const navigate = useNavigate();
  return (
    <button
      className={clsx(
        number === id ? style.selectedButton : style.commonButton
      )}
      onClick={() => navigate(`/listPage/${number}`)}
    >
      {number}
    </button>
  );
}
