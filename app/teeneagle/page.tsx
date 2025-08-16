"use client";
import React, { useEffect } from "react";
import Header from "./components/Header";

const TeenEagle = () => {
  useEffect(() => {
    document.body.className = "teeneagle";
  }, []);

  return (
    <>
      <Header />
    </>
  );
};

export default TeenEagle;
