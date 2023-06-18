import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker/locale/en';
import moment from 'moment';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);




const LineСhartComponent = ({data}:any) => {
  const options = {
    responsive: true,
    scales: {
      x: {
        display: false
      }
    },
    plugins: {
      legend: {
        display:true,
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Bitcoin',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const values = {
    labels: data[0].data.map((el:any) => moment(el[0]).format('DD.MM')),
    datasets: [
      {
        label: data[0].name[0].toUpperCase() + data[0].name.slice(1).toLowerCase(),
        data: data[0].data.map((el:any) => el[1]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return <Line options={options} data={values} width='100%' height='20%' />;
}


export default LineСhartComponent