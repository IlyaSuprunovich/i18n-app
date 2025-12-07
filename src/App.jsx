import React, { useState } from 'react';
import { Ticket, User } from 'lucide-react';
import HistoryPage from "./pages/HistoryPage.jsx";
import SuccessPage from "./pages/SuccessPage.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import MOVIES from "./data/movies.js";
import LanguageSwitcher from "./components/LanguageSwitcher.jsx";
import TRANSLATIONS from "./data/translations.js";
import LanguageContext from "./context/LanguageContext.js";

const App = () => {
    const [lang, setLang] = useState('ru');
    const [view, setView] = useState('home');
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [bookedTickets, setBookedTickets] = useState([]);
    const [lastBooking, setLastBooking] = useState(null);

    const t = (key) => {
        return TRANSLATIONS[lang][key] || key;
    };

    const handleSelectMovie = (movie) => {
        setSelectedMovie(movie);
        setView('booking');
    };

    const handleBookingConfirm = (bookingData) => {
        setBookedTickets(prev => [bookingData, ...prev]);
        setLastBooking(bookingData);
        setView('success');
    };

    const goHome = () => {
        setSelectedMovie(null);
        setLastBooking(null);
        setView('home');
    };

    const handleShowHistory = () => {
        setView('history');
    }

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            <div className="min-h-screen bg-gray-900 text-gray-100 font-sans selection:bg-blue-500 selection:text-white">

                <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
                    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                        <div
                            className="flex items-center gap-2 font-bold text-xl cursor-pointer"
                            onClick={goHome}
                        >
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                                <Ticket size={20} />
                            </div>
                            <span className="hidden sm:block">{t('app_title')}</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <LanguageSwitcher />
                            <button
                                onClick={handleShowHistory}
                                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                            >
                                <User size={18} />
                            </button>
                        </div>
                    </div>
                </header>

                <main className="container mx-auto px-4 py-8 pb-20">
                    {view === 'home' && (
                        <HomePage movies={MOVIES} onSelectMovie={handleSelectMovie} />
                    )}

                    {view === 'booking' && selectedMovie && (
                        <BookingPage
                            movie={selectedMovie}
                            onBack={() => setView('home')}
                            onConfirm={handleBookingConfirm}
                        />
                    )}

                    {view === 'success' && lastBooking && (
                        <SuccessPage booking={lastBooking} onHome={goHome} />
                    )}

                    {view === 'history' && (
                        <HistoryPage tickets={bookedTickets} onBack={goHome} />
                    )}
                </main>

            </div>
        </LanguageContext.Provider>
    );
};

export default App;