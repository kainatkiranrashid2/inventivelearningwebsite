import Header from "./hpcomponents/Header";
import AboutUs from "./hpcomponents/AboutUs";
import ProgramsSection from "./hpcomponents/ProgramsSection";
import WhyInventiveLearning from "./hpcomponents/WhyInventiveLearning";
import ImpactStats from "./hpcomponents/ImpactStats";

export default function Home() {
  return (
    <>
      <Header />
      <AboutUs />
      <ProgramsSection />
      <WhyInventiveLearning />
      <ImpactStats />
    </>
  );
}
