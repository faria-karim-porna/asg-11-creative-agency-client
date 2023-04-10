import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
const Status = ({ user }) => {
  let status = user.status;
  const handlechange = (e) => {
    status = e.target.value;
    const id = user._id;
    const serviceStatus = { id, status };
    fetch(`https://asg-11-creative-agency-server-production.up.railway.app/updateStatus/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(serviceStatus),
    }).then((res) => res.json());
  };
  let colors;

  if (status == "Pending") {
    colors = "red";
  }
  if (status == "On going") {
    colors = "#FFBD3E";
  }
  if (status == "Done") {
    colors = "green";
  }
  const statusUpdate = {
    color: colors,
    border: "none",
    webkitAppearance: "none",
    mozAppearance: "none",
    background: "url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right white",
    width: "90px",
    fontWeight: "600",
  };
  return (
    <select value={status} onChange={handlechange} style={statusUpdate}>
      <option value="Pending">Pending</option>
      <option value="On going">On going</option>
      <option value="Done">Done</option>
    </select>
  );
};

export default Status;
