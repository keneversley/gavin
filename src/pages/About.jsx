// import React from "react";

// const About = () => {
//   return <div className="min-h-screen">About</div>;
// };

// export default About;

import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <p className="text-lg text-gray-700 text-center">
        Welcome to the About page of Gavin Stewart. Our mission is to provide top-quality services and build meaningful relationships with our customers. Here, you can learn more about our vision, values, and what sets us apart.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Our Journey</h2>
        <p className="text-gray-600">
          Gavin Stewart was founded with the goal of delivering excellence. Over the years, we have grown into a trusted name, known for our commitment to innovation and customer satisfaction. Join us as we continue this exciting journey.
        </p>
      </div>
    </div>
  );
};

export default About;

