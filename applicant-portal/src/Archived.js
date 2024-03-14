import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { mockJobData } from "./mockData.js";

const Archived = () => {
    const columns = [
        { field: "status", headerName: "Status", flex: 1, cellClassName: "job-status", },
        { field: "company", headerName: "Company", flex: 0.7, },
        { field: "title", headerName: "Position", flex: 1.5, cellClassName: "job-title", },
        { field: "location", headerName: "Location", flex: 1 },
        { field: "applied", headerName: "Applied On", flex: 0.8, },
        { field: "withdrawArchive", headerName: "", flex: 1, cellClassName: "job-withdraw", align: "right", },
    ];

    // Filter only the jobs where archived === true
    const archivedJobs = mockJobData.filter(job => job.archived);
    archivedJobs.forEach(job => {
        job.withdrawArchive = "Unarchive";
    })
    
    return ( 
        <nav className="content">
            <div className="dashboard">
                <div className='job-list'>
                    <div className="job-list-header">Archived Applications</div>
                    <Box
                        sx={{
                            "& .MuiDataGrid-root": {
                                border: "none",
                                fontFamily: "inherit",
                            },
                            "& .MuiDataGrid-cell": {
                                borderBottom: "none",
                            },
                            "& .name-column--cell": {
                                color: "black",
                            },
                            "& .MuiDataGrid-columnHeaders": {
                                backgroundColor: "var(--tile-header-background-color)",
                                borderBottom: "none",
                                fontSize: '15px',
                            },
                            "& .MuiDataGrid-virtualScroller": {
                                backgroundColor: "var(--tile-background-color)",
                            },
                            "& .MuiDataGrid-footerContainer": {
                                borderTop: "none",
                                backgroundColor: "var(--tile-header-background-color)",
                                borderRadius: "10px",
                            },
                        }}
                    >
                        <DataGrid
                            rows={archivedJobs}
                            columns={columns}
                            initialState={{
                                pagination: { paginationModel: { pageSize: 10 } },
                                sorting: {
                                    sortModel: [{ field: 'applied', sort: 'desc' }],
                                },
                            }}
                            pageSizeOptions={[5, 10, 25, 100]}
                        />
                    </Box>
                </div>

            </div>
        </nav>
     );
}
 
export default Archived;