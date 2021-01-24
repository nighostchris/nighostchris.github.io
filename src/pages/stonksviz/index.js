import React from 'react';
import { Link } from 'gatsby';

import Root from '../../components/stonksviz/Root';

const StonksVizIndexPage = () => {
  return (
    <Root props={{ title: "StonksViz - Home" }}>
      <div className="pt-10 md:pt-16 lg:pt-24 pb-8 md:pb-10 lg:pb-20 max-w-screen-xl px-8 sm:px-6 mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight leading-tight text-gray-700 sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-blue-700 font-extrabold">CHANGE</span> how you view
            <br/>
            the <span className="text-blue-500 font-extrabold">market</span>
          </h2>
          <p className="mt-3 max-w-sm mx-auto text-base text-justify sm:text-center text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            StonksViz transforms raw market data into meaningful charts, which stimulate investors to come up with interesting ideas and make better investment.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1"></div>
          <div className="flex-1 w-full bg-gray-800"></div>
        </div>
        <div className="max-w-screen-xl px-16 sm:px-6 mx-auto">
          <img className="hidden md:block relative" src="https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/stonksviz%2Flg-screen-demo.webp?alt=media&token=c4401f78-d75a-44f0-947b-40f7d3f9fe2e" alt="lg-screen-demo" />
          <img className="md:hidden relative mx-auto" src="https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/stonksviz%2Fsm-screen-demo.webp?alt=media&token=ff076705-c8a6-47d5-bdd6-c123fdf3757c" alt="sm-screen-demo" />
        </div>
      </div>
      <div className="bg-gray-800">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:py-24 lg:px-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 md:mb-12 text-gray-300 text-center">Features</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 flex flex-col items-center">
              <img className="w-32 h-32 mb-3" src="https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/stonksviz%2Fdaily-update.webp?alt=media&token=d6f26669-642f-44a1-89c9-9365c8994def" alt="daily-update" />
              <h2 className="text-lg text-gray-300 font-medium title-font mb-2">Daily Update</h2>
              <p className="leading-relaxed text-base text-gray-400 text-center max-w-xs">Fetch data, Upload to database and Redraw charts everyday.</p>
            </div>
            <div className="p-6 flex flex-col items-center">
              <img className="w-32 h-32 mb-3" src="https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/stonksviz%2Fdata-integration.webp?alt=media&token=c5afddba-7fce-43c8-9161-1db07a9407b3" alt="data-integration" />
              <h2 className="text-lg text-gray-300 font-medium title-font mb-2">Data Integration</h2>
              <p className="leading-relaxed text-base text-gray-400 text-center max-w-xs">All raw data are crawled from multiple sources and upload to database after various post-processing algorithms.</p>
            </div>
            <div className="p-6 flex flex-col items-center">
              <img className="w-32 h-32 mb-3" src="https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/stonksviz%2Ffree.webp?alt=media&token=49c3d106-da14-4673-ad22-9942c543dc74" alt="free" />
              <h2 className="text-lg text-gray-300 font-medium title-font mb-2">Free</h2>
              <p className="leading-relaxed text-base text-gray-400 text-center max-w-xs">No fee required. Since only my friend will know this service.</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-10 md:mt-12 text-gray-700 text-center">Service Highlights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 pt-10 md:py-16 mx-auto max-w-screen-xl items-center">
        <div className="mb-10 lg:mb-0">
          <img alt="snp-breadth" className="hidden md:block w-full h-full" src="https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/stonksviz%2Flg-snp-breadth.webp?alt=media&token=91efda0a-451c-4029-a5b9-e458ea7478e4" />
          <img alt="snp-breadth" className="md:hidden w-full h-full" src="https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/stonksviz%2Fsm-snp-breadth.webp?alt=media&token=8f1f399b-ee3a-4f1a-a50a-b3ee9271bf3e" />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:pl-12 md:text-left text-justify">
          <div className="flex flex-col mb-10 lg:items-start items-center max-w-xs sm:max-w-xl mx-auto">
            <h2 className="text-gray-700 text-lg md:text-2xl lg:text-3xl font-bold mb-3">S&P Breadth</h2>
            <p className="leading-relaxed text-base text-gray-600 mb-3">
              S&P index tracks the 500 stocks with highest volume in US stock market.
            </p>
            <p className="leading-relaxed text-base text-gray-600 mb-3">
              By calculating the proportion of S&P constitues that their price are higher than 20MA, we can get a big picture of S&P performance trend and trend of the highly correlated US market.
            </p>
            <p className="leading-relaxed text-base text-gray-600">
              We can further investigate the breadth by grouping on industry.
            </p>
            <Link to="/stonksviz/snpbreadth" className="mt-6 text-blue-600 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-16 mx-auto max-w-screen-xl items-center">
        <div className="mb-10 lg:mb-0">
          <img alt="cif" className="hidden md:block w-full h-full" src="https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/stonksviz%2Flg-cif.webp?alt=media&token=af070a85-ea18-4445-9ca9-c7a2d3ceed91" />
          <img alt="cif" className="md:hidden w-full h-full" src="https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/stonksviz%2Fsm-cif.webp?alt=media&token=9b09a965-d828-4e46-b582-c02a365b0bd8" />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:pl-12 md:text-left text-justify">
          <div className="flex flex-col mb-10 lg:items-start items-center max-w-xs sm:max-w-xl mx-auto">
            <h2 className="text-gray-700 text-lg md:text-2xl lg:text-3xl font-bold mb-3">Commodities, Indices & Futures</h2>
            <p className="leading-relaxed text-base text-gray-600 mb-3">
              Crude Oil, Gold, Silver, Copper and U.S Dollar are 5 important CIFs to pay attention to.
            </p>
            <p className="leading-relaxed text-base text-gray-600 mb-3">
              By tracking their trend and post-processed ratio, we get vital messages about the US market fundamentals and potential trendline turning point.
            </p>
            <Link to="/stonksviz/cif" className="mt-6 text-blue-600 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </Root>
  );
}

export default StonksVizIndexPage;
