import SeatMap from "../components/SeatMap.jsx";
import {useState} from "react";
import useTranslation from "../context/useTranslation.js";
import {Clock, ChevronLeft, Info} from "lucide-react";

const BookingPage = ({ movie, onBack, onConfirm }) => {
    const { t } = useTranslation();
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [occupied] = useState(['0-3', '0-4', '2-2', '2-6']);
    const [error, setError] = useState(null);
    const pricePerSeat = 12;

    const handleSeatToggle = (seatId) => {
        setError(null);
        if (selectedSeats.includes(seatId)) {
            setSelectedSeats(selectedSeats.filter(id => id !== seatId));
        } else {
            setSelectedSeats([...selectedSeats, seatId]);
        }
    };

    const handleConfirm = () => {
        if (!selectedTime) {
            setError(t('error_select_time'));
            return;
        }
        if (selectedSeats.length === 0) {
            setError(t('error_select_seat'));
            return;
        }

        const bookingData = {
            movie,
            time: selectedTime,
            seats: selectedSeats,
            total: selectedSeats.length * pricePerSeat
        };
        onConfirm(bookingData);
    };

    return (
        <div className="animate-fade-in max-w-4xl mx-auto">
            <button onClick={onBack} className="text-gray-400 hover:text-white mb-6 flex items-center gap-2 transition-colors">
                <ChevronLeft size={20} /> {t('back_btn')}
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="space-y-6">
                    <div className={`aspect-video rounded-xl bg-gradient-to-br ${movie.imageColor} p-6 flex flex-col justify-end shadow-xl`}>
                        <h1 className="text-2xl font-bold text-white drop-shadow-md">{t(movie.titleKey)}</h1>
                        <p className="text-white/80 text-sm mt-1">{t(movie.genreKey)}</p>
                    </div>

                    <div>
                        <h3 className="text-gray-300 font-semibold mb-3 flex items-center gap-2">
                            <Clock size={16} /> {t('select_session')}
                        </h3>
                        <div className="grid grid-cols-3 gap-2">
                            {movie.sessions.map(time => (
                                <button
                                    key={time}
                                    onClick={() => { setSelectedTime(time); setError(null); }}
                                    className={`py-2 px-1 text-sm rounded-lg border transition-all ${
                                        selectedTime === time
                                            ? 'bg-white text-black border-white font-bold'
                                            : 'border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-200'
                                    }`}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-400 text-sm">{t('seats_selected')}</span>
                            <span className="text-white font-mono">{selectedSeats.length}</span>
                        </div>
                        <div className="flex justify-between items-center text-lg font-bold text-white border-t border-gray-700 pt-2 mt-2">
                            <span>{t('price_total')}</span>
                            <span>${selectedSeats.length * pricePerSeat}</span>
                        </div>
                    </div>

                    {error && (
                        <div className="bg-red-500/10 border border-red-500/50 text-red-200 p-3 rounded-lg text-sm flex items-start gap-2">
                            <Info size={16} className="mt-0.5 shrink-0" />
                            {error}
                        </div>
                    )}

                    <button
                        onClick={handleConfirm}
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-bold text-lg shadow-lg shadow-blue-900/20 transition-all active:scale-95"
                    >
                        {t('book_confirm')}
                    </button>
                </div>

                <div className="lg:col-span-2 bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-700 shadow-2xl">
                    <SeatMap
                        occupied={occupied}
                        selected={selectedSeats}
                        onToggle={handleSeatToggle}
                    />
                </div>
            </div>
        </div>
    );
};

export default BookingPage;