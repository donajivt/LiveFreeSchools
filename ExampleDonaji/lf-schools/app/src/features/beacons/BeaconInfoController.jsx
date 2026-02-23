import { withReactive } from '@/reactive/withReactive';
import { useParams } from "react-router-dom";
import { BeaconInfoList } from "./BeaconInfoList";

export const BeaconInfoController = withReactive((
    { data }
) => {
    const { id } = useParams();

    const beacon = data?.beacons?.find(
      (b) => b.id === id
    );

    const handleCancel = () => {
      window.history.back();
    };

    if (!beacon) return <p>Loading...</p>;

     return (
      <div className="beacon-detail-container">
        <BeaconInfoList beacon={ beacon} onClick={handleCancel } />
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