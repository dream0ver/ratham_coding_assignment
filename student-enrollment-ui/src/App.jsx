import { useSelector } from "react-redux";
import Chatbot from "./components/Chatbot/Chatbot";
import Confirmation from "./components/Confirmation";
import Homescreen from "./components/Homescreen";
function App() {
  const currentStep = useSelector((state) => state.currentStep);
  return (
    <section className="app-container">
      {currentStep == 1 && <Homescreen />}
      {currentStep == 2 && <Chatbot />}
      {currentStep == 3 && <Confirmation />}
    </section>
  );
}

export default App;
