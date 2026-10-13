import React from 'react';

export default function BookingCard(props) {
    const { id, name, route, seats, status } = props;
    const isConfirmed = status === 'CONFIRMED';

    return (
        <div className="booking-card">
            <div className="booking-card-header">
                <span className="booking-id">{id}</span>
                <span className={`status-badge ${isConfirmed ? 'badge-confirmed' : 'badge-cancelled'}`}>
                    {status}
                </span>
            </div>
            <h3 className="passenger-name">{name}</h3>
            <p className="booking-route">{route}</p>
            <p className="booking-seats">Seats: {seats}</p>
        </div>
    );
}
