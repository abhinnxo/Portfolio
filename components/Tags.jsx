import React from "react";

const Tags = ({ text }) => {
  return (
    <>
      <div className="px-4 py-2 inline-block text-sm font-semibold leading-none text-white bg-teal-400 rounded-full opacity-80 hover:opacity-100">
        {text}
      </div>
    </>
  );
};

export default Tags;
