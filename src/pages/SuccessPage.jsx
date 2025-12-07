import {CheckCircle} from "lucide-react";
import React from "react";
import useTranslation from "../context/useTranslation.js";

const SuccessPage = ({ booking, onHome }) => {
    const { t } = useTranslation();

    return (
        <div className="animate-fade-in flex items-center justify-center min-h-[60vh]">
            <div className="bg-white text-gray-900 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative">
                <div className="bg-blue-600 p-6 text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                    <CheckCircle size={48} className="mx-auto mb-3 text-blue-200" />
                    <h2 className="text-2xl font-bold">{t('ticket_success')}</h2>
                </div>

                <div className="p-8 space-y-4">
                    <div className="text-center mb-6">
                        <p className="text-sm text-gray-500 uppercase tracking-wide">{t('ticket_for')}</p>
                        <h1 className="text-2xl font-bold text-gray-900 mt-1">{t(booking.movie.titleKey)}</h1>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border-t border-b border-gray-200 py-6 border-dashed">
                        <div>
                            <p className="text-xs text-gray-400 uppercase">{t('time')}</p>
                            <p className="font-bold text-lg">{booking.time}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-gray-400 uppercase">{t('screen')}</p>
                            <p className="font-bold text-lg">3 (IMAX)</p>
                        </div>
                        <div className="col-span-2">
                            <p className="text-xs text-gray-400 uppercase">{t('seats_selected')}</p>
                            <p className="font-bold text-lg text-blue-600">
                                {booking.seats.map(s => {
                                    const [r, c] = s.split('-');
                                    return `${String.fromCharCode(65 + parseInt(c))}${parseInt(r) + 1}`;
                                }).join(', ')}
                            </p>
                        </div>
                    </div>

                    <div className="pt-2">
                        <div className="w-full h-12 bg-gray-900 rounded flex items-center justify-center text-white font-mono tracking-[0.5em] text-sm">
                            BARCODE-12345
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-gray-50 text-center border-t">
                    <button
                        onClick={onHome}
                        className="text-blue-600 font-bold hover:underline"
                    >
                        {t('go_home')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuccessPage;