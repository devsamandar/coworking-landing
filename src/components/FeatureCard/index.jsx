import React from "react";

function FeatureCard({ item }) {
  return (
    <>
      <div className="bg-white p-6 rounded">
        <div className="flex gap-5">
          <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center gap-5">
            {item.image}
          </div>
          <div>
            <h5 className="mb-2">{item.title}</h5>
            <p>{item.text}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureCard;
