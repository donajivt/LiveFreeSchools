import { Typography } from 'antd';

import { BeaconsListController } from './BeaconsListController';

export const BeaconsListView = () => {
  return (
    <div>
        <div style={{ 
          display: 'flex',  
          marginBottom: '20px', 
          backgroundColor:'white',
        }}>
            <Typography.Title level={2}>Beacons List</Typography.Title>
        </div>
        <BeaconsListController />
    </div>
  );
}