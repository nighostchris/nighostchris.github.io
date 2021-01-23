import React from "react";
import { Helmet } from "react-helmet";

import Root from '../../components/stonksviz/Root';

const CIFPage = ({ data }) => {
  let antDesignCharts;
  if (process.browser) {
    antDesignCharts = require('@ant-design/charts');
  }

  const graphAbbrMapping = new Map([
    ['dxy', 'U.S. Dollar Index'],
    ['oil', 'Crude Oil WTI Futures'],
    ['gold', 'Gold Futures'],
    ['silver', 'Silver Futures'],
    ['copper', 'Copper Futures'],
  ]);

  const selectBoxRef = React.useRef(null);
  const [selectGraph, setSelectGraph] = React.useState(false);
  const [selectedGraph, setSelectedGraph] = React.useState("dxy");

  console.log(data.nighost);

  //const breadths = data.nighost.snp_breadths.sort((a, b) => new Date(a.date) > new Date(b.date) ? -1 : 1);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectBoxRef.current && !selectBoxRef.current.contains(event.target)) {
        //console.log("cliked outside");
        setSelectGraph(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectBoxRef]);

  return (
    <Root>
      <div className="w-full h-full bg-gray-200 overflow-y-auto">
        <Helmet>
          <title>Chris Liu - Commodities, Indices and Futures</title>
        </Helmet>
        <div className="w-full h-fit-content md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col mx-auto py-6 md:py-8 px-6 md:px-0">
          <div className="w-full lg:w-1/3 sm:mr-auto flex flex-row justify-center" ref={selectBoxRef}>
            <div className="relative w-inline md:w-md-card lg:w-lg-card xl:w-xl-card">
              <button
                type="button"
                onClick={(e) => setSelectGraph(!selectGraph)}
                className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <span className="block truncate">
                  { graphAbbrMapping.get(selectedGraph) }
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
              <div className={`absolute mt-1 w-full rounded-md bg-white shadow-lg z-40 ${!selectGraph ? "hidden" : ""}`}>
                <ul
                  tabIndex={-1}
                  role="listbox"
                  className="max-h-health-info-select rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                >
                  {
                    ["dxy", "oil", "gold", "silver", "copper"].map((option, optionIndex) => (
                      <li
                        id={`listbox-option-${optionIndex}`}
                        role="option"
                        className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-gray-200"
                        onClick={(e) => { setSelectedGraph(option); setSelectGraph(false); }}
                      >
                        <span className="font-normal block truncate">
                          { graphAbbrMapping.get(option) }
                        </span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
};

export const cifQuery = graphql`
  query cifQuery {
    nighost {
      allDXYRecords {
        date
        price
      }
      allCopperRecords {
        date
        price
      }
      allGoldRecords {
        date
        price
      }
      allSilverRecords {
        date
        price
      }
      allOilRecords {
        date
        price
      }
    }
  }
`;

export default CIFPage;
