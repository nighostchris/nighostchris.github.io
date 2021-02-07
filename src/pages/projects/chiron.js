import React from "react";
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProjectDiagram, faClock, faLanguage } from "@fortawesome/free-solid-svg-icons";

import Root from "../../components/root/Root";

const screenshots = [
  { src: "https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/projects%2Fchiron.care%2Fnew-design%2Fspecialist-page.webp?alt=media&token=57b1e0b9-2e6b-43eb-8ea9-4c0c01d95963", alt: "specialist-page" },
  { src: "https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/projects%2Fchiron.care%2Fnew-design%2Fspecialists-list.webp?alt=media&token=f0d986ef-0400-4045-9947-a1e4f6523c88", alt: "specialists-list" },
  { src: "https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/projects%2Fchiron.care%2Fnew-design%2Fbranch-page.webp?alt=media&token=bf396c84-71f9-4497-9bd1-c02f5e118ff5", alt: "branch-page" },
  { src: "https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/projects%2Fchiron.care%2Fnew-design%2Fbody-check-plans.webp?alt=media&token=00cb0a22-3428-4282-92d8-0c38fa53c258", alt: "body-check-plans" },
  { src: "https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/projects%2Fchiron.care%2Fnew-design%2Flanding-page.webp?alt=media&token=27d8f209-4929-4066-9dff-5790fe24dd57", alt: "landing-pages" },
  { src: "https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/projects%2Fchiron.care%2Fnew-design%2Frelated-passages.webp?alt=media&token=a2d559e3-9db3-4ae3-aed2-c0bde0e4c00b", alt: "related-passages" }
];

const videoList = [
  "https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/projects%2Fchiron%2Fspecialists-list.mp4?alt=media&token=11121600-5e09-4aa5-8825-87f92fa44d93",
  "https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/projects%2Fchiron%2Fbranch.mp4?alt=media&token=ff5ec981-ca69-4ac5-bdf2-cedce908edee",
  "https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/projects%2Fchiron%2Fbody-check.mp4?alt=media&token=976f4674-7f37-4628-bdbd-fd8fc8efc8e2",
  "https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/projects%2Fchiron%2Flanding-page.mp4?alt=media&token=53b0bc70-6ecc-43a4-85c4-6babb301c6f6"
];

const detailsList = [
  "Web-App",
  "Aug 2020 - Nov 2020",
  "Node.js, React.js, Next.js, Tailwind, GraphQL, Firebase, Gatsby"
];

const ChironWebsiteProjectPage = () => (
  <Root>
    <GatsbySeo
      title="Chris Liu - Chiron Website"
      description="Chris Liu | Chiron Website | SEO friendly website made for replacing old website of Chiron Healthcare Ltd. Please refer to chiron.care for more details."
      openGraph={{
        url: 'https://chrisliu.ml/projects/chiron/',
        title: 'Chris Liu - Chiron Website',
        description: 'Chris Liu | Chiron Website | SEO friendly website made for replacing old website of Chiron Healthcare Ltd. Please refer to chiron.care for more details.',
        images: [
          {
            url: 'https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/projects%2Fchiron%2Fchiron-opengraph.jpg?alt=media&token=d654a8c4-52db-469c-a578-ede2354849e2',
            width: 1200,
            height: 630,
            alt: 'Chris Liu - Chiron Website'
          }
        ]
      }}
    />
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
      <div className="flex flex-col items-center bg-gray-700 p-8 md:p-12">
        {
          screenshots.map((screenshot, index) => (
            <img className={`w-fit-content ${index !== 0 ? "pt-8 md:pt-12" : ""}`} src={screenshot.src} alt={screenshot.alt} />
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
      <div className="py-8 lg:py-16 px-10 bg-gray-800 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {
          detailsList.map((details, index) => (
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center md:items-start">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <FontAwesomeIcon icon={index === 0 ? faProjectDiagram : index === 1 ? faClock : faLanguage} size="lg" className="text-white" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                        { index === 0 ? "Project Type" : index === 1 ? "When" : "Languages & Libraries" }
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl leading-8 font-semibold text-gray-900">
                          { details }
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </Root>
);

export default ChironWebsiteProjectPage;
