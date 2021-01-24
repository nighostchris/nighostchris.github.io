import React from "react";
import * as moment from 'moment';

import Root from '../../components/stonksviz/Root';
import Footer from '../../components/stonksviz/Footer';
import Select from "../../components/stonksviz/general/Select";

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
  const selectStartYearRef = React.useRef(null);
  const selectEndYearRef = React.useRef(null);
  const selectStartMonthRef = React.useRef(null);
  const selectEndMonthRef = React.useRef(null);

  const [selectGraph, setSelectGraph] = React.useState(false);
  const [openStartYear, setOpenStartYear] = React.useState(false);
  const [openStartMonth, setOpenStartMonth] = React.useState(false);
  const [openEndYear, setOpenEndYear] = React.useState(false);
  const [openEndMonth, setOpenEndMonth] = React.useState(false);

  const [selectedGraph, setSelectedGraph] = React.useState("dxy");
  const [selectedStartYear, setSelectedStartYear] = React.useState(2020);
  const [selectedEndYear, setSelectedEndYear] = React.useState(moment().year());
  const [selectedStartMonth, setSelectedStartMonth] = React.useState(1);
  const [selectedEndMonth, setSelectedEndMonth] = React.useState(moment(data.nighost.allDXYRecords[0].date).month() + 1);

  const cifData = () => {
    let reversedData = {};

    Object.keys(data.nighost).forEach((key) => {
      reversedData[key] = data.nighost[key]
        .map((record) => ({ date: moment(record.date).format('YYYY-MM-DD'), value: record.price }))
        .filter((record) => {
          if (moment(record.date).diff(moment().year(selectedStartYear).month(selectedStartMonth - 1).date(1)) >= 0 && moment(record.date).diff(moment().year(selectedEndYear).month(selectedEndMonth - 1).date(30)) <= 0) {
            return true;
          } else {
            return false;
          }
        })
        .sort((a, b) => moment(a.date).diff(moment(b.date)) > 0 ? 1 : -1);
    });
    
    return new Map([
      ['dxy', reversedData.allDXYRecords],
      ['oil', reversedData.allOilRecords],
      ['gold', reversedData.allGoldRecords],
      ['silver', reversedData.allSilverRecords],
      ['copper', reversedData.allCopperRecords]
    ]);
  };

  const cifDataMin = new Map([
    ['dxy', Math.min(...data.nighost.allDXYRecords.map((record) => record.price))],
    ['oil', Math.min(...data.nighost.allOilRecords.map((record) => record.price))],
    ['gold', Math.min(...data.nighost.allGoldRecords.map((record) => record.price))],
    ['silver', Math.min(...data.nighost.allSilverRecords.map((record) => record.price))],
    ['copper', Math.min(...data.nighost.allCopperRecords.map((record) => record.price))]
  ]);

  const oilGoldRatio = data.nighost.allOilRecords
    .map((r) => ({ date: r.date, value: r.price / data.nighost.allGoldRecords.filter((rec) => rec.date === r.date)[0].price }))
    .sort((a, b) => moment(a.date).diff(moment(b.date)) > 0 ? 1 : -1);

  const copperGoldRatio = data.nighost.allCopperRecords
    .map((r) => ({ date: r.date, value: r.price / data.nighost.allGoldRecords.filter((rec) => rec.date === r.date)[0].price }))
    .sort((a, b) => moment(a.date).diff(moment(b.date)) > 0 ? 1 : -1);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectBoxRef.current && !selectBoxRef.current.contains(event.target)) { setSelectGraph(false); }
      if (selectStartYearRef.current && !selectStartYearRef.current.contains(event.target)) { setOpenStartYear(false); }
      if (selectStartMonthRef.current && !selectStartMonthRef.current.contains(event.target)) { setOpenStartMonth(false); }
      if (selectEndYearRef.current && !selectEndYearRef.current.contains(event.target)) { setOpenEndYear(false); }
      if (selectEndMonthRef.current && !selectEndMonthRef.current.contains(event.target)) { setOpenEndMonth(false); }
    }

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectBoxRef, selectStartYearRef, selectStartMonthRef, selectEndYearRef, selectEndMonthRef]);

  return (
    <Root props={{ title: "StonksViz - Commodities, Indices and Futures" }}>
      <div className="w-full h-fit-content flex flex-col items-center mx-auto pt-6 md:pt-8">
        {
          process.browser && (
            <>
              <div className="grid grid-cols-1 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl px-6 md:px-0 w-full">
                <div className="w-full flex flex-col p-4 md:p-6 bg-white rounded-sm shadow-sm">
                  <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <Select
                      props={{
                        ref: selectBoxRef,
                        title: "Data Source",
                        open: selectGraph,
                        setOpen: setSelectGraph,
                        selected: selectedGraph,
                        setSelected: setSelectedGraph,
                        options: ["dxy", "oil", "gold", "silver", "copper"],
                        abbrMapping: graphAbbrMapping
                      }}
                    />
                    <div className="grid grid-cols-2 gap-4 items-end">
                      <Select
                        props={{
                          ref: selectStartYearRef,
                          title: "Start",
                          open: openStartYear,
                          setOpen: setOpenStartYear,
                          selected: selectedStartYear,
                          setSelected: setSelectedStartYear,
                          options: ["2020", "2021"],
                        }}
                      />
                      <Select
                        props={{
                          ref: selectStartMonthRef,
                          open: openStartMonth,
                          setOpen: setOpenStartMonth,
                          selected: selectedStartMonth,
                          setSelected: setSelectedStartMonth,
                          options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                        }}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4 items-end">
                      <Select
                        props={{
                          ref: selectEndYearRef,
                          title: "End",
                          open: openEndYear,
                          setOpen: setOpenEndYear,
                          selected: selectedEndYear,
                          setSelected: setSelectedEndYear,
                          options: ["2020", "2021"],
                        }}
                      />
                      <Select
                        props={{
                          ref: selectEndMonthRef,
                          open: openEndMonth,
                          setOpen: setOpenEndMonth,
                          selected: selectedEndMonth,
                          setSelected: setSelectedEndMonth,
                          options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                        }}
                      />
                    </div>
                  </div>
                  <p className="text-md md:text-lg mb-6 mx-auto">
                    {`${graphAbbrMapping.get(selectedGraph)} Trend`}
                  </p>
                  <antDesignCharts.Line
                    data={cifData().get(selectedGraph)}
                    xField='date'
                    yField='value'
                    yAxis={{ min: cifDataMin.get(selectedGraph) }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl px-6 md:px-0 w-full">
                <div className="w-full flex flex-col p-4 md:p-6 bg-white rounded-sm shadow-sm mt-8">
                  <p className="text-md md:text-lg mb-6 mx-auto">
                    Oil-Gold Ratio
                  </p>
                  <antDesignCharts.Line
                    data={oilGoldRatio}
                    xField='date'
                    yField='value'
                    color={'#F3323A'}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mb-6 md:mb-8 px-6 md:px-0 w-full">
                <div className="w-full flex flex-col p-4 md:p-6 bg-white rounded-sm shadow-sm mt-8">
                  <p className="text-md md:text-lg mb-6 mx-auto">
                    Copper-Gold Ratio
                  </p>
                  <antDesignCharts.Line
                    data={copperGoldRatio}
                    xField='date'
                    yField='value'
                    color={'#0963EF'}
                  />
                </div>
              </div>
              <Footer
                props={{
                  logo: '/stonksviz-logo.svg',
                  background: 'bg-gray',
                  bottomText: 'text-gray'
                }} 
              />
            </>
          )
        }
      </div>
    </Root>
  );
};

{/* <div class="flex flex-row justify-end items-end">
  <button type="submit" class="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-indigo-500 hover:text-indigo-600 bg-indigo-100 hover:bg-indigo-200 focus:outline-none">
    Apply
  </button>
</div> */}

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
