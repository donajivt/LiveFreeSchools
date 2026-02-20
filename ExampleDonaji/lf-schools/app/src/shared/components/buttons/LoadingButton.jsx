import { Button } from "antd";

export const LoadingButton = ({ label, isLoading, onClick }) => {
  return (
    <Button loading={isLoading} onClick={onClick}>
      {!isLoading && label}
    </Button>
  );
};
