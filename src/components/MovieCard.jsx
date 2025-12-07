import useTranslation from "../context/useTranslation.js";
import {Clock, Ticket} from "lucide-react";


const MovieCard = ({ movie, onBook }) => {
    const { t } = useTranslation();

    return (
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-gray-500 transition-all duration-300 group">
            <div className={`h-48 w-full bg-gradient-to-br ${movie.imageColor} relative p-4 flex items-end`}>
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-yellow-400 px-2 py-1 rounded-md text-sm font-bold flex items-center gap-1">
                    ★ {movie.rating}
                </div>
            </div>

            <div className="p-5">
                <div className="text-xs text-blue-400 mb-1 font-semibold uppercase tracking-wider">{t(movie.genreKey)}</div>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">{t(movie.titleKey)}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 h-10">{t(movie.descKey)}</p>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center text-gray-500 text-xs">
                        <Clock size={14} className="mr-1" />
                        {movie.duration} {t('minutes')}
                    </div>
                    <button
                        onClick={() => onBook(movie)}
                        className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-500 hover:text-white transition-colors flex items-center gap-2"
                    >
                        <Ticket size={16} />
                        {t('book_btn')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;