import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import PropTypes, { object } from 'prop-types';

const cols = [

    {
        field: 'image_link', headerName: 'Image', width: 90, renderCell: (params) => (
            <img src={params.value} alt={`the ${params.row.name} being displayed`} height={50} width={50} />
        )
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 150,
        editable: false
    },

    {
        field: 'length',
        headerName: 'Length',
        width: 90,
        editable: false
    },
    {
        field: 'origin',
        headerName: 'Origin',
        width: 150,
        editable: false
    },
]

export default function ResultTable({ catArray }) {

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            {catArray.length > 0 ? <DataGrid
                rows={catArray}
                columns={cols}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        }
                    }
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                getRowId={(row) => row?.name}

            /> : <div>Loading...</div>}
        </Box>
    )

}

ResultTable.propTypes = {
    catArray: PropTypes.arrayOf(PropTypes.object),
}