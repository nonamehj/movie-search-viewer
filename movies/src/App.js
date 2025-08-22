import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import {
  HomePage,
  KidsPage,
  PopularPage,
  ComedyPage,
  TheatrePage,
  SearchPage,
  ErrorPage,
  SingleMovie,
} from "./pages/";
import {
  SharedLayoutSearch,
  SharedLayoutPage,
  SharedLayout,
} from "./sharedLayout";

function App() {
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    const setMainContainerHeight = () => {
      const mainElement = document.querySelector("main");
      if (mainElement) {
        mainElement.style.height = `calc(var(--vh) * 100)`;
      }
    };

    const handleResize = () => {
      setViewportHeight();
      setMainContainerHeight();
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="popular" element={<SharedLayoutPage />}>
            <Route index element={<PopularPage />} />
            <Route path=":id" element={<SingleMovie />} />
          </Route>
          <Route path="theatre" element={<SharedLayoutPage />}>
            <Route index element={<TheatrePage />} />
            <Route path=":id" element={<SingleMovie />} />
          </Route>
          <Route path="kids" element={<SharedLayoutPage />}>
            <Route index element={<KidsPage />} />
            <Route path=":id" element={<SingleMovie />} />
          </Route>
          <Route path="comedy" element={<SharedLayoutPage />}>
            <Route index element={<ComedyPage />} />
            <Route path=":id" element={<SingleMovie />} />
          </Route>
          <Route path="search" element={<SharedLayoutSearch />}>
            <Route index element={<SearchPage />} />
            <Route path=":id" element={<SingleMovie />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
