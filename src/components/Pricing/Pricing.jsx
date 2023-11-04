import TitleRed from "../../images/who-we-are/title-bg.svg";
import BgText from "../../images/pricing/bg-text.png";
import BgDumbell from "../../images/pricing/bg-dumbell.png";
import PricingBox from "./PricingBox";

import Img1 from "../../images/pricing/img1.jpg";
import Img2 from "../../images/pricing/img2.jpg";
import Img3 from "../../images/pricing/img3.jpg";

function Pricing() {
  return (
    <>
      <section id="pricing" className="pricing-section relative">
        <div className="container page-padding py-[12rem] ">
          <img src={BgText} className="left-0 absolute" alt="bg_img" />
          {/* title div -- */}
          <div className="flex flex-col text-center relative items-center">
            <p className="text-black relative z-10 text-[15px] uppercase font-bold mb-8">
              PRICING CHART
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[23rem] absolute -top-[10px] "
            />

            <h2 className="text-[3.4rem] font-bold mb-4">
              Exclusive Pricing Plan
            </h2>
            <p className="text-[#646464] font-medium text-[15px] ">
              Natty gym gives you the best pricing
              <br /> you can ever get that is very flexible.
            </p>
          </div>
          {/* pricing boxes */}
          <div className="flex gap-10 mt-32 relative z-[2] md1000:flex-col md1000:items-center ">
            <PricingBox img={Img1} title="Daily" price="400" />
            <PricingBox img={Img2} title="Two weeks" price="2,500" />
            <PricingBox img={Img3} title= "One Month" price="4,000" />
          </div>
          <div className="flex gap-10 mt-32 relative z-[2] md1000:flex-col md1000:items-center ">
            <PricingBox img={Img3} title= "3 Months" price="11,500" />
            <PricingBox img={Img3} title= "6 Months" price="22,500" />
            <PricingBox img={Img3} title= "1 Year" price="42,000" />
          </div>
          <img
            src={BgDumbell}
            alt="bg_icon"
            className="right-0 bottom-0 absolute z-[1]"
          />
        </div>
      </section>
    </>
  );
}

export default Pricing;
