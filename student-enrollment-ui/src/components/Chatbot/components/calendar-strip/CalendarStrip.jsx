import { useState } from "react";
import styles from "./CalendarStrip.module.scss";
const CalendarStrip = ({ actions }) => {
  const [slot, setSlot] = useState("");
  const generateDates = () => {
    const today = new Date();
    const dates = [];
    for (let i = 0; i <= 7; i++) {
      dates.push(today.toDateString());
      today.setDate(today.getDate() + 1);
    }
    return dates;
  };
  const timeOptions = [
    {
      option: "Morning",
      values: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 AM"],
    },
    {
      option: "Noon",
      values: ["02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"],
    },
    {
      option: "Evening",
      values: ["07:00 PM", "08:00 PM"],
    },
  ];

  const handleTime = (time) => {
    const splitted = slot.split(" ");
    actions.handleDatePick(
      `${splitted[2]} ${splitted[1]}, ${splitted[0]} ${time}`
    );
  };
  return (
    <>
      <ul className={styles.date_strip}>
        {generateDates().map((d) => {
          const arr = d.split(" ");
          return (
            <li
              key={d}
              onClick={() => setSlot(d)}
              className={slot == d ? styles.selected : null}
            >
              <span>{`${arr[2]} ${arr[1]}`}</span>
              <span>{arr[0]}</span>
            </li>
          );
        })}
      </ul>
      {slot && (
        <ul className={styles.time_strip}>
          {timeOptions.map((i) => (
            <div key={i.option}>
              <span>{i.option}</span>
              <div>
                {i.values.map((j) => (
                  <div key={j} onClick={() => handleTime(j)}>
                    {j}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </ul>
      )}
    </>
  );
};
export default CalendarStrip;
