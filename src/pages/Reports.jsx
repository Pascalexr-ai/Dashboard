import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Reports = () => (
  <div>
    <Sidebar />
    <div className="main-content">
      
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
        <h2>Reports</h2>
        <div className="cards">
          <motion.div className="card" style={{background:'linear-gradient(135deg,#f093fb,#f5576c)'}} whileHover={{scale:1.05}}>
            <h3>Monthly Report</h3>
            <p>PDF Available</p>
          </motion.div>
          <motion.div className="card" style={{background:'linear-gradient(135deg,#42e695,#3bb2b8)'}} whileHover={{scale:1.05}}>
            <h3>Weekly Report</h3>
            <p>Excel Download</p>
          </motion.div>
          <motion.div className="card" style={{background:'linear-gradient(135deg,#ff9a9e,#fad0c4)'}} whileHover={{scale:1.05}}>
            <h3>User Activity</h3>
            <p>Graph Available</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default Reports;
