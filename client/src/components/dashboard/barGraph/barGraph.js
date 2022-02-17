import React, { useState } from 'react';
import { Bar } from "@nivo/bar"; 
import "./barGraph.scss";

const BarGraph = () => {

    const [totalincome, setTotalincome] = useState(6600)

    const styles = {
        fontFamily: "sans-serif",
        textAlign: "center"
      };
      
      const data = [
        {
          map: "July",
          savings: 120,
          fixed: 193,
          nonfixed: 120
        },
        {
          map: "Aug",
          savings: 35,
          fixed: 160,
          nonfixed: 120
        },
        {
          map: "Sep",
          savings: 33,
          fixed: 120,
          nonfixed: 120
        },
        {
          map: "Oct",
          savings: 27,
          fixed: 30,
          nonfixed: 120
        },
        {
          map: "Nov",
          savings: 199,
          fixed: 19,
          nonfixed: 120
        },
        {
          map: "Dec",
          savings: 117,
          fixed: 107,
          nonfixed: 120
        },
      ];
      
      const axisBottom = {
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: 32
      };
      
      const axisLeft = {
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Currency ($)",
        legendPosition: "middle",
        legendOffset: -40
      };
      
      const theme = {
        axis: {
          fontSize: "14px",
          tickColor: "#eee",
          ticks: {
            line: {
              stroke: "#555555"
            },
            text: {
              fill: "#000000"
            }
          },
          legend: {
            text: {
              fill: "#aaaaaa"
            }
          }
        },
        grid: {
          line: {
            stroke: "#555555"
          }
        }
      };

      // This is needed for adjusting the dimensions of each bar in the graph. Needed to call "custombarcomponent" in the main return//
      const BAR_MAX_WIDTH = 20;
      
      const CustomBarComponent = ({ bar: { x, y, width, height, color } }) => {
        const w = width > BAR_MAX_WIDTH ? BAR_MAX_WIDTH : width;

        return (
          <rect 
            x={x + width / 2 - w / 2} 
            y={y} 
            width={w} 
            height={height} 
            // rx={Math.min(w, height) / 6} 
            fill={color}
          
            />
        );
      };

      // Required to override default colors in the nivobar
      const colors = { 'nonfixed': '#8342e9'/*purple*/, 'fixed': '#fba9d3'/*pink*/, 'savings': '#febd30'/*orange*/ }
      const getColor = bar => colors[bar.id]
      


      const colorBy = ({ id }) => (id === "nonfixed" ? "#FBA9D3" : id === "fixed" ? "#8342E9" : "#FEBD30");
      
      const legends = [
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          itemTextColor: "#000000",
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1
              }
            }
          ]
        }
      ];
      
  return (
    <div className='incomeexpenses'>
        <h5>Income / Expenses</h5>
        <div className="incomeexpenses_styles" style={styles}>
            <Bar
                width={600}
                height={400}
                margin={{ top: 60, right: 120, bottom: 60, left: 80 }}
                data={data}
                keys={["nonfixed", "fixed", "savings"]}
                indexBy="map"
                labelTextColor="inherit:darker(2.4)"
                labelSkipWidth={12}
                labelSkipHeight={12}
                enableGridX={false}
                axisBottom={axisBottom}
                axisLeft={axisLeft}
                colorBy={colorBy}
                theme={theme}
                legends={legends}
                barComponent={CustomBarComponent} /* needed for individual bar properties */
                colors={getColor} /*needed for bargraph color override*/
            />
            
        </div>
    </div>
  );
};

export default BarGraph;
