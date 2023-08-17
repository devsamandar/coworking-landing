import React from "react";

function TestimonialCard({ item }) {
  return (
    <div className="swiper-slide">
      <div className="md:p-12 p-6 border rounded">
        <h5 className="font-light">{item.text}</h5>
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-3">
            <div>
              <img src={item.image} className="w-10 rounded-full" />
            </div>
            <div>
              <h6 className="text-sm">{item.person}</h6>
              <p className="text-sm text-slate-500">{item.job}</p>
            </div>
          </div>
          <div>
            <img src={item.icon} className="w-24" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
