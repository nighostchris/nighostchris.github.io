import React from "react";
import { HeatMapGrid } from 'react-grid-heatmap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

import Root from '../../components/stonksviz/Root';
import Footer from '../../components/stonksviz/Footer';

const industryNamesMappingInTrend = new Map([
  ['communication', 'XLC'],
  ['consumer_discretionary', 'XLY'],
  ['consumer_staples', 'XLP'],
  ['energy', 'XLE'],
  ['financials', 'XLF'],
  ['health_care', 'XLV'],
  ['industrials', 'XLI'],
  ['materials', 'XLB'],
  ['real_estate', 'XLRE'],
  ['technology', 'XLK'],
  ['utilities', 'XLU']
]);

const abbreviation = ["XLC - 通訊服務", "XLY - 非必需消費品", "XLP - 必需消費品", "XLE - 能源", "XLF - 金融", "XLV - 醫療", "XLI - 工業", "XLB - 物料", "XLRE - 房地產", "XLK - 科技", "XLU - 公共"];

const StockPage = ({ data }) => {
  let antDesignCharts;
  if (process.browser) {
    antDesignCharts = require('@ant-design/charts');
  }

  const [expanded, setExpanded] = React.useState(false);

  const breadths = data.nighost.snp_breadths.sort((a, b) => new Date(a.date) > new Date(b.date) ? -1 : 1);

  const xLabels = ["XLC", "XLY", "XLP", "XLE", "XLF", "XLV", "XLI", "XLB", "XLRE", "XLK", "XLU", "Total"];
  const yLabels = breadths.map((b) => b.date);

  const yHeatmapData = breadths.map((b) => [
    b.communication,
    b.consumer_discretionary,
    b.consumer_staples,
    b.energy,
    b.financials,
    b.health_care,
    b.industrials,
    b.materials,
    b.real_estate,
    b.technology,
    b.utilities
  ]);

  const heatmapData = yLabels.map((_, index) => [...yHeatmapData[index], yHeatmapData[index].reduce((acc, current) => acc + current)]);

  const marketTrend = yHeatmapData.map((day, index) => ({ date: breadths[index].date, total: day.reduce((acc, current) => acc + current) }));

  const industryTrendData = [].concat(...breadths.map((b) => Object.keys(b).map((industry) => ({
      date: b.date,
      value: b[industry],
      industry: industryNamesMappingInTrend.get(industry)
    }))))
    .filter((record) => record.industry);

  const lastBreadth = Object.keys(breadths[0]).map((industry) => ({
      value: breadths[0][industry],
      industry: industryNamesMappingInTrend.get(industry)
    }))
    .filter((record) => record.industry);

  const calculateHeatmapColor = (ratio) => {
    const red = [250, 87, 87];
    const white = [255, 255, 255];
    const green = [14, 158, 109];

    if (ratio < 0.5) {
      const normalizedRatio = ratio * 2;
      return `rgb(${red[0] + (white[0] - red[0]) * normalizedRatio}, ${red[1] + (white[1] - red[1]) * normalizedRatio}, ${red[2] + (white[2] - red[2]) * normalizedRatio})`
    } else if (ratio > 0.5) {
      const normalizedRatio = (ratio - 0.5) * 2;
      return `rgb(${white[0] - (white[0] - green[0]) * normalizedRatio}, ${white[1] - (white[1] - green[1]) * normalizedRatio}, ${white[2] - (white[2] - green[2]) * normalizedRatio})`
    } else {
      return "rgb(255, 255, 255)";
    }
  }

  return (
    <Root props={{ title: "StonksViz - S&P Breadth" }}>
      <div className="w-full h-fit-content flex flex-col mx-auto pt-6 md:pt-8 items-center">
        <h1 className="text-xl lg:text-3xl font-bold mb-2 w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl px-6 md:px-0">
          What's S&P Breadth ?
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 mb-2 w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl px-6 md:px-0">
          Any S&P constitue that has it's last updated price <strong>{`>`} 20 MA</strong> will get 1 mark.
        </p>
        <p className="text-lg lg:text-xl text-gray-600 mb-4 w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl px-6 md:px-0">
          We will define the market trend as <strong>OVERHEAT</strong> when the sum of marks are {`>`} 900, <strong>OVERSELL</strong> when the sum {`>`} 200
        </p>
        <div className="w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl px-6 md:px-0">
          <div
            className={`flex flex-row justify-between items-center px-4 bg-gray-400 w-full tracking-widest rounded-sm cursor-pointer h-8 ${expanded ? "" : "mb-4 md:mb-8"}`}
            onClick={() => setExpanded(!expanded)}
          >
            <h6 className="text-gray-100">
              Industry Abbreviation
            </h6>
            <FontAwesomeIcon icon={expanded ? faCaretUp : faCaretDown} size="lg" className="text-white" />
          </div>
          <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 py-4 mt-2 rounded-sm bg-gray-300 font-bold ${expanded ? 'block mb-4 md:mb-8' : 'hidden'}`}>
            {
              abbreviation.map((abbr) => (
                <p className="text-center text-gray-700 hover:bg-gray-200 rounded-md">{abbr}</p>
              ))
            }
          </div>
        </div>
        {
          process.browser && (
            <>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-4 px-6 md:px-0 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
                <div className="w-full flex p-4 md:p-6 bg-white rounded-sm shadow-sm flex-col">
                  <p className="text-md md:text-lg mb-4 md:mb-6 mx-auto">
                    Last Trading Day S&P Breadth
                  </p>
                  <antDesignCharts.Bar
                    data={lastBreadth}
                    xField='value'
                    xAxis={{ position: 'right' }}
                    yField='industry'
                    legend={false}
                    color={['#5B8FF9']}
                    label={{
                      style: { textAlign: 'center', fontWeight: 'bold' }
                    }}
                  />
                </div>
                <div className="w-full flex p-4 md:p-6 bg-white rounded-sm shadow-sm flex-col mt-8 md:mt-0">
                  <p className="text-md md:text-lg mb-4 md:mb-6 mx-auto">
                    S&P Breadth Trend
                  </p>
                  <antDesignCharts.Line
                    data={marketTrend}
                    xField='date'
                    yField='total'
                    xAxis={{ type: 'time' }}
                    yAxis={{ maxLimit: 1100 }}
                    annotations={[
                      {
                        type: 'text',
                        position: ['10%', '79%'],
                        content: 'Oversell Threshold',
                        style: {
                          fontWeight: 'bold'
                        }
                      },
                      {
                        type: 'text',
                        position: ['10%', '15%'],
                        content: 'Overheat Threshold',
                        style: {
                          fontWeight: 'bold'
                        }
                      },
                      {
                        type: 'line',
                        start: ['0%', '82%'],
                        end: ['100%', '82%'],
                        style: {
                          stroke: '#F3323A',
                          lineDash: [1, 1],
                          lineWidth: 2
                        },
                      },
                      {
                        type: 'line',
                        start: ['0%', '18%'],
                        end: ['100%', '18%'],
                        style: {
                          stroke: '#149D38',
                          lineDash: [1, 1],
                          lineWidth: 2
                        },
                      }
                    ]}
                  />
                </div>
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-4 md:mt-8 px-6 md:px-0 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mb-6 md:mb-0">
                <div className="w-full flex p-4 md:p-6 bg-white rounded-sm shadow-sm mt-8 md:mt-0 flex-col">
                  <p className="text-md md:text-lg mb-4 md:mb-6 mx-auto">
                    S&P Breadth Trend by Industry
                  </p>
                  <antDesignCharts.Line
                    data={industryTrendData}
                    xField='date'
                    yField='value'
                    seriesField='industry'
                    xAxis={{ type: 'time' }}
                    yAxis={{ tickInterval: 25 }}
                    color={['#0963EF', '#4645F6', '#AB32F1', '#F62575', '#F3323A', '#E6520E', '#C96E06', '#9B7F05', '#149D38', '#0D87BE', '#000000']}
                  />
                </div>
                <div className="w-full flex p-4 md:p-6 bg-white rounded-sm shadow-sm mt-8 md:mt-0 flex-col">
                  <p className="text-md md:text-lg mb-4 md:mb-6 mx-auto">
                    S&P Breadth Heatmap by Industry
                  </p>
                  <antDesignCharts.Heatmap
                    data={industryTrendData}
                    xField='date'
                    yField='industry'
                    colorField='value'
                    color={(v) => calculateHeatmapColor(v / 100)}
                  />
                </div>
              </div>
              <div className="w-full hidden md:flex px-6 py-8 bg-white rounded-sm shadow-sm mt-8 flex-col mb-8 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
                <p className="text-md md:text-lg mb-4 md:mb-6 mx-auto">
                  S&P Breadth Heatmap by Industry (Detailed)
                </p>
                <HeatMapGrid
                  data={heatmapData}
                  xLabels={xLabels}
                  xLabelsStyle={(index) => ({
                    fontSize: '14px',
                    marginLeft: index === 11 && '16px'
                  })}
                  yLabels={yLabels}
                  yLabelsStyle={() => ({
                    fontSize: '14px',
                    marginRight: '16px',
                    textAlign: 'justify'
                  })}
                  cellHeight='36px'
                  cellStyle={(x, y, _ratio) => ({
                    marginLeft: y === 11 && '16px',
                    background: y !== 11 ? calculateHeatmapColor(heatmapData[x][y] / 100) : calculateHeatmapColor(heatmapData[x][y] / 1100)
                  })}
                  cellRender={(x, y, value) => <div title={`Pos(${x}, ${y}) = ${value}`} style={{ fontWeight: 'bold', fontSize: '14px' }}>{value}</div>}
                />
              </div>
            </>
          )
        }
        <Footer
          props={{
            logo: '/stonksviz-logo.svg',
            background: 'bg-gray',
            bottomText: 'text-gray'
          }} 
        />
      </div>
    </Root>
  );
}

export const stockQuery = graphql`
  query stockQuery {
    nighost {
      snp_breadths {
        date
        communication
        consumer_discretionary
        consumer_staples
        energy
        financials
        health_care
        industrials
        materials
        real_estate
        technology
        utilities
      }
    }
  }
`;

export default StockPage;
