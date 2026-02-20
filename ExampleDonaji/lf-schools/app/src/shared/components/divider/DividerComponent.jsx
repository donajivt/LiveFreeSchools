import { Divider } from 'antd';

export const DividerComponent = ({ titlePlacement, children }) => {
  return (
    <Divider titlePlacement={titlePlacement}>
      {children}
    </Divider>
  );
}