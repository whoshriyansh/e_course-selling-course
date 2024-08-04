// src/components/FormFields.js
import React from "react";

const TextInput = ({
  label,
  name,
  type = "text",
  required = false,
  autoComplete = "off",
  ...rest
}) => (
  <div>
    <label
      htmlFor={name}
      className="block text-xs font-medium leading-6 text-gray-600"
    >
      {label}
    </label>
    <div className="mt-2">
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary_orange sm:text-sm sm:leading-6"
        {...rest}
      />
    </div>
  </div>
);

const Dropdown = ({ label, name, options, required = false, ...rest }) => (
  <div>
    <label
      htmlFor={name}
      className="block text-xs font-medium leading-6 text-gray-600"
    >
      {label}
    </label>
    <div className="mt-2">
      <select
        id={name}
        name={name}
        required={required}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary_orange sm:text-sm sm:leading-6"
        {...rest}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  </div>
);

const RangeInput = ({ label, name, min, max, step, ...rest }) => (
  <div>
    <label
      htmlFor={name}
      className="block text-xs font-medium leading-6 text-gray-600"
    >
      {label}
    </label>
    <div className="mt-2">
      <input
        id={name}
        name={name}
        type="range"
        min={min}
        max={max}
        step={step}
        className="w-full"
        {...rest}
      />
    </div>
  </div>
);

const FileInput = ({ label, name, accept, ...rest }) => (
  <div>
    <label
      htmlFor={name}
      className="block text-xs font-medium leading-6 text-gray-600"
    >
      {label}
    </label>
    <div className="mt-2">
      <input
        id={name}
        name={name}
        type="file"
        accept={accept}
        className="block w-full text-gray-900"
        {...rest}
      />
    </div>
  </div>
);

const SubmitButton = ({ label }) => (
  <div>
    <button
      type="submit"
      className="flex w-full justify-center rounded-md bg-primary_orange px-3 py-1.5 text-lg font-medium leading-6 text-white shadow-sm hover:bg-primary_orange/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {label}
    </button>
  </div>
);

export { TextInput, Dropdown, RangeInput, FileInput, SubmitButton };
