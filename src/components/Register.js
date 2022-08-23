import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const ValidEmail = (email) => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "fname":
        let rawfname = e.target.value;
        setFname(rawfname.replace(/[^a-zA-Z ]/g, "")); //  remove symbols specail charcarcter and all spaces
        break;
      case "lname":
        let rawlname = e.target.value;
        setLname(rawlname.replace(/[^a-zA-Z ]/g, "")); //  remove symbols specail charcarcter and all spaces
        break;
      case "age":
        setAge(parseInt(e.target.value));
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "cpassword":
        setCpassword(e.target.value);
        break;

      default:
        break;
    }
  };

  const registerAccount = async (e) => {
    e.preventDefault();
    setFname(fname.trim().replace(/[^a-zA-Z ]/g, ""));
    // setLname(lname.trim().replace(/[^a-zA-Z ]/g, ""));

    if (!fname) {
      toast.error("First name required!");
      return;
    }

    if (fname.length < 3) {
      toast.error("First name should atleast 3 letters!");
      return;
    }

    if (!lname) {
      toast.error("Last name required!");
      return;
    }

    if (lname.length < 3) {
      toast.error("Last name should atleast 3 letters!");
      return;
    }

    if (!age && age === 0) {
      toast.error("Please enter your age ensure it's not zero (0)");
      return;
    }

    // email
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    if (!ValidEmail(email)) {
      toast.error("Please enter valid email address");
      return;
    }
    if (!password) {
      toast.error("Please enter your password");
      return;
    }
    if (!cpassword) {
      toast.error("Enter your password again");
      return;
    }
    if (password !== cpassword) {
      toast.error("Password doesn't match");
      return;
    }

    // console.log("check success");

    toast.success("Check success your account has been created!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // setFname("");
    // setLname("");
    // setAge("");
    // setEmail("");
    // setPassword("");
    // setCpassword("");
  };

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Register your Account</h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form className="register-form">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="fname" className="leading-7 text-sm text-gray-600">
                      First name
                    </label>
                    <input value={fname} onChange={handleChange} type="text" id="fname" name="fname" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="lname" className="leading-7 text-sm text-gray-600">
                      Last name
                    </label>
                    <input value={lname} onChange={handleChange} type="text" id="lname" name="lname" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="age" className="leading-7 text-sm text-gray-600">
                      Age
                    </label>
                    <input value={age} onChange={handleChange} type="number" id="age" name="age" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input value={email} onChange={handleChange} type="email" id="email" name="email" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="password" className="leading-7 text-sm text-gray-600">
                      Password
                    </label>
                    <input value={password} onChange={handleChange} type="password" id="password" name="password" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="cpassword" className="leading-7 text-sm text-gray-600">
                      Confirm Password
                    </label>
                    <input value={cpassword} onChange={handleChange} type="password" id="cpassword" name="cpassword" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <button disabled={!fname || !lname || !age || !email || !password || !cpassword} onClick={registerAccount} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg  disabled:bg-indigo-300">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
