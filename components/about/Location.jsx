'use client'
import { track } from "@vercel/analytics/react";
import locationBgImage from "./assets/location_bg.png";
import Carousel from "./Carousel"

const bgImageStyle = {
  // use the src property of the image object
  backgroundImage: `url(${locationBgImage.src})`,
  // other styles
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "auto",
  height: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function Location({ translations, locale }) {

  return (
    // Apply inline styling to set the background image
    <div style={bgImageStyle} className="flex flex-col">
      <section className="flex flex-col max-w-[1100px] mb:flex-row justify-around items-center mb:py-28 pt-16 pb-10 mb:pt-16 mb:pb-8 px-8 mb:px-0">
        {/* Our Location */}
        <div className="w-full mb:py-0 mb:px-0 mb:w-2/5">
          <h3 className="text-left text-3xl  mb:text-4xl font-light text-white">
          Our Location
          </h3>
          <p className="mt-8 text-left font-light text-base mb:px-0  text-slate-300">
          At Tx3 Funding Futures, we believe that the right trading environment is essential for success. That&apos;s why we&apos;ve established our trading office in Miami, Florida to provide our traders with a top-tier experience. <br />
            <br />
            Explore our location and find out how we&apos;re providing the tools, education, and support necessary for aspiring traders to succeed in the market.
          </p>
        </div>

        {/* Contact us Cards */}
        <div className="bg-gradient-to-br border border-[#717892] from-white/5 to-[#0B111D] w-full mb:w-fit flex flex-col items-start mb:items-center px-6 mb:mb-16 mt-16 mb-6 py-5 mb:mx-0 mx-8  rounded-xl">
          <p className="mb:mt-8 text-center text-lg mb:px-0 mb:text-left mb:text-xl text-white font-medium">
            Tx3 Funding Futures
          </p>
          <p className="mt-2 text-center text-base mb:px-0 mb:text-left mb:text-xl text-slate-300">
          24/7 Chat Support
          </p>

          <p className="mt-8 text-left text-base mb:px-0 mb:text-left text-slate-300 underline">
            <span>Phone: </span>(+1) 888-396-8550 <br /> Email: support@tx3funding.com
          </p>

          <a onClick={() => track('Get in Touch - About Us')} href={`https://www.tx3funding.com/${locale}/contact`}>
            <button className="mt-10 border border-slate-300 px-3 py-2 rounded-lg text-white font-medium " >
              Get In Touch
            </button>
          </a>

        </div>
      </section>
      <Carousel />
    </div>
  );
};

export default Location;
