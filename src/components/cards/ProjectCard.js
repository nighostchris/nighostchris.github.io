import React from "react";
import { Link } from "gatsby";

const SkillCard = ({ thumbnail, imgalt, type, title, link, subtitle, abstract, className }) => {
  const getTextColorByType = () => {
    switch(type) {
      case 'Web-App':
        return "bg-blue-200 text-blue-800";
      case 'Application':
        return "bg-red-200 text-red-800";
      case 'Game':
        return "bg-green-200 text-green-800";
      case 'Chatbot':
        return "bg-indigo-200 text-indigo-800";
      default:
        return "";
    }
  }

  return (
    <div className={`flex flex-col rounded-lg shadow-lg overflow-hidden ${className}`}>
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={thumbnail} alt={imgalt} />
      </div>
      <div className="flex-1 bg-gray-100 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className={`text-sm font-medium py-0.5 px-3 w-fit-content rounded-full ${getTextColorByType(type)}`}>
            { type }
          </p>
          <Link to={link} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">
              { title }
            </p>
            <p className="mt-1 text-sm font-medium text-gray-600">
              { subtitle }
            </p>
            <p className="mt-3 text-base text-gray-500">
              { abstract }
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
