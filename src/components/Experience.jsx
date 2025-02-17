import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import swift from "../assets/sw.png";
import tf from "../assets/tf.png";
import cpp from "../assets/c.png"; // Update the import to the C++ image
import py from "../assets/py.png";
import azure from "../assets/ado.svg"; 
import mongodb from "../assets/mongodb.png"; // Add the MongoDB image

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: swift,
      title: "Swift",
      style: "shadow-orange-400",
    },
    {
      id: 6,
      src: tf,
      title: "TensorFlow",
      style: "shadow-orange-400",
    },
    {
      id: 7,
      src: cpp, 
      title: "C++",
      style: "shadow-blue-400",
    },
    {
      id: 8,
      src: py,
      title: "Python",
      style: "shadow-yellow-400",
    },
    {
      id: 9,
      src: azure, // Add the Azure DevOps image
      title: "Azure DevOps",
      style: "shadow-blue-400",
    },
    {
      id: 10,
      src: mongodb, // Add the MongoDB image
      title: "MongoDB",
      style: "shadow-green-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">
            These are the technologies I've worked with. I am constantly seeking
            to expand my skill set and grow as a developer.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
