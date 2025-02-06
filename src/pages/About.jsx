// import React from "react";

// const About = () => {
//   return <div className="min-h-screen">About</div>;
// };

// export default About;

// import React from "react";

// const About = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
//       <p className="text-lg text-gray-700 text-center">
//       Welcome to GS Experience, where we provide top-tier accounting and financial services tailored to meet the unique needs of both businesses and individuals.
//       </p>
//       <div className="mt-8">
//         <h2 className="text-2xl font-semibold mb-4">About Us</h2>
//         <p className="text-gray-600">
//         At GS Experience, an innovative accounting startup backed by over 20 years of expertise across diverse industries, we specialize in delivering precise, efficient, and personalized financial solutions designed to empower clients to make informed decisions. <br></br>
//         <br></br>
// We understand that launching a business is both an exciting and challenging endeavor, particularly when it comes to managing finances. Our focus is on helping businesses establish a robust financial foundation from the outset. We ensure that your accounting systems are not only set up correctly but are also scalable to support your business's growth and evolution. <br></br>
// <br></br>
// More than just traditional consultants, we are dedicated partners in your journey. We collaborate closely with you to design and implement customized processes and procedures tailored to your unique business needs. Our approach is centered on streamlining operations, optimizing account management, and creating a seamless financial experience that serves as the cornerstone of your business.<br></br>
// <br></br>
// Our mission is clear: to provide accurate, reliable, and innovative financial services that enable your business to thrive in today’s dynamic marketplace. We are committed to building enduring relationships with our clients, founded on trust, integrity, and exceptional service.<br></br>
// <br></br>
// At GS Experience, we don’t just manage your accounting—we become a trusted partner who truly understands your business and collaborates with you to drive sustainable growth. Our goal is to equip you with the financial clarity and strategic insights needed to make smart, forward-thinking decisions that pave the way for lasting success.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-24"> {/* Added pt-24 */}
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <p className="text-lg text-gray-700 text-center">
        Welcome to GS Experience, where we provide top-tier accounting and financial services tailored to meet the unique needs of both businesses and individuals.
      </p>
      <div className="mt-8">
        {/* <h2 className="text-2xl font-semibold mb-4">About Us</h2> */}
        <p className="text-gray-600">
          At GS Experience, an innovative accounting startup backed by over 20 years of expertise across diverse industries, we specialize in delivering precise, efficient, and personalized financial solutions designed to empower clients to make informed decisions.<br /><br />
          We understand that launching a business is both an exciting and challenging endeavor, particularly when it comes to managing finances. Our focus is on helping businesses establish a robust financial foundation from the outset. We ensure that your accounting systems are not only set up correctly but are also scalable to support your business's growth and evolution.<br /><br />
          More than just traditional consultants, we are dedicated partners in your journey. We collaborate closely with you to design and implement customized processes and procedures tailored to your unique business needs. Our approach is centered on streamlining operations, optimizing account management, and creating a seamless financial experience that serves as the cornerstone of your business.<br /><br />
          Our mission is clear: to provide accurate, reliable, and innovative financial services that enable your business to thrive in today’s dynamic marketplace. We are committed to building enduring relationships with our clients, founded on trust, integrity, and exceptional service.<br /><br />
          At GS Experience, we don’t just manage your accounting—we become a trusted partner who truly understands your business and collaborates with you to drive sustainable growth. Our goal is to equip you with the financial clarity and strategic insights needed to make smart, forward-thinking decisions that pave the way for lasting success.
        </p>
      </div>
    </div>
  );
};

export default About;

