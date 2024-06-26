import React from "react";
import { Table } from "antd";

const SimpleTable = ({ dataSource }) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  return (
    <div className="data">
      {dataSource.length ? (
        <Table dataSource={dataSource} columns={columns} rowKey="id" />
      ) : (
        "No user data"
      )}
    </div>
  );
};

export default SimpleTable;
