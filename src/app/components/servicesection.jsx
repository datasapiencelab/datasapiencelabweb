import React from "react";

const ServiceSection = () => {
  return (
    <section className="m-5">
      <div className="flex justify-center items-center mt-5 mb-5 text-5xl font-montseratt font-bold">
        Our Services
      </div>
      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow card bg-base-300 rounded-box p-5 hover:shadow-lg hover:shadow-black duration-300 ease-in-out">
          <div className="p-3">
            <h2 className="text-lg font-bold mb-3 text-center font-sans">Data Analytics &amp; Visualization</h2>
            <h3 className="font-semibold mb-3">
              Unlock the Power of Your Data
            </h3>
            <ul className="list-disc">
              <li>Turn raw data into actionable insights.</li>
              <li>Uncover hidden trends and patterns.</li>
              <li>Make informed decisions that drive results.</li>
              <li>Communicate your findings through compelling visuals.</li>
              <li>Gain a competitive edge in a data-driven world.</li>
            </ul>
          </div>
        </div>
        <div className="divider lg:divider-horizontal hover:divider-accent">O</div>
        <div className="grid flex-grow card bg-base-300 rounded-box p-5 hover:shadow-lg hover:shadow-black duration-300 ease-in-out">
          <div className="p-3">
            <h2 className="text-lg font-bold mb-3 text-center font-sans">Machine Learning &amp; AI</h2>
            <h3 className="font-semibold mb-3">
              Build Intelligent Solutions That Learn and Adapt
            </h3>
            <ul className="list-disc">
              <li>Automate tasks and streamline processes.</li>
              <li>Personalize user experiences.</li>
              <li>Predict outcomes and make proactive decisions.</li>
              <li>Uncover new opportunities for growth and innovation.</li>
              <li>
                Stay ahead of the curve in a rapidly evolving technological
                landscape.
              </li>
            </ul>
          </div>
        </div>
        <div className="divider lg:divider-horizontal hover:divider-accent">O</div>
        <div className="grid flex-grow mx-h-10 card bg-base-300 rounded-box p-5 hover:shadow-lg hover:shadow-black duration-300 ease-in-out" >
          <div className="p-3">
            <h2 className="text-lg font-bold mb-3 text-center font-sans">Custom Website &amp; Mobile Apps</h2>
            <h3 className="font-semibold mb-2">
              Craft a Digital Experience That Wows
            </h3>
            <ul className="list-disc">
              <li>Engage your audience with a visually stunning design.</li>
              <li>Deliver a seamless user experience across all devices.</li>
              <li>Integrate powerful features that drive conversions.</li>
              <li>
                Stand out from the competition with a unique online presence.
              </li>
              <li>Achieve your business goals through smart web design.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center m-5 mb-8">
        <button className="btn btn-ghost btn-outline btn-lg rounded-full shadow-md hover:border-base-100 hover:shadow-black hover:scale-110 transition duration-300 ease-in-out"> Get A Quote</button>
      </div>
    </section>
  );
};

export default ServiceSection;
