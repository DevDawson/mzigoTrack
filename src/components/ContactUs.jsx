import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <p className="text-center text-gray-400 mb-10">
          We'd love to hear from you. Fill out the form and we'll get back to you shortly.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium">Your Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="md:col-span-2 flex flex-col">
            <label className="mb-2 text-sm font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded font-semibold"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
