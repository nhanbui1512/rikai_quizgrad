import React from "react";
import Header from "../../components/Header";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Header />
      {/* body  */}
      <Container>
        <div className="row">
          <div className="col p-4">
            <div>
              <img src="/logo.png" className="w-[60%]" alt="" />
              <p className="mb-1">Welcome back</p>
              <p className="m-0">Please Login/Signup to your account</p>
            </div>
            {/* form  */}
            <div className="flex flex-col">
              <div className="flex flex-col items-start">
                <div>
                  <span className="text-[red]">*</span>
                  <span>Email</span>
                </div>
                <input
                  type="email"
                  className="border-[1px] border-[#ccc] border-solid w-full rounded-sm py-1"
                />
              </div>

              <div className="flex flex-col items-start mt-3">
                <div>
                  <span className="text-[red]">*</span>
                  <span>Password</span>
                </div>
                <input
                  type="password"
                  className="border-[1px] border-[#ccc] border-solid w-full rounded-sm py-1"
                />
              </div>

              <div className="py-4 flex gap-3">
                <input type="checkbox" />
                <span>Remember me</span>
                <span className="text-[#fac81e] font-semibold">
                  Forgot Password ?
                </span>
              </div>

              <button className="w-full bg-[#fac81e] text-white px-3 py-2 text-left">
                Login
              </button>

              <span className="text-[#fac81e] font-semibold text-left mt-4">
                Register now
              </span>
            </div>
          </div>
          <div className="col">
            <div className="ml-5">
              <img alt="" src="/banner_login.png" className="w-[60%]" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
