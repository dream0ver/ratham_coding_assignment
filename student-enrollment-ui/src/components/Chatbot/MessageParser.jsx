import React from "react";

const MessageParser = ({ children, actions, ...rest }) => {
  const parse = (message) => actions.handleParse(message);
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
