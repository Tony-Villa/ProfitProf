import React, { useEffect, useState } from 'react';
import { ResponsivePie } from '@nivo/pie';
import './PieChart.scss';

const PieChart = (props) => {
  const [chartData, setChartData] = useState([]);

  //==========================
  const margin = { top: 20, right: 150, bottom: 20, left: 50 };

  const styles = {
    root: {
      fontFamily: 'consolas, sans-serif',
      textAlign: 'center',
      position: 'relative',
      width: 400,
      height: 250,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      right: margin.right,
      bottom: 0,
      left: margin.left,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 96,
      color: '#FFFFFF',
      // background: "#FFFFFF33",
      textAlign: 'center',
      // This is important to preserve the chart interactivity
      pointerEvents: 'none',
    },
    totalLabel: {
      fontSize: 24,
    },
  };

  const theme = {
    axis: {
      fontSize: '14px',
      tickColor: '#eee',
      ticks: {
        line: {
          stroke: '#555555',
        },
        text: {
          fill: '#black',
        },
      },
      legend: {
        text: {
          fill: '#black',
        },
      },
    },
    grid: {
      line: {
        stroke: '#555555',
      },
    },
  };

  const legends = [
    {
      anchor: 'right',
      direction: 'column',
      justify: false,
      translateX: 140,
      translateY: 0,
      itemsSpacing: 2,
      itemWidth: 100,
      itemHeight: 20,
      itemDirection: 'left-to-right',
      itemOpacity: 0.85,

      itemTextColor: '#black',

      symbolSize: 20,
      effects: [
        {
          on: 'hover',
          style: {
            itemOpacity: 1,
          },
        },
      ],
    },
  ];

  useEffect(() => {
    if (props.data[0]?.value > 0) {
      const data = props.data.map((data) => {
        const container = {};

        container.id = data.expense_subtype;
        container.label = data.expense_subtype;
        container.value = data.value;

        return container;
      });
      setChartData(data);
    }
  }, [props]);

  return (
    <div className="pie-chart">
      <h5>Fixed Expenses</h5>
      <div className="pie-chart__chart" style={styles.root}>
        <ResponsivePie
          margin={margin}
          data={chartData}
          innerRadius={0.5}
          enableRadialLabels={false}
          enableSlicesLabels={false}
          colors={['#8342e9', '#febd30']}
          legends={legends}
          enableArcLinkLabels={false}
        />
      </div>
    </div>
  );
};

export default PieChart;
