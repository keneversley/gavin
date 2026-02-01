// import React from "react";

// const Explore = () => {
//   return <div className="min-h-screen">Explore</div>;
// };

// export default Explore;
// import React from "react";

// const Explore = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-8 pt-20">
//       {/* Adjust the `pt-20` (padding-top) based on your navbar height */}
//       <h1 className="text-4xl font-bold text-center mb-6">Explore</h1>
//       <p className="text-lg text-gray-700 text-center">
//         Welcome to the Explore page! Here, you'll find exciting opportunities, insights, and resources to broaden your horizons. Dive in and discover something new today!
//       </p>
//       <div className="mt-8">
//         <h2 className="text-2xl font-semibold mb-4">What You Can Discover</h2>
//         <ul className="list-disc list-inside text-gray-600">
//           <li>Innovative solutions and tools</li>
//           <li>Community projects and collaborations</li>
//           <li>Upcoming events and opportunities</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Explore;

import React from "react";

const Explore = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-24">
      <h1 className="text-4xl font-bold text-center mb-12">
        Explore Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-3 text-orange-500">
            Fractional CFO Services
          </h2>
          <p className="text-gray-700 mb-4">
            Strategic financial leadership to strengthen cash flow, improve
            profitability, and support growth.
          </p>

          <h3 className="font-semibold mb-2">Financial Strategy & Leadership</h3>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Monthly/Quarterly financial review + executive reporting</li>
            <li>Budgeting, forecasting, and cash-flow planning</li>
            <li>Revenue modeling and scenario analysis</li>
            <li>Profitability tracking by SKU, channel, and customer</li>
          </ul>

          <h3 className="font-semibold mb-2">Accounting & Systems Oversight</h3>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Oversight of QuickBooks, NetSuite, or accounting systems</li>
            <li>COGS calculations and margin analysis</li>
            <li>Inventory accounting + reconciliation</li>
            <li>Monthly close supervision and data clean-up</li>
          </ul>

          {/* <h3 className="font-semibold mb-2">Fundraising & Financial Readiness</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Investor reporting & KPI dashboards</li>
            <li>Financial models for fundraising</li>
            <li>Due diligence support</li>
          </ul> */}
        </div>

        {/* Column 2 */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-3 text-orange-500">
            Fractional COO Services
          </h2>
          <p className="text-gray-700 mb-4">
            Operational leadership to ensure fulfillment, systems, and supply
            chain run smoothly.
          </p>

          <h3 className="font-semibold mb-2">Operations Management</h3>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>End-to-end operations oversight</li>
            <li>Workflow creation and SOP development</li>
            <li>Vendor, supplier, and 3PL management</li>
            <li>Operational dashboards and reporting</li>
          </ul>

          <h3 className="font-semibold mb-2">Inventory & Supply Chain</h3>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Demand planning and replenishment forecasting</li>
            <li>SKU management and inventory accuracy</li>
            <li>Inbound receiving and quality control</li>
            <li>Returns and restock workflows</li>
          </ul>

          <h3 className="font-semibold mb-2">Systems & Technology</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Shopify, ShipBob, ShipStation, Amazon</li>
            <li>Order routing & fulfillment automation</li>
            <li>Packaging, shipping, and warehouse optimization</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-3 text-orange-500">
            Warehouse, Shipping & Fulfillment
          </h2>
          <p className="text-gray-700 mb-4">
            Flexible, reliable fulfillment for startups before moving to a full
            3PL.
          </p>

          <h3 className="font-semibold mb-2">Warehouse Access Includes</h3>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Receiving & storing inventory</li>
            <li>Dedicated pick & pack services</li>
            <li>Daily B2C and B2B fulfillment</li>
            <li>Inventory tracking and reporting</li>
            <li>Repackaging, kitting, and bundles</li>
            <li>Returns and restocking management</li>
          </ul>

          <h3 className="font-semibold mb-2">Ideal For</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Startups not ready for a large 3PL</li>
            <li>Ecommerce brands needing flexible fulfillment</li>
            <li>Companies scaling or transitioning warehouses</li>
            <li>Teams needing leadership + hands-on support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Explore;

