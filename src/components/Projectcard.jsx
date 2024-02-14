import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { useState } from "react";
import Modal from "./Modal";

export default function Projectcard({ index, name, description, image }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    image: "",
    description: "",
  });

  const handleViewMore = () => {
    setModalContent({ image, description });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px] ">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-contain rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p
            className="mt-2 text-secondary text-[14px] overflow-hidden text-justify"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button className="text-secondary" onClick={handleViewMore}>
            View More...
          </button>
        </div>
      </Tilt>
      {isModalOpen && (
        <Modal
          image={modalContent.image}
          description={modalContent.description}
          onClose={handleCloseModal}
        />
      )}
    </motion.div>
  );
}
