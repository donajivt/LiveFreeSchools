import { Divider } from 'antd';

export const DividerComponent = ({ titlePlacement, children }) => {
  return (
    <Divider titlePlacement={titlePlacement} style={{ marginTop: '5%' }}  >
      {children}
    </Divider>
  );
}