import React, { useState } from 'react';
import SideNav from '../SideNav/SideNav';
import cloud from '../../images/icons/cloud-upload-outline 1.png';
import './AddService.css';

const AddService = () => {
    const name = localStorage.getItem("name");
    const [service, setService] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newService = { ...service };
        newService[e.target.name] = e.target.value;
        setService(newService);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('serviceTitle', service.serviceTitle);
        formData.append('serviceDescription', service.serviceDescription);

        fetch('https://asg-11-creative-agency-server-production.up.railway.app/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
            e.preventdefault();
    }
    return (
        <body>
        <SideNav></SideNav>
        <p className = "pageName">Add Service <span className = "username">{name}</span></p>
        <form onSubmit={handleSubmit}>
        <div className = "mainArea">
        <div className = "form-design justify-content-center">
        <div className = "row form-area">
                    <div className = "col-md-6">
                        <p className = "form-label">Service Title</p>
                        <input type = "text" placeholder="Enter Title" name = "serviceTitle" className = "input-add-services" onBlur={handleBlur}></input>
                    </div>
                    <div className = "col-md-6 upload-button-class col-sm-12">
                        <p className = "form-label">Icon</p>
                        <input type="file" id="actual-btn" onChange={handleFileChange} hidden/>
                        <label for="actual-btn" className = "d-flex justify-content-center"><img src = {cloud} /> Upload image</label>
                    </div>
                    <div className = "col-md-6">
                        <p className = "form-label">Description</p>
                        <textarea className = "textArea-add-services" name = "serviceDescription" placeholder = "Enter Description" onBlur={handleBlur}></textarea>
                    </div>
                    
                </div>

            </div>
        </div>
        <div className = "d-flex justify-content-end submit-btn "> <button className = "btn btn-success" type="submit">Submit</button></div>
        </form>
    </body>
    );
};

export default AddService;