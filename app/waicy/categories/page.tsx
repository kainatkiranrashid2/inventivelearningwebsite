import React from "react";
import Header from "./components/Header";
import CompetitionTracks from "./components/CompetitionTracks";
import JudgingRubric from "./components/JudgingRubric";
import Awards from "./components/Awards";

const CategoriesPage = () => {
  return (
    <>
      <Header />
      <CompetitionTracks />
      <JudgingRubric />
      <Awards />
    </>
  );
};

export default CategoriesPage;