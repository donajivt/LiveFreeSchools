import { useParams, useNavigate } from "react-router-dom";
import { UserCreateController } from "./UserCreateController";
import { UserEditController } from "./UserEditController";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

export const UserManagementView = () => {
    
    const { id } = useParams();
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/users");
    };


    return (
        <div style={{ padding: '24px', borderRadius: '8px' }}>
            <Button
                icon={<ArrowLeftOutlined />}
                onClick={handleBack}
                style={{ marginBottom: 16 }}
            >
                Regresar
            </Button>
            {id ? (
                <UserEditController
                    userId={id}
                    onSubmit={handleBack}
                />
            ) : (
                <UserCreateController
                    onSubmit={handleBack}
                />
            )}
        </div>
    );
};
