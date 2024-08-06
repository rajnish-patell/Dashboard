import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';

const CircularProgressChart = () => {
  const theme = useTheme();
  const isLightTheme = theme.palette.mode === 'light';

  const options = {
    chart: {
      type: 'radialBar',
      offsetY: 0,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '50%',
        },
        dataLabels: {
          name: {
            show: true,
            fontSize: '8px',
            fontWeight: 600,
            color: isLightTheme ? "#000000" : "#ffffff",
            offsetY: 15,
            formatter: function () {
              return 'Goal Completed';
            },
          },
          value: {
            show: true,
            formatter: function (val) {
              return `${val}%`;
            },
            fontSize: '16px',
            fontWeight: 600,
            color: isLightTheme ? "#000000" : "#ffffff",
            offsetY: -15,
          },
        },
        track: {
          background: isLightTheme ? theme.palette.grey[200] : theme.palette.grey[600], // Track color based on theme
        },
      },
    },
    fill: {
      colors: ['#3b5eff'], 
    },
    stroke: {
      lineCap: 'round',
    },
  };

  const series = [70];

  return (
    <div style={{ position: 'relative' }}>
      <Chart options={options} series={series} type="radialBar" height={140} />
      <p style={{ color: theme.palette.text.primary,position: 'absolute',bottom: '-5px',margin: '0px',fontSize: '10px',textAlign: 'center',left: "50%",transform: 'translateX(-50%)',width: '100%'}}>
        *The values here have been rounded off.
      </p>
    </div>
  );
};

export default CircularProgressChart;
