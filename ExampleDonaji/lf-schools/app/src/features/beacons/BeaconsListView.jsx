import { Typography, Button } from 'antd';
import { useNavigate } from "react-router-dom";

import { RoutePaths } from "@/features/routing/RoutePaths";
import { BeaconsListController } from './BeaconsListController';

export const BeaconsListView = () => {
  const navigate = useNavigate();
  return (
    <div>
        <div style={{ 
          display: 'flex',  
          margin: '20px', 
          paddingLeft: '5%',
          paddingBottom: '1%',
          backgroundColor:'white',
        }}>
            <Typography.Title level={2}>Beacons List</Typography.Title>
        </div>
        <Button
          type="primary"
          onClick={() => navigate(RoutePaths.beacons.create())}
        >
          Create Beacon
        </Button>
        <BeaconsListController />
    </div>
  );
}