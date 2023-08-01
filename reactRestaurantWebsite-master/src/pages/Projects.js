import React, { useState } from "react";
import { data } from "../data/data.jsx";
import { FaWindowClose } from "react-icons/fa";
import camii from "../assets/minare-galery/1.jpeg";

const Projects = () => {
  const [projects, setProjects] = useState(data);

  const filterType = (category) => {
    setProjects(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-gray-600 font-bold text-4xl text-center"></h1>
      <h3 className="text-gray-500 font-bold text-xl text-center mt-9 mb-9">
        
      </h3>
      <h3 className="text-gray-500 font-bold text-xl text-center mt-9 mb-9">

      </h3>

      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="font-bold text-gray-700"></p>
          <div className="flex justfiy-between flex-wrap mb-6">
            <button
              onClick={() => setProjects(data)}
              className="secenekler"
            >
              Tümü
            </button>
            <button
              onClick={() => filterType("celik")}
              className="secenekler"
            >
              Fare & Akrep İlaçlama
            </button>
            <button
              onClick={() => filterType("beton")}
              className="secenekler"
            >
              Bahçe & Pire İlaçlama
            </button>
            <button
              onClick={() => filterType("tas")}
              className="secenekler"
            >
              Ev & İş Yeri İlaçlama 
            </button>
          </div>
        </div>
      </div>

      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="tempimg" />
        <FaWindowClose onClick={() => setModel(false)} className="x" />
      </div>
      <div className="gallery">
        {projects.map((item, index) => {
          return (
            <div className="pics" key={index}>
              <img
                src={item.image}
                alt="img"
                style={{ width: "100%" }}
                onClick={() => getImg(item.image)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
