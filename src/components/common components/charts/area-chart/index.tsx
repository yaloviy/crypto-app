import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ScriptableContext,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


import moment from 'moment'
import { IAreaChartProps } from '../../../../common/types/assets';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    x: {
        display: false
    },
    y: {
        display: false
    }
  },
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};




const AreaChartComponent = (props:IAreaChartProps) => {
  const { data } = props
  const values = {
    labels: data.map((el:number[]) => moment(el[0]).format('DD.MM.YY')),
    datasets: [
      {
        label: 'Цена',
        fill: true,
        
        data: data.map((element: number[]) => element[1]),
        backgroundColor: (context: ScriptableContext<'line'>) => {
              const ctx= context.chart.ctx
              const gradient = ctx.createLinearGradient(0,0,0,180)
              gradient.addColorStop(0, '#C1EF00')
              gradient.addColorStop(1, '#232323')
              return gradient
        }
      },
    ],
  };

  return <Line options={options} data={values} />;
}


export default AreaChartComponent;
