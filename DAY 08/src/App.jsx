import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Students from './components/Students';
import StudentDetails from './components/StudentDetails';
import Profile from './pages/Profile';
import DashboardHome from './pages/DashboardHome';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/students" element={<Students />} />
                <Route path="/students/:id" element={<StudentDetails />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/dashboard" element={<DashboardHome />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/*" element={Not Found /} />
            </Routes>
        </BrowserRouter>
    );
}