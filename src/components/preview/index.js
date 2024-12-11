import React, { useEffect, useRef } from "react";
import Background from "../../assets/Type=HomePage.png";
import { IoIosPlay } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
function Preview({selectMovie}) {
  const videoRef = useRef()
  useEffect(()=> {
    console.log('ativando o som em  1 segundo')
    setTimeout(()=> {
    console.log('ativando o som do video', videoRef)
    videoRef.current.muted = false;
    },1000)
   
  },[])
  return (
    <div
      className="w-full h-full flex flex-col justify-center z-0  overflow-x-hidden"
    >
        <video
        ref={videoRef}
        src={selectMovie.video}
        autoPlay
       muted
        poster={selectMovie.capa}
        className=" w-full h-[100vh] object-cover"
      ></video>


      <div className=" px-16 text-white absolute max-md:px-4">
        <div className="flex flex-col gap-2">
          <img
            src={require("../../assets/serie.png")}
            alt="nseries"
            className="w-[120px] -mb-8 max-md:[100px]"
          />
          <h1 className="text-[4rem] font-bold max-md:text-[2.5rem]">{selectMovie.title}</h1>
          <p className="w-[518px] text-[1.2rem] max-md:text-[0.8rem] max-md:max-w-[400px]">
            {selectMovie.descricao}
          </p>
        </div>
        {/**buttons container */}
        <div className="flex items-center gap-4 mt-4">
          <button className="bg-white text-black flex items-center justify-center rounded-sm font-semibold  p-4 max-md:p-2  text-[1.2rem] max-md:text-[1rem] ">
            <IoIosPlay size={30} />
            Assistir
          </button>
          <button className="bg-[rgb(255,255,255,30%)] text-white flex items-center justify-center rounded-sm font-semibold  p-4 px-4 max-md:p-2 gap-2  text-[1.2rem]  max-md:text-[1rem]">
            <IoIosInformationCircleOutline size={30} />
            Mais informações
          </button>
        </div>
      </div>

     
    </div>
  );
}

export default Preview;
