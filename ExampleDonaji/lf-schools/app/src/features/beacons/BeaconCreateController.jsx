
import { withReactive } from "@/reactive/withReactive";
import { DividerComponent } from "@/shared/components/divider/DividerComponent";
import { BeaconForm } from "./BeaconForm";

export const BeaconCreateController = withReactive((
    { services }, oncancel
) => {
    console.log("BeaconCreateController.Services", services);
        return (<div> 
            <DividerComponent title="Beacon" />    
            <BeaconForm 
                onSubmit={(beacon) => services.beacons.addBeacon(beacon)} 
                onCancel={oncancel} 
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