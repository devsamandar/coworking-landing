import React from "react";
import Title from "../../components/Title";
import OptionCard from "../../components/OptionCard";
import optionsData from "../../data/options.data";

function Options() {
  return (
    <section className="py-20" id="options">
      <div className="container">
        <Title title="Flexible" page="Coworking Space Options" />
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 mt-16">
          {optionsData.map((item, index) => (
            <OptionCard item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Options;
