import { Typography } from 'antd';

import { BeaconsListController } from './BeaconsListController';

export const BeaconsListView = () => {
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
        <BeaconsListController />
    </div>
  );
}