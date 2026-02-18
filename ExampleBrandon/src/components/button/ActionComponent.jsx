import { Button, Popconfirm, message } from "antd";

const ActionComponent = ({
  type,          
  icon,
  onClick,
  confirmTitle = "Are you sure you want to delete this item?",
}) => {
  const handleAction = async () => {
    try {
      await onClick();
    } catch {
      message.error("Error executing action");
    }
  };

  if (type === "delete") {
    return (
      <Popconfirm
        title={confirmTitle}
        onConfirm={handleAction}
        okText="Yes"
        cancelText="No"
      >
        <Button type="text" style={{ color: "#ff4516" }} icon={icon} />
      </Popconfirm>
    );
  }

  return (
    <Button
      type="text"
      style={{ color: "#1677ff" }}
      icon={icon}
      onClick={handleAction}
    />
  );
};

export default ActionComponent;
