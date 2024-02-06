import React from "react";
import { X } from "lucide-react";
import { company10 } from "../assets";

const Modal = ({ image, description, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black  flex justify-center items-center z-10">
      <div className="mt-10">
          <button className="place-self-end" onClick={onClose}>
            <X  size={30} color="white"/>
          </button>
          <div className="flex flex-row gap-2 text-white ">
              <div className=" h-[730px]">
              <img
                src={image}
                alt="project_image"
                className="w-full h-full object-cover rounded-2xl"
              />
              </div>
              <div>
              {description}
              </div>
          </div>
      </div>
    </div>
  );
};

export default Modal;
