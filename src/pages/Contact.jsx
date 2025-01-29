// import React from "react";

// const Contact = () => {
//   return <div className="min-h-screen">Contact</div>;
// };

// export default Contact;
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-20">
      {/* Add padding-top to avoid navbar overlap */}
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 text-center">
        Have questions or need assistance? We are  here to help! Please fill out the form below or use the contact details provided.
      </p>
      <div className="mt-8 max-w-2xl mx-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your Message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="mt-8 text-center">
  <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
  <p className="text-gray-600">Phone: (123) 456-7890</p>
  <p className="text-gray-600">Email: support@example.com</p>
  <p className="text-gray-600">Address: 123 Main Street, Anytown, USA</p>
</div>

    </div>
  );
};

export default Contact;

