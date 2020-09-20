import React from "react";

const SkillCard = ({ language, icon, description, type, className }) => {
  return (
    <div className={`${className} relative w-mobile-skill-card md:w-md-skill-card lg:w-lg-skill-card xl:w-xl-skill-card bg-white rounded-card border border-solid border-custom-grey-200 shadow-md zoom hover:shadow-xl`}>
      <div className={`flex flex-row items-center justify-end px-30px h-skill-card-header border-solid border-b border-custom-grey-100 rounded-t-card
        ${type === "general" ? "bg-skill-card-header-blue" : type === "web" ? "bg-skill-card-header-red" : type === "devops" ? "bg-skill-card-header-green" : type === "backend" ? "bg-skill-card-header-purple" : "bg-skill-card-header-yellow"}
      `}>
        <h1 className="font-bold text-h3 md:text-h2 xl:text-h1 text-custom-grey-500 z-10">
          {language}
        </h1>
      </div>
      <img
        alt={language}
        src={icon}
        className={`w-mobile-skill-icon md:w-md-skill-icon xl:w-xl-skill-icon h-xl-skill-icon absolute top-mobile-skill-icon-top md:top-md-skill-icon-top xl:top-xl-skill-icon-top left-xl-skill-icon-left`}
      />
      <p className="font-fira-mono w-full px-20px xl:px-30px pt-50px xl:pt-60px pb-20px">
        {description}
      </p>
    </div>
  );
};

export default SkillCard;
