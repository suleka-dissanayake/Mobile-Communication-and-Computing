import React from 'react';
import { useState } from 'react';
import BookingForm from './components/BookingForm.jsx';
import BookingList from './components/BookingList.jsx';
import './App.css';

function App() {
    const [bookings, setBookings] = useState([
        { id: 'BK001', name: 'Kamal Perera', route: 'Colombo - Kandy', seats: 2, status: 'CONFIRMED' },
        { id: 'BK002', name: 'Nimal Fernando', route: 'Colombo - Galle', seats: 1, status: 'CONFIRMED' },
        { id: 'BK003', name: 'Saman Silva', route: 'Kandy - Jaffna', seats: 3, status: 'CANCELLED' },
    ]);

    const handleAddBooking = (newBooking) => {
        if (bookings.some((b) => b.id === newBooking.id)) {
            alert('Booking ID already exists. Please use a different ID.');
            return;
        }
        setBookings([...bookings, newBooking]);
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>BUS TICKET BOOKING SYSTEM</h1>
                <p>React Practical Assessment</p>
            </header>

            <main className="app-main">
                <BookingForm onAddBooking={handleAddBooking} />
                <BookingList bookings={bookings} />
            </main>

            <footer className="app-footer">
                <p>2026 Bus Ticket Booking</p>
            </footer>
        </div>
    );
}

export default App;
