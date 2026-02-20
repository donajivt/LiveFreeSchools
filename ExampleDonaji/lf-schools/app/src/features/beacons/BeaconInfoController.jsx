import { withReactive } from '@/reactive/withReactive';
import { useParams } from "react-router-dom";
import { DividerComponent } from "@/shared/components/divider/DividerComponent";
import { BeaconInfoList } from "./BeaconInfoList";

export const BeaconInfoController = withReactive((
    { data }
) => {
    const { id } = useParams();

    const beacon = data?.beacons?.find(
      (b) => b.id === id
    );

    if (!beacon) return <p>Loading...</p>;

     return (
      <div className="beacon-detail-container">
        <BeaconInfoList beacon={beacon} />
      </div>
    );

},
{
    init: ({ services }) => {
      services.beacons.getBeacons();
    },
    queries: () => [
      {
        collection: "beacons",
        name: "beacons",
        defaultValue: [],
      },
    ],
    monitors: () => ["getBeacons"],
  }
);