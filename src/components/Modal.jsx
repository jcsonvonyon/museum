import React from "react";
import { X } from "lucide-react";

const Modal = ({ image, description, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black  flex justify-center items-center z-10">
      <div className="mt-10">
          <button className="place-self-end xl:ml-10 " onClick={onClose}>
            <X  size={30} color="white"/>
          </button>
          <div className="flex  flex-col xl:flex-row gap-2 text-white  items-center">
              <div className=" h-[200px] w-[300px] xl:h-[530px] xl:w-[900px] xl:ml-10">
              <img
                src={image}
                alt="project_image"
                className="w-full h-full object-contain  rounded-2xl"
              />
              </div>
              <div className="text-justify m-5">
              {description}
              </div>
          </div>
      </div>
    </div>
  );
};

export default Modal;
