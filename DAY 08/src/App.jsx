import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import DashboardLayout from './components/DashboardLayout';
import Home from './pages/Home';
import About from './pages/About';
import Students from './pages/Students';
import StudentDetails from './pages/StudentDetails';
import DashboardHome from './pages/DashboardHome';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/students" element={<Students />} />
                <Route path="/students/:studentId" element={<StudentDetails />} />

                {/* Nested dashboard routes rendered inside DashboardLayout's <Outlet /> */}
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<DashboardHome />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="settings" element={<Settings />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
