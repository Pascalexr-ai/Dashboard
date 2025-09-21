import { NavLink } from "react-router-dom";
import { FaHome, FaChartLine, FaTasks, FaFileAlt } from 'react-icons/fa';
import { motion } from "framer-motion";

const Sidebar = () => (
  <div className="sidebar">
    <h1>Pro Dashboard</h1>
    <ul>
      <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <NavLink to="/"><FaHome /> Dashboard</NavLink>
      </motion.li>
      <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <NavLink to="/analytics"><FaChartLine /> Analytics</NavLink>
      </motion.li>
      <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <NavLink to="/tasks"><FaTasks /> Tasks</NavLink>
      </motion.li>
      <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <NavLink to="/reports"><FaFileAlt /> Reports</NavLink>
      </motion.li>
    </ul>
  </div>
);

export default Sidebar;





