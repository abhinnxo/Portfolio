import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import { BsSend } from "react-icons/bs";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const form = useRef();
  const successToast = () => toast.success("Email has been sent successfully!");
  const errorToast = () => toast.error("There was some problem, Retry!");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // sends email
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle form submission logic here
    emailjs
      .sendForm(
        "service_9bouui9",
        "template_4vsp2ns",
        form.current,
        "u_D5KeCUKtJAYBoV1"
      )
      .then(
        (result) => {
          console.log("email sent");
          successToast();
          // Reset the form after submission
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          errorToast();
        }
      );
  };

  return (
    <div id="contact" className="bg-darkgreen pt-24">
      <div className="container mx-auto">
        <Image
          className="mx-auto"
          src="/lotus.png"
          alt="Lotus Image"
          width={75}
          height={75}
        />
        <h1 className="text-4xl mt-6 mb-6 text-center font-abril leading-normal">
          Let&apos;s Connect
        </h1>
        <form
          ref={form}
          // onSubmit={sendEmail}
          onSubmit={handleSubmit}
          className="p-6 rounded shadow-md max-w-screen-md mx-auto"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-offwhite ">
              Your Full Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              className="border border-darkgreen rounded-md w-full py-2 px-3 text-offwhite leading-tight focus:outline-none focus:border-offwhite"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-offwhite-600 ">
              Your Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              className="border border-darkgreen rounded-md w-full py-2 px-3 text-offwhite leading-tight focus:outline-none focus:border-offwhite"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="body" className="block text-offwhite-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border border-darkgreen rounded-md w-full py-2 px-3 text-offwhite leading-tight focus:outline-none focus:border-offwhite"
              rows="5"
              required
            />
          </div>

          <div id="contact__send__div" className="text-center">
            <button
              id="contact__send"
              type="submit"
              value={"send"}
              className="flex bg-greywhite hover:bg-red text-darkgreen font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-bloodred"
            >
              Send
              <span>
                <BsSend className="mt-0.5 ml-3" />
              </span>
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default ContactForm;
