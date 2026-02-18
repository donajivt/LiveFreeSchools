import { useEffect } from 'react';
import { Button } from 'antd';
import { useAlert } from '@/shared/components/alerts';

export function TripsList({trips, onSettings}){
    const { success } = useAlert();
    
    useEffect(() => {
    success("Success message Alert !!");
  }, []);

    return(
        <div>
            <p>Trips list</p>
            <Button type="primary" onClick={() => onSettings("1")}>Edit Trip</Button>
        </div>
    )
};