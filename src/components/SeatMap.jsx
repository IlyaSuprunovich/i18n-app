import useTranslation from "../context/useTranslation.js";


const SeatMap = ({ occupied, selected, onToggle }) => {
    const { t } = useTranslation();
    const rows = 6;
    const cols = 8;

    const renderSeats = () => {
        let grid = [];
        for (let r = 0; r < rows; r++) {
            let rowSeats = [];
            for (let c = 0; c < cols; c++) {
                const seatId = `${r}-${c}`;
                const isOccupied = occupied.includes(seatId);
                const isSelected = selected.includes(seatId);

                const extraMargin = c === 3 ? 'mr-8' : '';

                rowSeats.push(
                    <button
                        key={seatId}
                        disabled={isOccupied}
                        onClick={() => onToggle(seatId)}
                        className={`
              w-8 h-8 md:w-10 md:h-10 rounded-t-lg text-[10px] font-medium transition-all transform hover:scale-105
              flex items-center justify-center ${extraMargin}
              ${isOccupied
                            ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                            : isSelected
                                ? 'bg-blue-500 text-white shadow-[0_0_10px_rgba(59,130,246,0.6)]'
                                : 'bg-gray-600 text-gray-300 hover:bg-gray-500'}
            `}
                    >
                        {!isOccupied && <span className="opacity-50">{r+1}{String.fromCharCode(65+c)}</span>}
                    </button>
                );
            }
            grid.push(
                <div key={r} className="flex gap-2 justify-center mb-2">
                    {rowSeats}
                </div>
            );
        }
        return grid;
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="mb-10 relative">
                <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent w-full opacity-50 shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
                <div className="w-full h-8 bg-gradient-to-b from-blue-500/10 to-transparent transform perspective-500 rotate-x-12"></div>
                <p className="text-center text-xs text-gray-500 mt-2 tracking-[0.3em] uppercase">{t('screen')}</p>
            </div>

            <div className="mb-8">
                {renderSeats()}
            </div>

            <div className="flex justify-center gap-4 md:gap-8 text-xs text-gray-400 mb-6 border-t border-gray-800 pt-6">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-gray-600"></div>
                    <span>{t('legend_free')}</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.6)]"></div>
                    <span>{t('legend_selected')}</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-gray-700"></div>
                    <span>{t('legend_occupied')}</span>
                </div>
            </div>
        </div>
    );
};

export default SeatMap;