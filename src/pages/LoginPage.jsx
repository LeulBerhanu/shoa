import React from "react";
import shoa from "../img/shoaLogo.svg";

function LoginPage() {
  return (
    <div className="flex items-center w-full min-h-screen ">
      <div className="container mx-auto flex flex-col items-center justify-center border py-20 shadow-boxShadow">
        <img src={shoa} alt="" className="w-[95px] " />

        <form action="">
          <h2 className="text-5xl font-bold">Login</h2>

          <div className="flex flex-col gap-y-9 w-[544px]">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-2xl mb-6">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="h-[70px] p-5 placeholder-black text-xl border-2 border-black/20 bg-[#D9D9D940]/25 outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-2xl mb-6">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="h-[70px] p-5 placeholder-black text-xl border-2 border-black/20 bg-[#D9D9D940]/25 outline-none"
              />
            </div>

            <div className="flex items-center align-middle gap-x-3">
              <input type="checkbox" id="rememberMe" className=" h-6 w-6" />
              <label htmlFor="rememberMe" className="text-2xl ">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="primaryBtn !rounded-none font-bold !text-2xl"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
