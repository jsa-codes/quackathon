import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import FavoritesList from "./FavoritesList";

const cols = [
    {
        field: "image_link",
        headerName: "Image",
        width: 90,
        renderCell: (params) => (
            <img
                src={params.value}
                alt={`the ${params.row.name} being displayed`}
                height={50}
                width={50}
            />
        ),
    },
    {
        field: "name",
        headerName: "Name",
        width: 150,
        editable: false,
    },

    {
        field: "length",
        headerName: "Length",
        width: 90,
        editable: false,
    },
    {
        field: "origin",
        headerName: "Origin",
        width: 150,
        editable: false,
    },
];

/**
 * Takes in a array of cat data objects setting the data in appropriate cols. Allows users to store selections in localStorage.
 * @param {array} catArray array of cat objects returned by the ninja api
 * @returns {JSXElement} the ResultTable component rendered content
 */
export default function ResultTable({ catArray }) {
    const [selections, setSelections] = useState([]);


    useEffect(() => {

        console.log('CURRENT SELECTIONS: ', selections);
        const data = JSON.stringify(selections);
        localStorage.setItem('myCats', data);

        console.log(localStorage.getItem('myCats'))
    }, [selections])
    const isNewCat = (newCat) => {
        // no cats so selection is new.
        // if (selections.length === 0) return true;

        const duplicate = selections.find(cat => cat.name === newCat.name);
        if (duplicate) return false;

        return true;
    };
    return (
        <Box sx={{ height: 400, width: "100%" }}>
            {catArray.length > 0 ? (
                <DataGrid
                    rows={catArray}
                    columns={cols}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}

                    getRowId={(row) => row?.name}
                    onRowSelectionModelChange={(newRowSelectionModel) => {

                        const newCat = catArray.find(element => element.name === newRowSelectionModel[0]);
                        console.log('get the actual data', newCat);
                        if (isNewCat(newCat)) {
                            console.log('adding cat', newCat);
                            setSelections([...selections, newCat]);

                        } else {
                            return;
                        }

                    }}
                />
            ) : (
                <div>Loading...</div>
            )}
            <FavoritesList />
        </Box>
    );
}

ResultTable.propTypes = {
    catArray: PropTypes.arrayOf(PropTypes.object),
};
