"use client";
import React, { FormEvent, useState } from 'react';

import RightArrowIcon from '../Icons/RightArrowIcon';

type FormData = {
  email: string;
};

const FooterForm = () => {
  const [formData, setFormData] = useState<FormData>({ email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnsubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify(formData));
  };
  return (
    <form
      onSubmit={handleOnsubmit}
      className="flex items-center justify-between gap-2 border-b-2 border-form-border pb-5"
    >
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="box-shadow-none peer m-0 w-full appearance-none border-none bg-transparent p-0 text-[16px] font-semibold text-inherit outline-none autofill:bg-transparent focus:outline-none focus:ring-0"
        placeholder="Enter your email"
        required
      />
      <button
        type="submit"
        className="cursor-default peer-invalid:cursor-not-allowed"
      >
        <RightArrowIcon />
      </button>
    </form>
  );
};

export default FooterForm;
