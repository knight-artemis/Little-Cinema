import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import FilmPage from "./pages/FilmPage/FilmPage";
import ListPage from "./pages/ListPage/ListPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/movie/:id" element={<FilmPage />} />
        <Route path="/listPage/:id" element={<ListPage />} />
        <Route path="/" element={<ListPage />} />
      </Routes>
    </>
  );
}

export default App;
