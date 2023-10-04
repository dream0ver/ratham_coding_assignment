import { createChatBotMessage } from "react-chatbot-kit";
import CalendarStrip from "./components/calendar-strip/CalendarStrip";
const config = {
  initialMessages: [
    createChatBotMessage("Hello, Welcome to student info system!", {
      widget: "gotIt",
    }),
  ],
  widgets: [
    {
      widgetName: "gotIt",
      widgetFunc: ({ actions }) => {
        return (
          <button
            className="option-button"
            style={{ marginLeft: "50px" }}
            onClick={actions.handleGotIt}
          >
            Got it.
          </button>
        );
      },
    },
    {
      widgetName: "calendarStrip",
      widgetFunc: (props) => {
        return <CalendarStrip {...props} />;
      },
    },
  ],
};

export default config;
