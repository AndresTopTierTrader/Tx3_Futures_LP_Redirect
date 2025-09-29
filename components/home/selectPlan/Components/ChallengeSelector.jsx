export function ChallengeSelector({ selectedChallenge, onChallengeSelect, className = "" }) {
    return (
        <div className={`flex flex-row gap-2 sm:gap-4 justify-center ${className}`}>
            <button 
                onClick={() => onChallengeSelect('starter')} 
                className={`grid place-items-center py-3 px-4 sm:py-4 sm:px-8 text-sm sm:text-lg md:text-xl rounded-lg border transition-all flex-1 max-w-[180px] sm:min-w-[200px] ${
                    selectedChallenge === 'starter' 
                        ? 'bg-gradient-to-br from-[#0B111D] to-[#286729] border-green shadow-lg' 
                        : 'hover:brightness-125 bg-[#232934] border-[#8D8D8D]'
                }`}
            >
                Starter
            </button>

            <button 
                onClick={() => onChallengeSelect('pro')} 
                className={`grid place-items-center py-3 px-4 sm:py-4 sm:px-8 text-sm sm:text-lg md:text-xl rounded-lg border transition-all flex-1 max-w-[180px] sm:min-w-[200px] ${
                    selectedChallenge === 'pro' 
                        ? 'bg-gradient-to-br from-[#0B111D] to-[#286729] border-green shadow-lg' 
                        : 'hover:brightness-125 bg-[#232934] border-[#8D8D8D]'
                }`}
            >
                Pro
            </button>
        </div>
    );
}