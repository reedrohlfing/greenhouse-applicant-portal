import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { mockJobData } from "./mockData.js";
import Map from './Map.js';

const JobDashboard = () => {
    // Compute the number of jobs for each company
    const companyJobCounts = {};
    mockJobData.forEach((job) => {
        companyJobCounts[job.company] = (companyJobCounts[job.company] || 0) + 1;
    });
    // Convert companyJobCounts into rows for the DataGrid
    const companyRows = Object.entries(companyJobCounts).map(([company, numCompanyJobs]) => ({
        id: company,
        company,
        numCompanyJobs,
    }));
    const companyColumns = [
        { field: "company", headerName: "Company", flex: 1 },
        { field: "numCompanyJobs", headerName: "Number of Applications", flex: 1 },
    ];


    return ( 
        <nav className="content">
            <div className="dashboard">
                <div className="job-list">
                    <div className="job-list-header">Recent Applications</div>
                    
                    <div className="job">
                        <div className="job-status status-applied">Applied</div>
                        <div>
                            <div className="job-company">Samsara</div>
                            <div className="job-location">in San Francisco, CA</div>
                        </div>
                        <div>
                            <div className="job-title">Software Architect</div>
                            <div className="job-details">Applied: Mar 5, 2024</div>
                        </div>
                        <div className="job-withdraw">Withdraw | Archive</div>
                    </div>

                    <div className="job">
                        <div className="job-status status-applied">Applied</div>
                        <div>
                            <div className="job-company">Acorns</div>
                            <div className="job-location">in Irvine, CA</div>
                        </div>
                        <div>
                            <div className="job-title">Software Engineer I, Web</div>
                            <div className="job-details">Applied: Mar 1, 2024</div>
                        </div>
                        <div className="job-withdraw">Withdraw | Archive</div>
                    </div>

                    <div className="job">
                        <div className="job-status status-rejected">Under consideration</div>
                        <div>
                            <div className="job-company">Anduril Industries</div>
                            <div className="job-location">in Costa Mesa, CA</div>
                        </div>
                        <div>
                            <div className="job-title">Air Defense, Mission Software Engineer</div>
                            <div className="job-details">Applied: Feb 21, 2024</div>
                        </div>
                        <div className="job-withdraw">Withdraw | Archive</div>
                    </div>

                    <div className="job">
                        <div className="job-status status-rejected">Applied</div>
                        <div>
                            <div className="job-company">HiveWatch</div>
                            <div className="job-location">in El Segundo, CA (Hybrid)</div>
                        </div>
                        <div>
                            <div className="job-title">Software Engineer - Platform</div>
                            <div className="job-details">Applied: Feb 19, 2024</div>
                        </div>
                        <div className="job-withdraw">Withdraw | Archive</div>
                    </div>

                    <div className="job">
                        <div className="job-status status-rejected">Applied</div>
                        <div>
                            <div className="job-company">Vast Space</div>
                            <div className="job-location">in Long Beach, CA</div>
                        </div>
                        <div>
                            <div className="job-title">Avionics Systems Engineer</div>
                            <div className="job-details">Applied: Feb 14, 2024</div>
                        </div>
                        <div className="job-withdraw">Withdraw | Archive</div>
                    </div>
                </div>
                <div className='companies'>
                    <div className='job-list'>
                        <div className="job-list-header">Applications Per Company</div>
                        <Box
                            sx={{
                                "& .MuiDataGrid-root": {
                                    border: "none",
                                    fontFamily: "inherit",
                                },
                                "& .MuiDataGrid-cell": {
                                    borderBottom: "none",
                                    fontSize: '16px',
                                    color: 'black',
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
                                rows={companyRows}
                                columns={companyColumns}
                                initialState={{
                                    pagination: { paginationModel: { pageSize: 5 } },
                                    sorting: {
                                        sortModel: [{ field: 'numCompanyJobs', sort: 'desc' }],
                                    },
                                }}
                                pageSizeOptions={[5, 10, 25, 100]}
                            />
                        </Box>
                    </div>

                    <div className='job-list'>
                        <div className="job-list-header">Applications By Region</div>
                        {/* <Map /> */}
                    </div>

                </div>

            </div>
        </nav>
     );
}
 
export default JobDashboard;
