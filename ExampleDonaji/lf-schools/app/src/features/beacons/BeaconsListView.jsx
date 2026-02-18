import { Typography } from 'antd';

import { BeaconsListController } from './BeaconsListController';

export const BeaconsListView = () => {
  return (
    <div>
        <Typography.Title level={1}>Beacon List View</Typography.Title>
        <BeaconsListController />
    </div>
  );
}