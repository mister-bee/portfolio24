import { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <motion.h1
        style={{ fontSize: "7em" }}
        whileHover={{ scale: 1.25 }}
        onHoverEnd={() => { }}
      >
        💻
      </motion.h1>
      <h1>adam boettcher</h1>
      <h2>gpts</h2>
      <h2>apps</h2>
      <br />
      <br />
      <br />
      <h3>baboettcher@gmail.com</h3>
    </>
  );
}

export default App;
