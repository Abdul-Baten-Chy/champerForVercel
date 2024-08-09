import { Button } from "../../components/ui/button";
const categoies = ["Backpacks", "Footwear", "Equipments", "Champing"];
const Categories = () => {
  return (
    <section className="bg-white py-12  max-w-[1280px] mx-auto">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-12">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoies.map((item, index) => (
            <div
              key={index}
              className="bg-[#dbe7ec] max-w-[370px] relative hover:scale-105 transition duration-700 ease-in "
            >
              <img
                src="https://i.ibb.co/n0wXqcZ/imgCard6.jpg"
                alt="Vases"
                className="mx-auto w-full object-fill"
              />
              <Button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-8 bg-[#F26B4E]">
                {" "}
                {item}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
