import { Navigate } from 'react-router-dom';
import { useState } from 'react';
const Dashboard = () => {
    const [check, setcheck] = useState(false);
    return (
        <div>
            {
                check && <Navigate to="/test" />
            }
            <button onClick={()=>setcheck(!check)}>
                click
            </button>
        </div>
    );
    
}

export default Dashboard