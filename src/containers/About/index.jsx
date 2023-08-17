import React from "react";
import Title from "../../components/Title";
import AboutCard from "../../components/AboutCard";
import aboutData from "../../data/about.data";

function About() {
  return (
    <section className="py-20" id="about">
      <div className="container">
        <Title
          title="About"
          page="More Productivity, Less Expenses"
          text={`From an established enterprise or a startup, we offer space that fits all.`}
        />
        <div
          className="grid md:grid-cols-4 grid-cols-2 mt-14 gap-5"
          data-aos="fade-up"
        >
          {aboutData.map((item, index) => (
            <AboutCard item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
