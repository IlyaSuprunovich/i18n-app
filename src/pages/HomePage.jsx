import MovieCard from "../components/MovieCard.jsx";
import useTranslation from "../context/useTranslation.js";

const HomePage = ({ movies, onSelectMovie }) => {
    const { t } = useTranslation();

    return (
        <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-8 bg-blue-500 rounded-full block"></span>
                {t('now_showing')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} onBook={onSelectMovie} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;