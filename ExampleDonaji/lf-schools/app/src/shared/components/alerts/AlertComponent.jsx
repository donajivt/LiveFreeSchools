import { Popconfirm, message } from "antd";

export const AlertComponent = ({
  title = "Are you sure you want to delete this item?",
  onConfirm,
  onCancel,
  children,
}) => {
  const handleConfirm = async () => {
    try {
      await onConfirm();
      message.success("Item deleted successfully");
    } catch {
      message.error("Error deleting item");
    }
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
    message.info("Action canceled");
  };

  return (
    <Popconfirm
      title={title}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
      okText="Yes"
      cancelText="No"
    >
      {children}
    </Popconfirm>
  );
};

export default AlertComponent;
