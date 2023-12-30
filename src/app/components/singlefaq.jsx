import React from "react";

const SingleFAQ = ({ question, answer }) => {
  return (
    <div className="collapse collapse-arrow join-item bg-base-200 mt-2 mb-2 hover:shadow-md hover:shadow-secondary">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-black text-primary-content peer-checked:bg-primary">
        <p>{question}</p>
      </div>
      <div className="collapse-content bg-black text-primary-content peer-checked:bg-primary">
        <p>&#8594; {answer}</p>
      </div>
    </div>
  );
};

export default SingleFAQ;
