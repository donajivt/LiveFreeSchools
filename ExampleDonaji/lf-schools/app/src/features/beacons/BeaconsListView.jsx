import { Button } from 'antd';
import { useNavigate } from "react-router-dom";

import { RoutePaths } from "@/features/routing/RoutePaths";
import { BeaconsListController } from './BeaconsListController';

export const BeaconsListView = () => {
  const navigate = useNavigate();
  return (
    <div>
        <Button
          type="primary"
          onClick={() => navigate(RoutePaths.beacons.create())}
        >
          Add Beacon
        </Button>
        <BeaconsListController />
    </div>
  );
}