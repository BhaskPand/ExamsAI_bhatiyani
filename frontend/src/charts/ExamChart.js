import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExamChart = () => {
  const data = {
    labels: ['UPSC', 'NEET', 'JEE', 'SSC', 'Bank PO'],
    datasets: [
      {
        label: 'Applicants (in millions)',
        data: [1.1, 1.6, 2.4, 3.2, 2.0],
        backgroundColor: 'rgba(63, 81, 181, 0.6)',
        borderColor: 'rgba(63, 81, 181, 1)',
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Exam Popularity' }
    }
  };

  return <Bar data={data} options={options} />;
};

export default ExamChart;