import { useNavigate } from "react-router-dom";

import { RoutePaths } from "@/features/routing/RoutePaths";
import { withReactive } from "@/reactive/withReactive";
import { BeaconForm } from "./BeaconForm";

export const BeaconCreateController = withReactive((
    { services, monitors }
) => {
    const isLoading = monitors.addBeacon;
    const navigate = useNavigate();
        return (<div>    
            <BeaconForm 
                onSubmit={(beacon) => {
                    services.beacons.addBeacon(beacon);
                    isLoading ? null : navigate(RoutePaths.beacons.list());
                }}
                onCancel={() => navigate(RoutePaths.beacons.list())}
                beacon={null}
            />        
        </div>);
    },
    {
        init: () => {
        },
        queries: () => [
        ],
        monitors: () => (['addBeacon']),
    }
);