import React, {useMemo} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {MaterialReactTable} from "material-react-table";

import {employeeTab } from "../Redux/reducers/employer";


export default function ListEmployee() {
  const employeesList = useSelector(employeeTab)
  console.log(employeesList)
  const columns = useMemo(
		() => [
			{
				header: "First Name",
				accessorKey: "firstName",
				size: 20,
			},
			{
				header: "Last Name",
				accessorKey: "lastName",
				size: 100,
			},
      {
				header: "Date of Birth",
				accessorKey: "dateBirth",
				size: 100,
			},
			{
				header: "Start Date",
				accessorKey: "startDate",
				size: 100,
			},
			
			
			{
				header: "Street",
				accessorKey: "street",
				size: 100,
			},
			{
				header: "City",
				accessorKey: "city",
				size: 100,
			},
			{
				header: "State",
				accessorKey: "state",
				size: 100,
			},
			{
				header: "Zip Code",
				accessorKey: "zipCode",
				size: 100,
			},
      {
				header: "Department",
				accessorKey: "department",
				size: 100,
			},
		],
		[]
	);

  
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      {employeesList ? (
				<MaterialReactTable
					columns={columns}
					data={employeesList}
         
          initialState={
            {
              pagination: {
                pageSize: 10,
                pageIndex: 0
              },
              density: 'compact',
              showGlobalFilter: true 
            }
            
          }
         // enableRowNumbers //activate row number
         // rowNumberMode="original"
          positionGlobalFilter="right"
          enableToolbarInternalActions={false}
          muiTableBodyCellProps={{
            sx: {
              p: '7px 8px',
              border: '1px solid #f2f2f2'
            },
            align:'center'
          }}
          muiTableBodyProps={{
            sx: () => ({
              '& tr:nth-of-type(odd)': {
                backgroundColor: '#f2f2f2' //cells color 
              },
              
            }),
            
          }} 
          
          muiTablePaperProps={{
            sx: {
              maxWidth: '97%',// table's width
              m: 'auto',
             
            },
            elevation: 0 //no box shodow
            
          }}
          muiTableHeadCellProps={{
            align: 'center',
          }}
          
          
				
				/>
			) : (
				<span>No data to display</span>
			)}
      <Link to="/">Home</Link>
    </div>

  )
}