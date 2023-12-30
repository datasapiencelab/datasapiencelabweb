import React from "react";
import SingleFAQ from "./singlefaq";

const HomepageFAQ = () => {
  return (
    <div>
      <div>
      <div className="flex justify-center items-center mt-5 mb-5 text-5xl font-montseratt font-bold">
        Common Questions
      </div>
      <div className="join-vertical">
        <SingleFAQ
          question="What makes your software development solutions the best fit for my business needs?"
          answer="We focus on crafting the perfect fit, not just a one-size-fits-all solution. We take time to understand your needs before proposing solutions, and we involve you every step of the way."
        />
        <SingleFAQ
          question="How does your after-sales support ensure the continued success of my project?"
          answer="We offer free on-demand support, regular maintenance updates, and a dedicated account manager for seamless communication."
        />
        <SingleFAQ
          question="How do you make your software development services budget-friendly for startups and small businesses?"
          answer="We offer flexible pricing models, phased development, and utilization of open-source technology to reduce costs."
        />
        <SingleFAQ
          question="What happens if I'm not happy with the initial design or functionality of my software?"
          answer="We offer unlimited revisions during development to ensure your satisfaction."
        />
        <SingleFAQ
          question="Can your ML & AI solutions deliver impactful results without breaking the bank?"
          answer="Yes, we offer cost-effective ML & AI solutions through pre-built models, hybrid approaches, and data optimization."
        />
        </div>
      </div>
    </div>
  );
};

export default HomepageFAQ;
