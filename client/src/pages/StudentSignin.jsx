// src/components/StudentSignin.js
import React from "react";
import { TextInput, SubmitButton } from "../helper/FormComponents";
import { validationPatterns } from "../helper/ValidationPatterns";

const StudentSignin = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="bg-primary_orange hidden md:block md:w-2/5"></div>
      <div className="bg-white w-full md:w-3/5 flex justify-center items-center">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-primary_black">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-4">
              <TextInput
                label="Email"
                name="email"
                type="email"
                required
                pattern={validationPatterns.email.source}
                autoComplete="email"
              />
              <TextInput
                label="Password"
                name="password"
                type="password"
                required
                pattern={validationPatterns.password.source}
                autoComplete="current-password"
              />
              <SubmitButton label="Sign in" />
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{" "}
              <a
                href="#"
                className="font-semibold text-primary_black hover:text-primary_orange duration-150"
              >
                Register Now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSignin;
