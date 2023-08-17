import React from "react";

function Footer() {
  return (
    <section className="py-20 bg-primary/10">
      <div className="container">
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-4 sm:col-span-4 lg:col-span-1">
            <a href="index.html">
              <img src="assets/images/logo-dark.png" className="w-32" />
            </a>
            <div className="mt-5">
              <p className="text-base">
                At vero eos et accusamus et iusto dignissimos ducimus odio.
              </p>
              <p className="text-sm lg:mt-16 mt-7">
                Prompt . All rights reserved.
              </p>
            </div>
          </div>
          <div className="col-span-4 md:col-span-1 lg:col-span-1 md:mx-auto">
            <h5 className="text-sm font-semibold uppercase mb-3">nevigation</h5>
            <ul>
              <li className="py-1.5">
                <a
                  href="javascript:void(0);"
                  className="text-sm hover:text-slate-700 "
                >
                  Home
                </a>
              </li>
              <li className="py-1.5">
                <a
                  href="javascript:void(0);"
                  className="text-sm hover:text-slate-700 "
                >
                  Locations
                </a>
              </li>
              <li className="py-1.5">
                <a
                  href="javascript:void(0);"
                  className="text-sm hover:text-slate-700 "
                >
                  Plans
                </a>
              </li>
              <li className="py-1.5">
                <a
                  href="javascript:void(0);"
                  className="text-sm hover:text-slate-700 "
                >
                  Events
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-4 md:col-span-1 lg:col-span-1">
            <h5 className="text-sm font-semibold uppercase mb-3">Contact</h5>
            <ul>
              <li className="py-1.5">
                <a
                  href="javascript:void(0);"
                  className="text-sm hover:text-slate-700 "
                >
                  Support
                </a>
              </li>
              <li className="py-1.5">
                <a
                  href="javascript:void(0);"
                  className="text-sm hover:text-slate-700 "
                >
                  Developers
                </a>
              </li>
              <li className="py-1.5">
                <a
                  href="javascript:void(0);"
                  className="text-sm hover:text-slate-700 "
                >
                  Customer Service
                </a>
              </li>
              <li className="py-1.5">
                <a
                  href="javascript:void(0);"
                  className="text-sm hover:text-slate-700 "
                >
                  Get Started Guide
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-4 md:col-span-2 lg:col-span-1">
            <h5 className="text-sm font-semibold uppercase">
              Subscribe To Newsletters
            </h5>
            <ul className="mt-4">
              <li className="py-1.5">
                <div className="lg:flex items-center gap-5 border rounded-md bg-white">
                  <div className="flex items-center w-full justify-between">
                    <div className="flex items-center">
                      <input
                        type="text"
                        id="email-input"
                        name="email-input"
                        placeholder="Your email"
                        className="border-0 w-full text-sm focus:ring-0 bg-white ps-3"
                      />
                    </div>
                    <a
                      href="#"
                      className="text-white rounded-r-md text-sm py-[10px] px-4 duration-300 uppercase bg-primary hover:bg-primary/90"
                    >
                      <i className="fa-regular fa-envelope text-xl" />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
