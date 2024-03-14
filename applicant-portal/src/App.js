import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import JobDashboard from './JobDashboard';
import AllJobs from './AllJobs';
import Archived from './Archived';
import Footer from './Footer';
import Login from './Login';
import Verify from './Verify';
import Loading from './Loading';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/dashboard" element={<JobDashboard />} />
          <Route path="/all-applications" element={<AllJobs />} />
          <Route path="/archived" element={<Archived />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
