import { useDispatch } from "react-redux";
import { setStep } from "../redux/slice/stepSlice";

export default function Homescreen() {
  const dispatch = useDispatch();
  return (
    <section className="homescreen-container">
      <h1>Enter into Student Info System</h1>
      <button onClick={() => dispatch(setStep(2))}>Enroll Now!</button>
    </section>
  );
}
