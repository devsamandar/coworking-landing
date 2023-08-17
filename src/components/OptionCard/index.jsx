import React from "react";

function OptionCard({ item }) {
  return (
    <>
      <div
        className="shadow-lg rounded"
        data-aos="fade-up"
        data-aos-duration={item.duration}
      >
        <img src={item.image} className="rounded-t" />
        <div className="p-5">
          <h4 className="text-lg font-medium text-primary mb-2">
            {item.title}
          </h4>
          <p className="text-sm text-slate-500">{item.text}</p>
        </div>
        <div className="p-5 pt-0">
          <p className="flex items-center gap-3">
            {item.person}
            <a href="#" className="text-sm font-medium text-slate-500">
              {item.capacity}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default OptionCard;
