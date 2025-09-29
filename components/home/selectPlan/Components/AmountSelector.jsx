export function AmountSelector({ selectedAmount, onAmountSelect, className = "" }) {
    const amounts = [
        { id: '50k', label: '50k' },
        { id: '100k', label: '100k' },
        { id: '150k', label: '150k' }
    ];

    return (
        <div className={`flex flex-row gap-2 sm:gap-4 justify-center ${className}`}>
            {amounts.map((amount) => (
                <button 
                    key={amount.id}
                    onClick={() => onAmountSelect(amount.id)} 
                    className={`grid place-items-center py-3 px-3 sm:py-4 sm:px-6 text-sm sm:text-lg md:text-xl rounded-lg border transition-all flex-1 max-w-[120px] sm:min-w-[150px] ${
                        selectedAmount === amount.id 
                            ? 'bg-gradient-to-br from-[#0B111D] to-[#286729] border-green shadow-lg' 
                            : 'hover:brightness-125 bg-[#232934] border-[#8D8D8D]'
                    }`}
                >
                    {amount.label}
                </button>
            ))}
        </div>
    );
}