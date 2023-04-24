import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import React, { ChangeEvent, useState } from "react";
import { UserType } from "../../core/types/usersType";
const Status = (props: UserType) => {
  const { _id, status } = props;
  const [currStatus, setCurrStatus] = useState(status);
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    setCurrStatus(newStatus);
    const id = _id;
    const serviceStatus = { id: id, status: newStatus };
    fetch(`https://asg-11-creative-agency-server.vercel.app/updateStatus/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(serviceStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const setStyle = (cStatus: string) => {
    let colors;
    if (cStatus == "Pending") {
      colors = "red";
    }
    if (cStatus == "On going") {
      colors = "#FFBD3E";
    }
    if (cStatus == "Done") {
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

    return statusUpdate;
  };
  return (
    <select value={currStatus} onChange={handleChange} style={setStyle(currStatus)}>
      <option value="Pending">Pending</option>
      <option value="On going">On going</option>
      <option value="Done">Done</option>
    </select>
  );
};

export default Status;
