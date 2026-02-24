import { useParams, useNavigate } from "react-router-dom";

import { RoutePaths } from "@/features/routing/RoutePaths";
import { withReactive } from "@/reactive/withReactive";
import { BeaconForm } from "./BeaconForm";

export const BeaconUpdateController = withReactive((
    { data, services }
) => {
    const navigate = useNavigate();
    const { id } = useParams();

    const beacon = data?.beacons?.find(
    b => b.id === id
    );

  return (<div>    
            <BeaconForm 
                onSubmit={(values) => {
                    services.beacons.updateBeacon(values, { id });
                    navigate(RoutePaths.beacons.list());
                }}
                onCancel={() => navigate(RoutePaths.beacons.list())}
                beacon={beacon}
            />        
        </div>);
    },
    {
        init: ({services}) => {
            services.beacons.getBeacons();
        },
        queries: () => [
            {
                collection: 'beacons',
                name: 'beacons',
                defaultValue: [],
            }
        ],
        monitors: () => (['updateBeacon', 'getBeacons']),
    }
);