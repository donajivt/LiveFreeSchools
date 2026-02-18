import React from "react";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import AlertComponent from "./components/alert/AlertComponent";
import ActionComponent from "./components/button/ActionComponent";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f0f2f5",
      }}
    >
      <Card title="Estado Base" style={{ width: 300 }}>
        <p>Hola Mundo</p>
        <Button type="primary">Botón de prueba</Button>
        <ActionComponent
          type="delete"
          icon={<DeleteOutlined />}
          onClick={() => console.log("Delete item")}
        />

        <ActionComponent
          type="edit"
          icon={<EditOutlined />}
          onClick={() => console.log("Edit item")}
        />

        <ActionComponent
          type="info"
          icon={<EyeOutlined />}
          onClick={() => console.log("View info")}
        />
      </Card>
    </div>
  );
};

export default App;