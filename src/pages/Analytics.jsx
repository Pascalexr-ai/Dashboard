import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Line } from 'react-chartjs-2';
import { motion } from "framer-motion";
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const data = {
  labels: ['Jan','Feb','Mar','Apr','May','Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [1200, 1900, 1700, 2200, 2600, 3000],
      borderColor: '#ff9a9e',
      backgroundColor: 'rgba(255,154,158,0.2)',
      tension: 0.4
    },
    {
      label: 'Users',
      data: [200, 400, 350, 500, 600, 700],
      borderColor: '#42e695',
      backgroundColor: 'rgba(66,230,149,0.2)',
      tension: 0.4
    }
  ]
};

const Analytics = () => (
  <div>
    <Sidebar />
    <div className="main-content">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Analytics Overview</h2>
        <div className="cards">
          <motion.div className="card" style={{background:'linear-gradient(135deg,#42e695,#3bb2b8)'}} whileHover={{scale:1.05}}>
            <h3>Total Revenue</h3>
            <p style={{fontSize:'24px', fontWeight:'bold'}}>$12,400</p>
          </motion.div>
          <motion.div className="card" style={{background:'linear-gradient(135deg,#f093fb,#f5576c)'}} whileHover={{scale:1.05}}>
            <h3>Active Users</h3>
            <p style={{fontSize:'24px', fontWeight:'bold'}}>1,230</p>
          </motion.div>
          <motion.div className="card" style={{background:'linear-gradient(135deg,#ff9a9e,#fad0c4)'}} whileHover={{scale:1.05}}>
            <h3>New Signups</h3>
            <p style={{fontSize:'24px', fontWeight:'bold'}}>450</p>
          </motion.div>
        </div>
        <div className="chart-container">
          <Line data={data} />
        </div>
      </motion.div>
    </div>
  </div>
);

export default Analytics;
