import React from 'react';
import BookingCard from './BookingCard.jsx';

export default class BookingList extends React.Component {
    render() {
        const { bookings } = this.props;

        return (
            <div className="booking-list-section">
                <h2 className="section-title">BOOKINGS</h2>

                {bookings.length === 0 ? (
                    <p className="empty-message">No bookings added yet.</p>
                ) : (
                    <div className="booking-grid">
                        {bookings.map((booking) => (
                            <BookingCard
                                key={booking.id}
                                id={booking.id}
                                name={booking.name}
                                route={booking.route}
                                seats={booking.seats}
                                status={booking.status}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }
}
