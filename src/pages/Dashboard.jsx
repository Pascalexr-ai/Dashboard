import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import AnimatedCard from "../components/AnimatedCard";
import ChartComponent from "../components/ChartComponent";
import DataTable from "../components/DataTable";
import { motion } from "framer-motion";

const Dashboard = () => {
  const cardData = [
    { title: "Total Tasks", value: "12" },
    { title: "Completed", value: "8" },
    { title: "Pending", value: "4" },
  ];

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflowX: "hidden" }}>
      
      {/* SVG WAVE BACKGROUND */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "40vh",
          zIndex: -2,
        }}
      >
        <defs>
          <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6a11cb" />
            <stop offset="100%" stopColor="#2575fc" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient1)"
          fillOpacity="1"
          d="M0,96L80,106.7C160,117,320,139,480,138.7C640,139,800,117,960,112C1120,107,1280,117,1360,122.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
      </svg>

      {/* FLOATING BLOBS */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      <Sidebar />
      <div className="main-content">


        <motion.div
          className="cards"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {cardData.map((card, index) => (
            <AnimatedCard
              key={index}
              title={card.title}
              value={card.value}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <ChartComponent />
          <DataTable />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;





