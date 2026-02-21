import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserCreateController } from "./UserCreateController";
import { UserEditController } from "./UserEditController";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

export const UserManagementView = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isExpanded, setIsExpanded] = useState(true);

    const handleBack = () => {
        navigate("/users");
    };

    const handleSetIsExpanded = (expanded) => {
        if (!expanded) {
            navigate("/users");
        } else {
            setIsExpanded(expanded);
        }
    };

    return (
        <div style={{ padding: '24px', borderRadius: '8px' }}>
            <Button
                icon={<ArrowLeftOutlined />}
                onClick={handleBack}
                style={{ marginBottom: 16 }}
            >
                Regresar a la lista
            </Button>
            {id ? (
                <UserEditController
                    userId={id}
                    isExpanded={isExpanded}
                    setIsExpanded={handleSetIsExpanded}
                />
            ) : (
                <UserCreateController
                    isExpanded={isExpanded}
                    setIsExpanded={handleSetIsExpanded}
                />
            )}
        </div>
    );
};
