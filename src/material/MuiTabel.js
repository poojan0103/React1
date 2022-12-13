import { Box } from '@mui/system'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import React from 'react'

export const MuiTable1 = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 130,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 130,
            editable: true,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
            editable: true,
        },
    ]
    const rows = [
        { id: 1, lastName: 'Thakkar', firstName: 'Poojan', age: 35 },
        { id: 2, lastName: 'Dave', firstName: 'Tirth', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    ]
  return (
    <div>
             <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                 rows={rows}
                columns={columns}
                pageSize={2}
                rowsPerPageOptions={[2]}
                
                disableSelectionOnClick
                components={{Toolbar:GridToolbar}}


                
                />

                
                </Box>
    </div>
  )
}