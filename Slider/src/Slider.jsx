import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const images = [
  {
    title: "Fintech &\nBanking",
    href: "/fintech-and-banking",
    imgSrc:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    alt: "Fintech and Banking",
    isShifted: false,
  },
  {
    title: "Healthcare &\nWellness",
    href: "/healthcare-and-wellness",
    imgSrc:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    alt: "Healthcare and Wellness",
    isShifted: true,
  },
  {
    title: "Education &\nE-Learning",
    href: "/education-and-elearning",
    imgSrc:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    alt: "Education and E-Learning",
    isShifted: false,
  },
  {
    title: "Real Estate &\nProperty",
    href: "/real-estate-property",
    imgSrc:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    alt: "Real Estate and Property",
    isShifted: true,
  },
  {
    title: "Retail &\nE-Commerce",
    href: "/retail-ecommerce",
    imgSrc:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    alt: "Retail and E-Commerce",
    isShifted: false,
  },
  {
    title: "Supply Chain\n& Logistics",
    href: "/supply-chain-logistics",
    imgSrc:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    alt: "Supply Chain and Logistics",
    isShifted: true,
  },
  {
    title: "Public Sector",
    href: "/public-sector",
    imgSrc:
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
    alt: "Public Sector",
    isShifted: false,
  },
  {
    title: "Startups",
    href: "/startups",
    imgSrc:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    alt: "Startups",
    isShifted: true,
  },
  {
    title: "Oil, Gas\n& Energy",
    href: "/oil-gas-energy",
    imgSrc:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    alt: "Oil, Gas and Energy",
    isShifted: false,
  },
  {
    title: "Tele-\ncommunication",
    href: "/telecommunication",
    imgSrc:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    alt: "Telecommunication",
    isShifted: true,
  },
  {
    title: "NGO",
    href: "/ngo",
    imgSrc:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    alt: "NGO",
    isShifted: false,
  },
];

export default function IndustriesEmpower() {
  return (
    <section className="w-full">
      <div className="w-[90%] bg-[url('bg.jpg')] bg-cover bg-center p-10 md:p-20 rounded-[70px] overflow-hidden flex flex-col gap-5 md:gap-10 m-auto">
        <h2 className="text-white text-4xl lg:text-6xl font-semibold">
          Industries We <span className="block text-[#65b0ff]">Empower</span>
        </h2>
        <p className="max-w-4xl text-white text-[14px] md:text-base">
          We deliver tailored digital solutions across industries, empowering
          businesses to innovate, scale, and thrive in a connected world.
        </p>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="w-full"
        >
          {images.map((image, index) => {
            const { title, isShifted, alt, imgSrc } = image;
            return (
              <SwiperSlide
                key={index}
                className={`!w-[200px] !h-[250px] sm:!w-[300px] sm:!h-[350px] lg:!w-[400px] lg:!h-[450px] ${
                  isShifted ? "mt-14" : "mt-0"
                }`}
              >
                <div className="w-full h-full rounded-[60px] overflow-hidden relative">
                  <img
                    src={imgSrc}
                    alt={alt}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <h3 className="absolute bottom-10 left-10 text-white text-xl lg:text-2xl font-semibold">
                    {title}
                  </h3>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}