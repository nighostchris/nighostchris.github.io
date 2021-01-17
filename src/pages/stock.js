import React from "react";
import { Helmet } from "react-helmet";
import { HeatMapGrid } from 'react-grid-heatmap';

const StockPage = ({ data }) => {
  const breadths = data.nighost.snp_breadths.sort((a, b) => new Date(a.date) > new Date(b.date) ? -1 : 1);
  
  //XLC (通訊服務)", "XLY (非切需消費品)", "XLP (必需消費品)", "XLE (能源)", "XLF (金融)", "XLV (醫療)", "XLI (工業)", "XLB (物料)", "XLRE (房地產)", "XLK (科技)", "XLU (公共)
  const xLabels = ["XLC", "XLY", "XLP", "XLE", "XLF", "XLV", "XLI", "XLB", "XLRE", "XLK", "XLU"];
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

  const heatmapData = yLabels.map((_, index) => yHeatmapData[index]);
  const summedHeatmapData = yLabels.map((_, index) => [yHeatmapData[index].reduce((acc, current) => acc + current)]);

  console.log(summedHeatmapData);

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
    <div className="w-full h-full bg-gray-400">
      <Helmet>
        <title>Chris Liu - US Stock Market</title>
      </Helmet>
      <div className="w-full h-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col mx-auto">
        <div className="w-full hidden md:block px-6 py-8 bg-gray-200 rounded-sm shadow-sm mt-8">
          <HeatMapGrid
            data={heatmapData}
            xLabels={xLabels}
            xLabelsStyle={() => ({
              fontSize: '14px'
            })}
            yLabels={yLabels}
            yLabelsStyle={() => ({
              fontSize: '14px',
              marginRight: '16px',
              textAlign: 'justify'
            })}
            cellHeight='48px'
            cellStyle={(x, y, _ratio) => ({
              background: calculateHeatmapColor(heatmapData[x][y] / 100)
            })}
            cellRender={(x, y, value) => <div title={`Pos(${x}, ${y}) = ${value}`} style={{ fontWeight: 'bold', fontSize: '16px' }}>{value}</div>}
          />
        </div>
      </div>
    </div>
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
