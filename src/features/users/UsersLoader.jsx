import { useState } from "react";
import { Button, Input, Row, Col, Typography } from "antd";
import { useQuery } from "@/hooks";

const { Title } = Typography;

export const UsersLoader = ({ isLoading, onClick, children }) => {
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState({ field: "name", direction: "asc" });
  const users = useQuery({
    collection: "users",
    where: {
      field: "name",
      op: "contains",
      value: search,
    },
    orderBy: order,
  });

  return (
    <div>
      <Row justify="space-between" align="middle" style={{ marginBottom: 16 }}>
        <Col>
          <Title level={2} style={{ margin: 0 }}>Lista de Usuarios</Title>
        </Col>
        <Col>
          <Input
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: 200, marginRight: 8 }}
          />
          <Button
            onClick={() => setOrder({ field: "name", direction: order.direction === "asc" ? "desc" : "asc" })}
            style={{ marginRight: 8 }}
          >
            Order by name {order.direction === "asc" ? "↑" : "↓"}
          </Button>
          <Button
            type="primary"
            loading={isLoading}
            onClick={onClick}
          >
            Actualizar
          </Button>
        </Col>
      </Row>
      {children({ filteredUsers: users })}
    </div>
  );
};
