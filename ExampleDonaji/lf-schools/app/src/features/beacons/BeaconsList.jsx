import { Table } from 'antd';

import { LoadingButton } from '@/shared/components/buttons';
import { DividerComponent } from '@/shared/components/divider';
import { columns } from './BeaconItem';

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
export const BeaconsList = ({ onClick, data, isLoading }) => {
  return(<> 
    <DividerComponent 
      titlePlacement="start">
        Beacons List
    </DividerComponent>

    <LoadingButton
      label="Actualizar"
      isLoading={isLoading}
      onClick={onClick}
    />

    <Table 
      columns={columns} 
      dataSource={data} 
      loading={isLoading} 
      onChange={onChange}
    />
  </>)
};