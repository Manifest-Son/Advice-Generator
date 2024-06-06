import { useState, useEffect } from "react";
import DotLoader from "react-spinners/DotLoader";
import "./Advice.css";

const Advice = () => {
  const [advice, setAdvice] = useState("");
  const [loading, setloading] = useState(true);
  const fetchData = async () => {
    setloading(true);

    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();

      console.log(data.slip.advice);
      setAdvice(data.slip.advice);
    } catch (error) {
      console.log("error");
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    fetchData;
  }, []);

  return (
    <div className="advice-container">
      <header className="advice-title">
        <h1 className="header__title">Click the Button for Random Advice</h1>
      </header>
      <button onClick={fetchData} className="advice-btn">
        Get Advice
      </button>

      {loading ? (
        <DotLoader color="#36d7b7" />
      ) : (
        <h1 className="advice-txt">{advice}</h1>
      )}
    </div>
  );
};

export default Advice;
