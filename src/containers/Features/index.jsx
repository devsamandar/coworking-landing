import React from "react";
import Title from "../../components/Title";
import FeatureCard from "../../components/FeatureCard";
import featuresData from "../../data/features.data";

function Features() {
  return (
    <section
      className="py-20 bg-primary/10 relative"
      data-aos="fade-up"
      id="features"
    >
      <div className="absolute top-0 inset-x-0 hidden sm:block">
        <img
          src="assets/images/shapes/white-wave.svg"
          alt="svg"
          className="w-full -scale-x-100"
        />
      </div>
      <div className="container relative">
        <Title
          title="Features"
          page="Why Choose Us"
          text={`The benefits that will make you comfort`}
        />
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-16">
          {featuresData.map((item, index) => (
            <FeatureCard item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
