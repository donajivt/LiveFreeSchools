import { useParams, useNavigate } from "react-router-dom";

import { RoutePaths } from "@/features/routing/RoutePaths";
import { BeaconInfoController } from "./BeaconInfoController";

export const BeaconInfoView = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    return (
        <div>
            <BeaconInfoController
                onClick = {() => navigate(RoutePaths.beacons.list()) }
                id = { id }
            />
        </div>
    );
}