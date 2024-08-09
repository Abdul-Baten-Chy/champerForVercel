import { motion } from "framer-motion";
import video from "../../assets/vedio.mp4";

function WhoWeAre() {
  return (
    <motion.div
      className="flex mt-28 gap-10 max-w-[1280px] mx-auto px-14"
      initial={{ opacity: 0, x: 900 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
    >
      <div className="flex-1 bg-[#dbe7ec ] p-10 rounded-3xl hover:scale-105 hover:bg-[#dbe7ec] hover:text-[#333333] transition duration-700 ease-in">
        <h3 className="font-bold text-xl text-black">Who We Are </h3>
        <h2 className="text-5xl leading-snug font-bold mt-6 mb-24">
          Enhance Your Workspace
          <br /> Boost Your <span className="text-[#F26B4E]">Productivity</span>
        </h2>
        <p>
          Welcome to our champer shop, where we transform your workspace into a
          hub of productivity and innovation. At [Your Champer Shop Name], we
          believe that a well-designed and organized workspace can elevate your
          work experience, making every task more enjoyable and efficient. Our
          shop offers a wide range of high-quality champer products,
          meticulously crafted to meet the diverse needs of modern
          professionals. From ergonomic chairs that support your posture to
          spacious desks that provide ample room for creativity, we have
          everything you need to create a comfortable and inspiring work
          environment.
        </p>
      </div>
      <div className="flex-1 flex flex-col relative hover:scale-105 hover:text-[#333333] transition duration-700 ease-in">
        <div className="flex-1  relative ">
          <video
            src={video}
            className="object-cover w-full h-full overflow-hidden rounded-3xl"
            autoPlay
            muted
            loop
          ></video>
          <div className="w-full h-full bg-gradient-to-r from-[#FC6075] to-[#f6b0b9] opacity-0 hover:opacity-75 rounded-3xl  absolute top-0 left-0 z-20 transition duration-700 "></div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-6  bg-[#FFF6F7] mt-4 rounded-3xl p-6">
          <div className="p-3 bg-white rounded-3xl">
            <h3 className="text-3xl font-bold ">3.5 </h3>
            <p>Years Trust</p>
          </div>
          <div className="p-3 bg-white rounded-3xl">
            <h3 className="text-3xl font-bold ">36 </h3>
            <p>Renowned Shop</p>
          </div>
          <div className="p-3 bg-white rounded-3xl">
            <h3 className="text-3xl font-bold ">100k </h3>
            <p>Regular Customer</p>
          </div>
          <div className="p-3 bg-white rounded-3xl">
            <h3 className="text-3xl font-bold ">4.8 </h3>
            <p>Rating</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default WhoWeAre;
