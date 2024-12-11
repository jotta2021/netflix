import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function Options({ movies, setSelectMovie }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = React.useRef();
const [maxItens,setMaxItens] = useState(5)
  const handleScroll = (direction) => {
    const scrollAmount = 200; // Quantidade a rolar
    if (direction === "left") {
      scrollRef.current.scrollLeft -= scrollAmount;
      setScrollPosition(scrollRef.current.scrollLeft);
    } else if (direction === "right") {
      scrollRef.current.scrollLeft += scrollAmount;
      setScrollPosition(scrollRef.current.scrollLeft);
    }
  };

  return (
    <div className="px-16 max-md:px-4 absolute bottom-0">
      <h2 className="text-white font-semibold text-[1.5rem] max-md:text-[1rem]">
        Sugestões que você vai adorar
      </h2>
      <div className="mt-4 flex items-center gap-4 relative">
        <button
          className="absolute left-0 top-[30%] z-10"
          onClick={() => handleScroll("left")}
        >
          <IoIosArrowBack size={50} color="white" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4  max-md:overflow-x-scroll scrollbar-hide relative w-full"
        >
          {movies.slice(0,maxItens).map((item) => (
            <div
              className="w-[20rem] h-[10rem] relative group max-md:w-[14rem] max-md:h-[8rem]"
              key={item.id}
              onClick={() => setSelectMovie(item)}
            >
              <div className="w-full h-full duration-300 transform group-hover:scale-125 cursor-pointer">
                <img
                  src={item.capa}
                  alt={item.title}
                  className="w-full h-full rounded object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <button
          className="absolute right-0 top-[30%] z-10"
          onClick={() => handleScroll("right")}
        >
          <IoIosArrowForward size={50} color="white" />
        </button>
      </div>
    </div>
  );
}

export default Options;
