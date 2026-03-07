"use client";

import Link from "next/link";
import {
  contactInfo,
  contactData,
  contactFormFields,
  socialLinks,
} from "@/data";
import { LuSend } from "react-icons/lu";
import { useState } from "react";
import toast from "react-hot-toast";
import { sendContactForm } from "@/components/lib/api";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const InputStyles =
    "px-4 py-3.5 my-4 bg-slate-800 outline-none rounded-md w-full text-gray-200 placeholder-gray-400";

  const onSubmit = async (event: React.FormEvent) => {
  setLoading(true);
  event.preventDefault();

  const formData = new FormData(event.target as HTMLFormElement);


    const data = await sendContactForm(formData);

    if (data.success) {
      (event.target as HTMLFormElement).reset();

      toast("Form submitted successfully", {
        style: {
          background: "#4f39f6",
          color: "white",
        },
      });
    } else {
      toast("Error submitting form", {
        style: {
          background: "#4f39f6",
          color: "white",
        },
      });
    }
  
  setLoading(false);
};

  return (
    <section id="contact" className="py-16 lg:py-30">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
        <div data-aos="fade-right">
          <h2 className="py-3 text-3xl md:text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r rom-indigo-500 via-violet-500 to-indigo-900 animate-gradient">
            {contactData.heading}
          </h2>

          <p className="text-gray-400 mb-10 text-base lg:text-lg leading-relaxed">
            {contactData.description}
          </p>

          <div className="space-y-5 mb-12">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  href={item.link}
                  key={index}
                  className="group flex items-center gap-4 px-2 py-3 transition-colors hover:bg-white/5 rounded-lg"
                >
                  <div className="h-15 w-15 rounded-full bg-white/5 text-white transition transform group-hover:scale-105 grid place-items-center">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h4 className="text-md font-medium text-white">
                      {item.title}
                    </h4>
                    <p className="text-md text-gray-400">{item.value}</p>
                  </div>
                </Link>
              );
            })}

            <div className="mt-8 mx-6">
              <div className="flex flex-wrap gap-4 justify-start sm:justify-start md:justify-start lg:justify-start">
                {socialLinks.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors text-2xl"
                      aria-label={item.title}
                    >
                      <Icon />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* form */}
        <div data-aos="zoom-in">
          <form
            onSubmit={onSubmit}
            className="rounded-lg bg-slate-900 px-4 py-8"
          >
            {contactFormFields.map((field, index) => {
              if (field.type === "textarea") {
                return (
                  <textarea
                    key={index}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    className={`${InputStyles} resize-none`}
                    rows={field.rows || 5}
                  />
                );
              } else {
                return (
                  <input
                    key={index}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    className={InputStyles}
                  />
                );
              }
            })}

            <button className="w-full bg-linear-to-r  from-indigo-500 via-violet-500 to-indigo-900 animate-gradient hover:from-blue-800 hover:to-purple-700 text-white font-semibold py-4 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70">
              {loading ? (
                <>
                  <span className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Sending...
                </>
              ) : (
                <>
                  <LuSend size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
