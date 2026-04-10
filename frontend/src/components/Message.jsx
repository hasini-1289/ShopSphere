import React from "react";

const Message = ({ variant, children }) => {
  const messageClass =
    variant === "danger" ? "message-box-danger" : "message-box-info";
  return <div className={`message-box ${messageClass}`}>{children}</div>;
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
