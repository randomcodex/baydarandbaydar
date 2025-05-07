import { vision } from "../data/vision";
import mapImage from "../assets/images/map.jpg";
import baccoImage from "../assets/images/bacco.jpg";

export default function Vision() {
  return (
    <div
      className="container mx-auto py-16 px-4 sm:px-6 max-w-4xl"
      style={{
        backgroundColor: "#051905",
        backgroundImage: `url(${baccoImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.9,
      }}
    >
      <div
        className="bg-white rounded-2xl shadow-xl p-4 sm:p-10 space-y-8 border border-gray-100"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
      >
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#051905] mb-2 tracking-tight">
            {vision.companyName}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#051905] leading-relaxed">
            {vision.history}
          </p>
          <p className="text-md sm:text-lg text-[#051905] italic mt-2">
            {vision.mission1}
          </p>
          <p className="text-md sm:text-lg text-[#051905] italic mt-2">
            {vision.mission2}
          </p>
          <p className="text-md sm:text-lg text-[#051905] italic mt-2">
            {vision.mission3}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-8">
          {vision.images.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.alt}
              className="w-full h-48 sm:h-72 object-cover rounded-xl shadow-lg border border-gray-200"
            />
          ))}
        </div>
        <div className="mt-8">
          <img
            src={mapImage}
            alt="Map"
            className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
          />
        </div>
      </div>
    </div>
  );
}
