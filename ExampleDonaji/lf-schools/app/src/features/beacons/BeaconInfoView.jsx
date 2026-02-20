import { useNavigate } from "react-router-dom";
import { Button } from "antd";

import { BeaconInfoController } from "./BeaconInfoController";
import { RoutePaths } from "@/features/routing/RoutePaths";

export const BeaconInfoView = () => {
    const navigate = useNavigate();
    return (
        <div>
            <BeaconInfoController />
            <Button
                    color="red"
                    variant="filled"
                    size='large'
                    onClick={() => navigate(RoutePaths.beacons.list())}
                    >
                    Cancel
                    </Button>
        </div>
    );
}