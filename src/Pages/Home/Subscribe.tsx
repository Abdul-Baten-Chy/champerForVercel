import { Button } from "../../components/ui/button";

const Subscribe = () => {
  const img = "https://i.ibb.co/7S5fVp1/pexels-pixabay-45241.jpg";
  return (
    <div
      className={`bg-cover bg-center h-[400px] relative mt-10 mb-20 bg-fixed`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-[#4a869e] absolute top-0 left-0 w-full h-full z-20 bg-opacity-75 flex flex-col justify-center items-center">
        <h4 className="text-2xl text-white mb-10">
          Please Subscribe Our Newsleter{" "}
        </h4>
        <div className="flex items-center gap-5">
          <input type="text" className="w-96 h-14 px-5 py-2" />
          <Button className="h-14 px-3 bg-[#F26B4E] text-white text-lg w-36">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
