import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const data = {
  labels: ['Jan','Feb','Mar','Apr','May','Jun'],
  datasets: [{
    label: 'Revenue',
    data: [1200, 1900, 1700, 2200, 2600, 3000],
    borderColor: '#2575fc',
    backgroundColor: 'rgba(37, 117, 252, 0.2)',
    tension: 0.4
  }]
};

const ChartComponent = () => (
  <div className="chart-container">
    <h3>Revenue Overview</h3>
    <Line data={data} />
  </div>
);

export default ChartComponent;


