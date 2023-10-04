import React from "react";
import { createClientMessage } from "react-chatbot-kit";
import { useDispatch } from "react-redux";
import { setStep } from "../../redux/slice/stepSlice";
import { setName, setAge } from "../../redux/slice/userSlice";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const dispatch = useDispatch();
  const clearWidgets = (messages) =>
    messages.map((i) => ({
      id: i.id,
      message: i.message,
      type: i.type,
    }));

  const handleGotIt = () => {
    const clientMessage = createClientMessage("Got it");
    const botMessage = createChatBotMessage("Pick a slot", {
      widget: "calendarStrip",
    });
    setState((prev) => ({
      ...prev,
      messages: [...clearWidgets(prev.messages), clientMessage, botMessage],
    }));
  };

  const handleDatePick = (date) => {
    const clientMessage = createClientMessage(date);
    const botMessage = createChatBotMessage("Enter your name");
    setState((prev) => ({
      ...prev,
      messages: [...clearWidgets(prev.messages), clientMessage, botMessage],
    }));
  };

  const handleName = (name) => {
    dispatch(setName({ name }));
    const botMessage = createChatBotMessage("Enter your age");
    setState((prev) => ({
      ...prev,
      messages: [...clearWidgets(prev.messages), botMessage],
    }));
  };

  const handleAge = (age) => {
    dispatch(setAge({ age }));
    const botMessage = createChatBotMessage(
      "Thank you. In 5 seconds, bot will exit"
    );
    setState((prev) => ({
      ...prev,
      messages: [...clearWidgets(prev.messages), botMessage],
    }));
    setTimeout(() => dispatch(setStep(3)), 5000);
  };

  const handleParse = (message) => {
    const messages = children.props.children.props.state.messages;
    if (messages[messages.length - 1].message == "Enter your name")
      handleName(message);
    if (messages[messages.length - 1].message == "Enter your age")
      handleAge(message);
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGotIt,
            handleDatePick,
            handleParse,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
