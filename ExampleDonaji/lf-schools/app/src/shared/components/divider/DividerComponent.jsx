import { Divider } from 'antd';

export const DividerComponent = ({ orientation, children }) => {
  return (
    <Divider orientation={orientation}>
      {children}
    </Divider>
  );
}