import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";

const Contact = () => {
  return (
    <div id="contactUs" className="w-full bg-[#D9D9D94F] flex lg:flex-row flex-col justify-center lg:justify-between items-center pt-5 pb-10">
      <MaxWidthWrapper className=" flex lg:flex-row flex-col w-full lg:justify-between pt-10">
        <div className="flex flex-col gap-y-4 lg:w-[35%] w-[90%] max-lg:text-center mx-auto">
          <span className="lg:text-6xl text-2xl text-black font-medium"> Contact Us</span>
          <p className="font-normal lg:text-2xl text-sm text-[#000000AD]">
            At CareHub, we’re always ready to hear from you. Contact us; we are
            available 24/7. If you have any questions about aged care or want to
            know more about our services, Please contact us any time.
          </p>
        </div>
        <div className="lg:w-[45%] w-[90%] max-lg:mx-auto max-lg:mt-5">
          <form className="bg-white border rounded-[9px] w-full border-[#DCDCDC] px-7 py-5 flex flex-col">
            <label className="font-normal lg:text-2xl text-sm">
              Full Name
              <span className="text-red-700 font-normal lg:text-2xl text-sm">*</span>
            </label>
            <input
              type="text"
              className="flex-1 lg:py-3 py-1 px-4 border-[0.7px] border-[#DBDBDB] bg-transparent placeholder:text-[#DBDBDB] rounded-md mt-2 placeholder:lg:text-2xl placeholder:text-sm placeholder:font-normal outline-none"
              placeholder="Enter your name"
            />
            <label className="font-normal lg:text-2xl text-sm mt-5">
              Subject
              <span className="text-red-700 font-normal lg:text-2xl text-sm">*</span>
            </label>
            <input
              type="text"
              className="flex-1 lg:py-3 py-1 px-4 border-[0.7px] border-[#DBDBDB] bg-transparent placeholder:text-[#DBDBDB] rounded-md mt-2 placeholder:lg:text-2xl placeholder:text-sm placeholder:font-normal outline-none"
              placeholder="Enter your subject"
            />
            <label className="font-normal lg:text-2xl text-sm mt-5">
              Message
              <span className="text-red-700 font-normal lg:text-2xl text-sm ">*</span>
            </label>
            <textarea
              type="text"
              className="flex-1 lg:pt-3 lg:pb-8 pt-2 pb-6 px-4 border-[0.7px] border-[#DBDBDB] bg-transparent placeholder:text-[#DBDBDB] rounded-md mt-2 placeholder:lg:text-2xl placeholder:text-sm placeholder:font-normal resize-none outline-none"
              placeholder="Enter your message"
            />
            <button
              type="submit"
              className="w-full text-white font-medium lg:text-2xl text-sm  lg:py-3 py-1 px-4 border border-[#005EE2] bg-[#005EE2] rounded-lg my-5"
            >
                Submit
            </button>
          </form>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Contact;
