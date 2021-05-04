import React from "react";

const NotifBar = ({ className, type, text }) => {
  return <div className={`notif ${type} ${className}`}>{text}</div>;
};

export default NotifBar;
