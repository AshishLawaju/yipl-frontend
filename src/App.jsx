import CampaignsCard from "./components/CampaignsCard";
import Hero from "./components/Hero";
import "./scss/index.scss";
import c1 from "./components/assets/C1.png";
import c2 from "./components/assets/C2.png";
import c3 from "./components/assets/C3.png";
import WhoR from "./components/Whoarewe";
import Company from "./components/Company";
import News from "./components/News";
import Resources from "./components/Resources";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";
const App = () => {
  const campData = [
    {
      title: "Open Data Directive",
      description:
        "In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds In view of Russia’s military action against the Ukrainian people, ",
      photo: c1,
    },
    {
      title: "Beneficial Ownership",
      description:
        "In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds In view of Russia’s military action against the Ukrainian people, ",
      photo: c2,
    },
    {
      title: "EU Recovery Transparency",
      description:
        "In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds In view of Russia’s military action against the Ukrainian people, ",
      photo: c3,
    },
  ];
  return (
    <main className="">
      <Hero />

      {/* campaingns */}
      <section className="campaingns">
        <div className="container">
          <h2 className="title">Campaigns</h2>
          <h3 className="subtitle">
            {" "}
            We aim to stop public funds siphoning off and we have a plan that
            will help. We <br /> are working at the national and EU levels to
            advance.{" "}
          </h3>
          <div className="camp-block">
            {campData.map((camp) => (
              <CampaignsCard
                key={camp.title}
                title={camp.title}
                description={camp.description}
                photo={camp.photo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 
      who are we */}

      <WhoR />
      <Company />
      <News />
      <Resources />
      <Contactus />
      <Footer/>
    </main>
  );
};

export default App;
