import { useSelector } from "react-redux";

export default function Confirmation() {
  const userInfo = useSelector((state) => state.userInfo);
  return (
    <section className="confirmation-container">
      <h1>
        Your name <strong>{userInfo.name}</strong> aged{" "}
        <strong>{userInfo.age}</strong> has been added to student system. You
        may now exit.
      </h1>
    </section>
  );
}
