import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import {Button} from "packagesApp/shadcn";
import AuthLayout from 'packagesApp/AuthLayout';
const Dashboard = () => {
    const [check, setcheck] = useState(false);
    return (
        <AuthLayout>
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
        </AuthLayout>
    );
    
}

export default Dashboard