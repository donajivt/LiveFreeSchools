import { useNavigate } from "react-router-dom";

import { RoutePaths } from "@/features/routing/RoutePaths";
import { withReactive } from "@/reactive/withReactive";
import { DividerComponent } from "@/shared/components/divider/DividerComponent";
import { BeaconForm } from "./BeaconForm";

export const BeaconCreateController = withReactive((
    { services }
) => {
    const navigate = useNavigate();
        return (<div> 
            <DividerComponent title="Beacon Data" />    
            <BeaconForm 
                onSubmit={async (beacon) => {
                    await services.beacons.addBeacon(beacon);
                    navigate(RoutePaths.beacons.list());
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