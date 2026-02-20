import { Button } from "antd";

export const LoadingButton = ({ label, isLoading, onClick }) => {
  return (
    <Button loading={isLoading} onClick={onClick} style={{ margin: '12px' }}>
      {!isLoading && label}
    </Button>
  );
};
