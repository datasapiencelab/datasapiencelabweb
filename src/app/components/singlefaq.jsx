import React from "react";

const SingleFAQ = ({ question, answer }) => {
  return (
    <div className="collapse collapse-arrow join-item bg-base-200 mt-2 mb-2 hover:shadow-md hover:shadow-secondary">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-black text-primary-content peer-checked:bg-black peer-checked:font-bold">
        <p>{question}</p>
      </div>
      <div className="collapse-content border-t-2 peer-checked:pt-3 bg-black text-primary-content peer-checked:bg-gray-900">
        <p>&#8594; {answer}</p>
      </div>
    </div>
  );
};

export default SingleFAQ;
