import { useParams, useNavigate } from "react-router-dom";

import { RoutePaths } from "@/features/routing/RoutePaths";
import { BeaconUpdateController } from "./BeaconUpdateController";

export const BeaconUpdateView = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    return (
        <div>
            <BeaconUpdateController
                onCancel={() => navigate(RoutePaths.beacons.list())}
                onSubmit={(services, values) => {
                    services.beacons.updateBeacon(values, { id });
                    navigate(RoutePaths.beacons.list());
                }}
                id={ id }
            />
        </div>
    );
}