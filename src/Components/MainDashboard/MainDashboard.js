import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AdminDataList from '../AdminDataList/AdminDataList';
import Order from '../Order/Order';

const MainDashboard = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const email = localStorage.getItem("email");
    const history = useHistory();

    useEffect(() => {
        fetch('https://boiling-eyrie-70521.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    return (
        <div>
            {
                isAdmin ? <AdminDataList> </AdminDataList> : <Order></Order>
            }
            
        </div>
    );
};

export default MainDashboard;