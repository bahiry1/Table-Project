import React, { useState, useEffect } from "react";
import MateriaTable from "material-table";
import { useHistory } from "react-router-dom";
import tableIcons from "./MaterialTableIcons";

const Home = () => {
  const [tableData, setTableData] = useState([]);

  const inputName = (fName) => {
    let splitName = fName.split(" ");
    return splitName[0].charAt(0) + "." + splitName[1];
  };

  const columns = [
    {
      title: "Picture",
      field: "website",
      render: (rowData) => (
        <div
          style={{ height: 36, borderRadius: "50%" }}
          src={rowData.website}
        />
      ),
    },
    {
      title: "Full Name",
      field: "name",
      render: (rowData) => <div>{inputName(rowData.name)}</div>,
    },

    {
      title: "Email",
      field: "email",
      render: (rowData) => (
        <a href="mailto: {rowData.email}">{rowData.email}</a>
      ),
    },
    { title: "Gender", field: "gender" },
    { title: "Age", field: "age" },
  ];
  //fetch api
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((resp) => {
        setTableData(resp);
      });
  }, []);
  //using history to save params for Single user page
  const history = useHistory();
  const handleRowClick = (rowData) => {
    history.push("userdetails/" + rowData.name, rowData);
  };
  return (
    <div className="App">
      <h1 align="center">All Users</h1>
      <MateriaTable
        icons={tableIcons}
        columns={columns}
        data={tableData}
        title=""
        onRowClick={(event, rowData) => {
          handleRowClick(rowData);
        }}
        options={{ paging: true, pageSizeOptions: [], pageSize: 10 }}
      />
    </div>
  );
};

export default Home;
