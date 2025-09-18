import React from "react";
import Container from "../components/Container";

const ForgotPassword = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="w-full md:w-2/3 lg:w-1/3 mx-auto">
          <h2 className="text-[26px] text-black font-bold font-josefin pb-2 text-center">
            Reset Password
          </h2>
          <p className="text-[17px] text-[#9096B2] font-medium font-lato pb-6 text-center">
            Enter your email address and we will send you a reset link.
          </p>
          <form className='max-w-[432px] mx-auto'>
            <input
              type="email"
              required
              placeholder="Email Address"
              className="w-full px-4 py-2 border-2 border-[#0000004e] rounded-[5px] outline-0 focus:border-[#5353c5a3] mb-4"
            />
            <button
              type="submit"
              className="w-full text-center py-2 text-white text-[17px] font-bold font-lato bg-[#FB2E86] rounded-[5px] mt-4 hover:bg-[#aa2760] cursor-pointer"
            >
              Send Reset Link
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ForgotPassword;
