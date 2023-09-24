import React from "react";

const Tags = ({ text }) => {
  return (
    <>
      <div className="px-3 w-[fit-content] bg-furfle text-white rounded-md bg-opacity-50">
        {text}
      </div>
    </>
  );
};

export default Tags;
