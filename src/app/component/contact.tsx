"use client";
import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <section className="relative bg-gradient-to-br from-blue-50 via-purple-100 to-indigo-50 py-20 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto flex flex-wrap lg:flex-nowrap gap-10">
          
          {/* Map + Info */}
          <div className="lg:w-2/3 w-full relative rounded-2xl overflow-hidden shadow-xl">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.2256353526686!2d67.06475587401698!3d24.992447839965998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3411f9004cd31%3A0xe1c3d99e67a90556!2sSt.%2013%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731157287380!5m2!1sen!2s"
              className="w-full h-96 lg:h-full absolute inset-0 opacity-50"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
            <div className="relative z-10 bg-white/80 backdrop-blur-lg p-8 md:p-10 rounded-xl shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-xs font-semibold text-gray-700 tracking-wider">ADDRESS</h2>
                  <p className="text-gray-900 mt-1">St. 11 Sector 5 A 2 New Karachi</p>
                </div>
                <div>
                  <h2 className="text-xs font-semibold text-gray-700 tracking-wider">EMAIL</h2>
                  <p className="text-indigo-600">infohkmentor@email.com</p>
                  <h2 className="text-xs font-semibold text-gray-700 tracking-wider mt-4">PHONE</h2>
                  <p className="text-gray-900">0319-791288</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/3 w-full bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">Contact</h2>
            <p className="text-gray-700 mb-6">
              Have any questions or just want to say hello? Feel free to reach out!
            </p>

            <form action="https://formspree.io/f/mdkozkpj" method="POST">
              <div className="mb-4">
                <label htmlFor="name" className="text-sm font-medium text-gray-800">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="text-sm font-medium text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="text-sm font-medium text-gray-800">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="text-sm font-medium text-gray-800">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full  bg-gradient-to-r from-indigo-600 to-violet-700 hover:from-purple-800  px-6  hover:scale-65 text-white font-medium py-2 rounded-lg transition duration-300 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
