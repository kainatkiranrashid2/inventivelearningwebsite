import React from "react";
import Header from "./components/Header";
import AboutWaicy from "./components/AboutWaicy";
import ParticipationDetails from "./components/ParticipationDetails";
import EventHistory from "./components/EventHistory";

const page = () => {
  return (
    <>
      <Header />
      <AboutWaicy />
      <ParticipationDetails />
      <EventHistory />
    </>
  );
};

export default page;
