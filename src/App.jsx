import IntroPage from "./components/IntroPage";
import Questions from "./components/Questions";
import { categories } from "./Contexts/categoryContext";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const categoriesD = [
    { category: "Sports", apiId: 21 },
    { category: "Comics", apiId: 29 },
    { category: "Film", apiId: 11 },
    { category: "Art", apiId: 25 },
    { category: "General", apiId: 9 },
    { category: "Books", apiId: 10 },
    { category: "Computers", apiId: 18 },
    { category: "History", apiId: 23 },
    { category: "Anime & Manga", apiId: 31 },
    { category: "Cartoon & Animations", apiId: 32 },
    { category: "Geography", apiId: 22 },
  ];

  const location = useLocation();

  useEffect(() => {
    // If user reloads while on /questions, boot them to /
    const fromIntro = sessionStorage.getItem("fromIntro");

    if (location.pathname.startsWith("/questions") && !fromIntro) {
      window.location.replace("/");
    }
    if (location.pathname === "/") {
      sessionStorage.setItem("fromIntro", "true");
    } else {
      sessionStorage.removeItem("fromIntro");
    }
  }, [location]);

  return (
    <categories.Provider value={categoriesD}>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/questions/:diff/:cat/:num" element={<Questions />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </categories.Provider>
  );
}

export default App;
