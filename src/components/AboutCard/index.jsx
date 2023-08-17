import React from "react";

function AboutCard({ item }) {
  return (
    <div className="text-center">
      <h4 className="text-5xl mb-3 ">{item.number}</h4>
      <p className="text-slate-600">{item.text}</p>
    </div>
  );
}

export default AboutCard;
