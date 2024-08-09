import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main
      className="mt-8 md:mt-16 lg:mt-28 flex flex-col md:flex-row gap-4 max-w-[1280px] mx-auto px-8"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
        className="flex flex-1 flex-col "
      >
        <div className="bg-[#dbe7ec] flex items-center mb-8 justify-center rounded-full h-10  w-[220px]">
          <p className="text-gray-600 uppercase ">Welcome to Champer</p>
        </div>
        <h2 className=" text-4xl md:text-5xl lg:text-6xl font-light mb-6 lg:leading-[72px] tracking-tight">
          You Need To Care <br /> Of Yourself
        </h2>
        <p className="text-gray-600 mb-8">
          We use premium products for a more natural result.
        </p>
        <div className="flex gap-6  items-center">
          <button className="bg-[#4a869e] text-white px-8 py-2 rounded-full">
            Shop Now
          </button>
          <button className="border border-[#a5c3cf] text-gray-700 px-8 py-2 rounded-full">
            Contact Us
          </button>
        </div>
        <div className="mt-24 flex gap-5 mb-8">
          <div className="flex flex-col ">
            <span className="text-xl md:text-2xl lg:text-3xl font-extrabold">
              500+
            </span>
            <p className="mt-2 text-gray-600">Reseller</p>
          </div>
          <div className="flex flex-col ">
            <span className="text-xl md:text-2xl lg:text-3xl font-extrabold">
              500+
            </span>
            <p className="mt-2 text-gray-600">Reseller</p>
          </div>
          <div className="flex flex-col ">
            <span className="text-xl md:text-2xl lg:text-3xl font-extrabold">
              500+
            </span>
            <p className="mt-2 text-gray-600">Reseller</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 800 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
        className="flex-1 relative z-20 "
      >
        <div className="h-[71%] hidden md:block ">
          <img
            src="https://i.ibb.co/f1WF3jd/baner2.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
      <div className="hidden md:block w-2/5 h-3/5 bg-[#dbe7ec] absolute bottom-0 right-0 z-10"></div>
    </main>
  );
};

export default Hero;
