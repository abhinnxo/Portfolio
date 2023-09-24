import React from "react";

const Features = () => {
  return (
    <div className="bg-darkgreen px-6 py-32">
      <div className="container mx-auto">
        <h1 className="text-4xl mb-16 max-sm:text-center">
          Features of My Craft
        </h1>
        <div className="w-100">
          <div className="sm:flex sm:gap-4 justify-around max-sm:mb-12 max-sm:text-center">
            <div className="flex flex-col mx-auto w-[33%] min-w-[300px] mb-12">
              <p className="pb-4 font-bold text-lg">Elegant Code</p>
              <p>
                Experience the beauty of concise and maintainable code that was
                handcrafted to perfection.
              </p>
            </div>
            <div className="flex flex-col mx-auto w-[33%] min-w-[300px]">
              <p className="pb-4 font-bold text-lg">Innovative Solutions</p>
              <p>
                Witness the power of cutting-edge technology, user-centred
                design, and advanced optimization techniques.
              </p>
            </div>
          </div>
          <div className="sm:flex sm:gap-4 justify-around max-sm:mb-12 max-sm:text-center">
            <div className="flex flex-col mx-auto w-[33%] min-w-[300px] mb-12">
              <p className="pb-4 font-bold text-lg">Performance Focus</p>
              <p>
                Be in awe with lightning-fast websites that rocket past your
                competitors.
              </p>
            </div>
            <div className="flex flex-col mx-auto w-[33%] min-w-[300px]">
              <p className="pb-4 font-bold text-lg">Responsive Design</p>
              <p>
                Watch as your website seamlessly adapts to different devices and
                screen sizes.
              </p>
            </div>
          </div>
          <div className="sm:flex sm:gap-4 justify-around max-sm:text-center">
            <div className="flex flex-col mx-auto w-[33%] min-w-[300px] max-sm:mb-12">
              <p className="pb-4 font-bold text-lg">Seamless Animation</p>
              <p>
                Savor the smoothness of fluid animations that make your website
                dance.
              </p>
            </div>
            <div className="flex flex-col mx-auto w-[33%] min-w-[300px]">
              <p className="pb-4 font-bold text-lg">Reliable Technology</p>
              <p>
                Safeguard your digital kingdom with rock-solid security and
                world-class support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
