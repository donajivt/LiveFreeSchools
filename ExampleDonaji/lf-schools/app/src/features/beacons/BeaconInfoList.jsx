import { Table, Row, Col, Tag, Button } from "antd";

import { DividerComponent } from "@/shared/components/divider/DividerComponent";

export const BeaconInfoList = ({ beacon, onClick }) => {
  if (!beacon) return null;

  const eventColumns = [
    {
      title: "Date UTC",
      dataIndex: "createdOnUTC",
      key: "createdOnUTC",
    },
    {
      title: "Emergency Type",
      dataIndex: "emergencyType",
      key: "emergencyType",
    },
    {
      title: "Address",
      dataIndex: "address1",
      key: "address1",
    },
    {
      title: "Created By",
      dataIndex: "createdBy",
      key: "createdBy",
    },
    {
      title: "Created On UTC",
      dataIndex: "createdOnUTC",
      key: "createdOnUTC",
    },
  ];

  const locationColumns = [
    {
      title: "Date UTC",
      dataIndex: "locationDateUTC",
      key: "locationDateUTC",
    },
    {
      title: "Streets",
      key: "streets",
      render: (_, record) => (
        <>
          {record.street1} & {record.street2}
        </>
      ),
    },
    {
      title: "Locality",
      dataIndex: "locality",
      key: "locality",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "Postal Code",
      dataIndex: "postalCode",
      key: "postalCode",
    },
  ];

  return (
    <div style={{ background: "#fff", padding: 24, borderRadius: 8 }}>
      
      <DividerComponent titlePlacement="start">Beacon Information</DividerComponent>

      <Row gutter={[16, 16]}>
        <Col span={8}><b>Device Name:</b> {beacon.deviceName}</Col>
        <Col span={8}><b>Type:</b> {beacon.beaconType}</Col>
        <Col span={8}><b>Phone Number:</b> {beacon.phoneNumber}</Col>

        <Col span={8}><b>District:</b> {beacon.districtId}</Col>
        <Col span={8}><b>School:</b> {beacon.schoolId || "—"}</Col>
        <Col span={8}><b>Faculty:</b> {beacon.facultyId || "—"}</Col>

        <Col span={8}>
          <b>Available:</b>{" "}
          {beacon.isAvailable ? (
            <Tag color="green">Yes</Tag>
          ) : (
            <Tag color="red">No</Tag>
          )}
        </Col>
      </Row>

       <DividerComponent titlePlacement="start">Beacon Events</DividerComponent>

      <Table
        columns={eventColumns}
        dataSource={beacon.events}
        rowKey={(record, index) => index}
        pagination={{ pageSize: 5 }}
      />

      <DividerComponent titlePlacement="start">Beacon Locations</DividerComponent>

      <Table
        columns={locationColumns}
        dataSource={beacon.locations}
        rowKey={(record, index) => index}
        pagination={{ pageSize: 5 }}
      />
      <Button
        color="default"
        variant="Outlined"
        size='large'
        onClick={ onClick }
        style={{ marginTop: 16, padding: "1% 7%" }}
      >
        Back
      </Button>
    </div>
  );
};
