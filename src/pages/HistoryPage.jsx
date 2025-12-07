import {ChevronLeft, Info, Ticket} from "lucide-react";
import React from "react";
import TicketHistoryCard from "../components/TicketHistoryCard.jsx";
import useTranslation from "../context/useTranslation.js";

const HistoryPage = ({ tickets, onBack }) => {
    const { t } = useTranslation();

    return (
        <div className="animate-fade-in max-w-4xl mx-auto">
            <button onClick={onBack} className="text-gray-400 hover:text-white mb-8 flex items-center gap-2 transition-colors">
                <ChevronLeft size={20} /> {t('back_btn')}
            </button>

            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Ticket size={28} className="text-blue-500" />
                {t('my_tickets')}
            </h2>

            {tickets.length === 0 ? (
                <div className="bg-gray-800 p-8 rounded-xl text-center border-2 border-dashed border-gray-700 mt-12">
                    <Info size={32} className="mx-auto mb-4 text-gray-500" />
                    <p className="text-gray-400 text-lg">{t('no_tickets')}</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {tickets.map((booking, index) => (
                        <TicketHistoryCard key={index} booking={booking} t={t} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default HistoryPage;