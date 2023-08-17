import React from "react";
import TestimonialCard from "../../components/TestimonialCard";
import testimonialsData from "../../data/testimonials.data";

function Testimonials() {
  return (
    <section className="py-20" data-aos="fade-up" id="testimonials">
      <div className="container">
        <div className="relative z-20">
          <div className="flex items-center justify-between pb-14">
            <div>
              <h2 className="md:text-3xl text-xl my-5">
                See what our members are saying
              </h2>
            </div>
            <div className="flex items-center gap-5">
              <div className="button-prev">
                <i className="fa-solid fa-arrow-left text-primary" />
              </div>
              <div className="button-next ">
                <i className="fa-solid fa-arrow-right text-primary" />
              </div>
            </div>
          </div>
          <div>
            <div id="swiper_two" className="swiper">
              <div className="swiper-wrapper">
                {testimonialsData.map((item, index) => (
                  <TestimonialCard item={item} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
