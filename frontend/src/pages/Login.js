import useLogin from "../hooks/useLogin";
import { useRef, useState } from "react";
export default function Login() {
  const email = useRef(null);
  const password = useRef(null);
  const { Error, Login, Lauding } = useLogin();
  const handlelogin = async () => {
    const res = await Login(email.current.value, password.current.value);
    if (!Error) {
      console.log(res);
    }
  };
  return (
    <div className=" w-screen h-screen bg-orange-300 ">
      <div className="flex  flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center w-96 h-96   bg-green-lightest bg-white/30 bg-opacity-20 backdrop-blur-sm rounded-lg shadow-lg">
          <div className="flex flex-col items-center justify-center w-3/4 h-3/4">
            <h1 className="text-4xl  font-custom text-brown-dark">Login</h1>
            <form
              className="flex flex-col items-center justify-center w-full h-full"
              onSubmit={(e) => {
                e.preventDefault()
                handlelogin();
              }}
            >
              <input
                className="w-full h-12  bg-pink-light bg-opacity-70 shadow-md px-4 py-2 my-4 text-lg border rounded-lg focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Email"
                ref={email}
              />
              <input
                className="w-full h-12 px-4 bg-pink-light bg-opacity-70 shadow-md py-2 my-4 text-lg border rounded-lg focus:outline-none focus:border-blue-500"
                type="password"
                placeholder="Password"
                ref={password}
              />
              {!Lauding&&
                <button
                  className="btn  w-full text-lg font-bold text-white bg-green-mid shadow-md rounded-lg focus:outline-none  hover:scale-105 transition-all"
                  type="submit"
                >
                  Login
                </button>
              }
              {Lauding &&
                <button className="btn w-full flex justify-center items-center text-lg font-bold text-white shadow-md rounded-lg focus:outline-none hover:scale-105 transition-all outline-1 outline-green-mid bg-green-lightest">
                  {" "}
                  <span className="loading loading-spinner">Loading</span>
                </button>
              }
            </form>
          </div>
        </div>
      </div>
      {Error && (
        <div className=" transition-all absolute top-40  sm:top-20 sm:w-1/2 sm:absolute bg-red-300/40 border-2 rounded-md w-3/4 h-10 flex justify-center items-center text-lg font-Parr text-red-400 border-red-500 ">
          {Error.error}
        </div>
      )}
    </div>
  );
}
