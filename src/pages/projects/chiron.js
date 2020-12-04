import React from "react";
import { Helmet } from "react-helmet";

import Root from "../../components/root/Root";

const descriptionList = [
  {
    image: "https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/projects%2Fchiron%2Fspecialist.png?alt=media&token=9473c0e2-8b3c-4ac0-90af-3a932230c5ae",
    description: "Specialist Page"
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/projects%2Fchiron%2Fspecialists.png?alt=media&token=ae9615d1-6062-43ac-8224-2ec98d9dd0aa",
    description: "Specialists List",
    remarks: "Neat categorization of specialists with one-click phone call and Vcard display"
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/projects%2Fchiron%2Fbranch.png?alt=media&token=f02389ca-4566-4ff6-bb28-123a66c6a10a",
    description: "Branch Page",
    remarks: "Featuring common issues with quick overview of clinics' details and services offered"
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/projects%2Fchiron%2Fbody-check-plans.png?alt=media&token=88159e93-d032-4d15-a91b-8a8af5903ecc",
    description: "Body Check Plans",
    remarks: "User-Friendly interface to view and compare all plans"
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/projects%2Fchiron%2Flanding-page.png?alt=media&token=b924925a-7bb5-4914-ad90-bd55c70d6371",
    description: "Landing Page",
    remarks: "Featuring a specific health info topic to raise readers' knowledge"
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/projects%2Fchiron%2Frelated-passages.png?alt=media&token=4dc335a4-872e-4f40-9c50-8566267c00e8",
    description: "Related Passages",
    remarks: "One of the carousels used in website that enable easy navigation of lengthy data"
  }
];

const videoList = [
  "https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/projects%2Fchiron%2Fspecialists-list.mp4?alt=media&token=11121600-5e09-4aa5-8825-87f92fa44d93",
  "https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/projects%2Fchiron%2Fbranch.mp4?alt=media&token=ff5ec981-ca69-4ac5-bdf2-cedce908edee",
  "https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/projects%2Fchiron%2Fbody-check.mp4?alt=media&token=976f4674-7f37-4628-bdbd-fd8fc8efc8e2",
  "https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/projects%2Fchiron%2Flanding-page.mp4?alt=media&token=53b0bc70-6ecc-43a4-85c4-6babb301c6f6"
];

const ChironWebsiteProjectPage = () => (
  <Root>
    <Helmet>
      <title>Chris Liu - Chiron Website</title>
    </Helmet>
    <div className="flex flex-col w-full">
      <div className="w-full relative">
        <div className="relative z-10 pb-8 bg-gray-800 sm:pb-16 md:pb-20 lg:w-1/2 lg:pb-28 xl:pb-32 pt-6 md:mt-0">
          <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-800 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <main className="mt-10 mx-auto max-w-7xl px-10 sm:mt-12 md:mt-16 lg:mt-20 lg:px-20 xl:mt-28">
            <div className="text-left">
              <h1 className="text-center lg:text-left text-4xl tracking-tight font-extrabold text-indigo-400 sm:text-5xl md:text-6xl">
                Chiron Website
              </h1>
              <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                I updated the website for Chiron Healthcare Ltd. with the help of Gatsby and GraphQL, enhancing the overall website speed, performance, stability and SEO. This is the first full-time project that I am playing a full-stack role, which is challenging and fun at the same time.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="mt-3 sm:mt-0 w-full lg:w-3/4 sm:max-w-xl">
                  <a
                    href="https://chiron.care"
                    target="_blank"
                    className="w-full flex items-center justify-center py-1 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:text-lg"
                  >
                    Visit The Website
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 h-full">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/projects%2Fchiron%2Foverview.jpg?alt=media&token=7cab29cb-e21e-4ebf-8e23-faf0778d70c1"
            alt=""
          />
        </div>
      </div>
      <div className="flex-col md:flex hidden">
        {
          descriptionList.map((description, index) => (
            index % 2 === 0 ? (
              <div className="flex flex-row bg-gray-700">
                <div className="h-56 bg-white sm:h-72 md:h-full w-full md:w-1/2">
                  <img className="w-full h-full object-scale-down" src={description.image} alt="" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-4 lg:px-10">
                  <p className="text-white text-2xl lg:text-3xl xl:text-5xl font-extrabold tracking-wider">
                    { description.description }
                  </p>
                  {
                    description.remarks && (
                      <p className="mt-3 text-md lg:text-lg text-justify text-gray-300 max-w-lg">
                        { description.remarks }
                      </p>
                    )
                  }
                </div>
              </div>
            ) : (
              <div className="flex flex-row bg-gray-700">
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-4 lg:px-10">
                  <p className="text-white text-2xl lg:text-3xl xl:text-5xl font-extrabold tracking-wider">
                    { description.description }
                  </p>
                  {
                    description.remarks && (
                      <p className="mt-3 text-md lg:text-lg text-justify text-gray-300 max-w-lg">
                        { description.remarks }
                      </p>
                    )
                  }
                </div>
                <div className="h-56 bg-white sm:h-72 md:h-full w-full md:w-1/2">
                  <img className="w-full h-full object-scale-down" src={description.image} alt="" />
                </div>
              </div>
            )
          ))
        }
      </div>
      <div className="flex flex-col md:hidden">
        {
          descriptionList.map((description) => (
            <div className="flex flex-col bg-gray-700">
              <div className="h-56 w-full flex flex-col justify-center items-center px-10">
                <p className="text-white text-3xl font-bold tracking-wider">
                  { description.description }
                </p>
                {
                  description.remarks && (
                    <p className="mt-3 text-lg text-gray-300 text-justify">
                      { description.remarks }
                    </p>
                  )
                }
              </div>
              <div className="h-56 bg-white w-full">
                <img className="w-full h-full object-scale-down" src={description.image} alt="" />
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex flex-col items-center bg-indigo-300 py-10 lg:py-20 px-10">
        <h1 className="text-center text-4xl tracking-tight font-extrabold text-indigo-800 md:text-5xl lg:text-6xl">
          Responsive Design
        </h1>
        <div className="flex flex-col md:flex-row mt-10 lg:mt-20">
          {
            videoList.map((v, index) => (
              <video loop muted autoPlay src={v} preload="auto" type="video/mp4" className={`w-full md:w-1/4 md:px-4 ${index !== 0 ? "mt-10 md:mt-0" : ""}`} />
            ))
          }
        </div>
      </div>
    </div>
  </Root>
);

export default ChironWebsiteProjectPage;
