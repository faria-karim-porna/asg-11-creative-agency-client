import React, { useEffect, useState } from "react";
import Status from "../Status/Status";
import "./DataTableComponent.css";
import { UserType } from "../../core/types/usersType";
const DataTableComponent = () => {
  const [allUserInfo, setAllUserInfo] = useState([]);
  useEffect(() => {
    fetch("https://asg-11-creative-agency-server-production.up.railway.app/allUsers")
      .then((res) => res.json())
      .then((data) => setAllUserInfo(data.allUsers));
  }, []);

  return (
    <table className="table table-borderless table-component ml-auto mr-auto">
      <thead>
        <tr>
          <th className="text-secondary text-left first-component" scope="col">
            Name
          </th>
          <th className="text-secondary" scope="col">
            Email ID
          </th>
          <th className="text-secondary" scope="col">
            Service
          </th>
          <th className="text-secondary" scope="col">
            Project Details
          </th>
          <th className="text-secondary last-component" scope="col">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {allUserInfo.map((user: UserType) => (
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.serviceName}</td>
            <td>{user.projectDetails}</td>
            <td>
              {
                <Status
                  _id={user._id}
                  name={user.name}
                  email={user.email}
                  serviceName={user.serviceName}
                  image={user.image}
                  projectDetails={user.projectDetails}
                  price={user.price}
                  status={user.status}
                ></Status>
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTableComponent;
