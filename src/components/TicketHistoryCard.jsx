import {Clock, Ticket} from "lucide-react";
import React from "react";

const TicketHistoryCard = ({ booking, t }) => {
    const formattedSeats = booking.seats.map(s => {
        const [r, c] = s.split('-');
        return `${String.fromCharCode(65 + parseInt(c))}${parseInt(r) + 1}`;
    }).join(', ');

    return (
        <div className="bg-gray-800 rounded-xl p-5 flex flex-col md:flex-row justify-between items-start md:items-center border border-gray-700 shadow-lg transition-all hover:bg-gray-700/50">
            <div className="flex-1 min-w-0 mb-3 md:mb-0">
                <h3 className="text-xl font-bold text-white truncate mb-1">{t(booking.movie.titleKey)}</h3>
                <div className="text-sm text-gray-400 flex items-center gap-4">
                    <span className="flex items-center gap-1"><Clock size={14} /> {booking.time}</span>
                    <span className="flex items-center gap-1"><Ticket size={14} /> {formattedSeats}</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="text-right">
                    <p className="text-sm text-gray-400">{t('price_total')}</p>
                    <p className="text-white text-xl font-bold">${booking.total}</p>
                </div>
            </div>
        </div>
    );
}

export default TicketHistoryCard;