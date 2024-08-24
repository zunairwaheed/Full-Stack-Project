import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
   
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/azylzylb", userInfo);
      toast.success("Form submitted successfully");
    } catch (error) {
      console.error(error);
      toast.error("something went wrong")
    }
  };
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 pt-28 md:px-20"
      >
        <h1 className="text-3xl text-red-600 font-bold mb-4">Contact Us</h1>
        <span>Please fill out the below form to contact us</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Sent Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 ">FullName:</label>
              <input
                {...register("name", { required: true })}
                type="text"
                id="name"
                name="name"
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Your FullName"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 ">Email:</label>
              <input
                {...register("email", { required: true })}
                type="email"
                id="email"
                name="email"
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Your Email"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 ">Message:</label>
              <input
                {...register("message", { required: true })}
                type="text"
                id="message"
                name="message"
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Your Message"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-red-600 text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-200"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
