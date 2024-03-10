import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import {Button} from "packagesApp/shadcn";
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
            <Button>
                 Hello
            </Button>
        </div>
    );
    
}

export default Dashboard