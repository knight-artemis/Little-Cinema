import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NavButton({ number }: { number: number }) {
  const navigate = useNavigate();
  const [pages, setPages] = useState<number[]>([1,2,3,4,5]);

  // const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    if (number !== 5) {
      setPages((prevState) => {
        for (let i = 1; i <= number; i++) {
          prevState.push(i);
        }
        return prevState;
      });
    }
  }, []);
  return (
    <div>
      {pages.map((el) => (
        <button onClick={() => navigate(`/listPage/${el}`)}>{el}</button>
      ))}
    </div>
  );
}
