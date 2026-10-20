import React, { useState } from 'react';

export default function BookingForm(props) {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [route, setRoute] = useState('');
    const [seats, setSeats] = useState('1');
    const [status, setStatus] = useState('CONFIRMED');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!id.trim() || !name.trim() || !route.trim()) {
            alert('Please fill in Booking ID, Passenger Name, and Route.');
            return;
        }

        if (Number(seats) < 1) {
            alert('Seats must be at least 1.');
            return;
        }

        const newBooking = {
            id: id.trim(),
            name: name.trim(),
            route: route.trim(),
            seats: Number(seats),
            status: status,
        };

        props.onAddBooking(newBooking);

        setId('');
        setName('');
        setRoute('');
        setSeats('1');
        setStatus('CONFIRMED');
    };

    return (
        <div className="form-section">
            <h2 className="section-title">BOOK NEW TICKET</h2>
            <form className="booking-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Booking ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Passenger Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Route (e.g. Colombo - Kandy)"
                    value={route}
                    onChange={(e) => setRoute(e.target.value)}
                />
                <input
                    type="number"
                    min="1"
                    placeholder="Seats"
                    value={seats}
                    onChange={(e) => setSeats(e.target.value)}
                />
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="CONFIRMED">CONFIRMED</option>
                    <option value="CANCELLED">CANCELLED</option>
                </select>
                <button type="submit" className="add-btn">+ BOOK TICKET</button>
            </form>
        </div>
    );
}
