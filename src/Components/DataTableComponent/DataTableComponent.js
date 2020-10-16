import React, { useEffect, useState } from 'react';
import Status from '../Status/Status';
import './DataTableComponent.css';
const DataTableComponent = () => {

    const [allUserInfo, setAllUserInfo] = useState([]);
    useEffect(() => {
        fetch('https://boiling-eyrie-70521.herokuapp.com/allUsers')
        .then(res => res.json())
        .then(data => setAllUserInfo(data))
    },[allUserInfo]);

    return (
        <table className="table table-borderless table-component ml-auto mr-auto">
            <thead>
                <tr>
                <th className="text-secondary text-left first-component" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email ID</th>
                <th className="text-secondary" scope="col">Service</th>
                <th className="text-secondary" scope="col">Project Details</th>
                <th className="text-secondary last-component" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>   
            {
                  allUserInfo.map((user) => 
                        
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.serviceName}</td>
                        <td>{user.projectDetails}</td>
                        <td>
         {
             <Status user = {user}></Status>
         }
        </td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default DataTableComponent;