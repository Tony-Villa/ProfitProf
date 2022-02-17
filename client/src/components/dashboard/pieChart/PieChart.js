import React from 'react';
import { ResponsivePie } from "@nivo/pie";

const PieChart = (props) => {
    if(props.data[0]?.id){
      console.log(props.data[0].description);
    }
    else {
      console.log("No data");
    }

  //==========================
  const margin = { top: 20, right: 150, bottom: 20, left: 20 };

  const styles = {
    root: {
      fontFamily: "consolas, sans-serif",
      textAlign: "center",
      position: "relative",
      width: 300,
      height: 300
    },
    overlay: {
      position: "absolute",
      top: 0,
      right: margin.right,
      bottom: 0,
      left: margin.left,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 96,
      color: "#FFFFFF",
      // background: "#FFFFFF33",
      textAlign: "center",
      // This is important to preserve the chart interactivity
      pointerEvents: "none"
    },
    totalLabel: {
      fontSize: 24
    }
  };
  // if(props.data[0]?.id){
  //   const data1 = props.data.map((description, expense_type, value) => 
  //     {
  //       return {
  //         id: description,
  //         label: expense_type,
  //         value: value,
  //       }
  //     }
  //   );
  //   console.log(data1);
  // }
  const data = [
    {
      id: "Work",
      label: "Work",
      value: 120
    },
    {
      id: "Eat",
      label: "Eat",
      value: 35
    },
    {
      id: "Commute",
      label: "Commute",
      value: 33
    },
    {
      id: "Watch TV",
      label: "Watch TV",
      value: 27
    },
    {
      id: "Sleep",
      label: "Sleep",
      value: 199
    }
  ];
  
  const theme = {
    background: "#222222",
    axis: {
      fontSize: "14px",
      tickColor: "#eee",
      ticks: {
        line: {
          stroke: "#555555"
        },
        text: {
          fill: "#black"
        }
      },
      legend: {
        text: {
          fill: "#black"
        }
      }
    },
    grid: {
      line: {
        stroke: "#555555"
      }
    }
  };
  
  const legends = [
    {
      anchor: "right",
      direction: "column",
      justify: false,
      translateX: 140,
      translateY: 0,
      itemsSpacing: 2,
      itemWidth: 100,
      itemHeight: 20,
      itemDirection: "left-to-right",
      itemOpacity: 0.85,
      itemTextColor: "#ffffff",
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
    <div>
      <h5>Fixed Expenses</h5>
      <div style={styles.root}>
        <ResponsivePie
          margin={margin}
          data={data}
          innerRadius={0.5}
          enableRadialLabels={false}
          enableSlicesLabels={false}
          theme={theme}
          legends={legends}
        />
      </div>
    </div>
  );
};

export default PieChart;
