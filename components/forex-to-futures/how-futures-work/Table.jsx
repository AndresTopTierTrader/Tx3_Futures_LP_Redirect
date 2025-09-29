export const FuturesTable = () => {
    const instruments = [
        { symbol: 'ES', description: 'S&P 500', tickSize: '.25', tickValue: '$12,50' },
        { symbol: 'NQ', description: 'Nasdaq 100', tickSize: '.25', tickValue: '$5,00' },
        { symbol: 'YM', description: 'Dow', tickSize: '1', tickValue: '$5,00' },
        { symbol: '6E', description: 'Euro FX', tickSize: '.00005', tickValue: '$6,25' },
        { symbol: 'CL', description: 'Crude Oil', tickSize: '.01', tickValue: '$10,00' },
        { symbol: 'GC', description: 'Gold', tickSize: '.10', tickValue: '$10,00' },
    ];

    return (
        <>
            <div className="hidden md:flex p-4 justify-center">
                <div className="w-full max-w-4xl overflow-hidden rounded-xl">
                    <table className="w-full border-collapse rounded-xl bg-gradient-to-br from-[#60F94B]/10 via-[#60F94B]/0 to-[#60F94B]/0">
                        <thead>
                            <tr className="text-white">
                                <th className="border border-border p-3 text-left">Instrument</th>
                                <th className="border border-border p-3 text-left">Description</th>
                                <th className="border border-border p-3 text-left">Tick Size</th>
                                <th className="border border-border p-3 text-left">Tick Value</th>
                            </tr>
                        </thead>
                        <tbody className="text-modest">
                            {instruments.map((instrument, index) => (
                                <tr key={instrument.symbol} className="bg-opacity-40 text-modest">
                                    <td className="border border-border p-3">{instrument.symbol}</td>
                                    <td className="border border-border p-3">{instrument.description}</td>
                                    <td className="border border-border p-3">{instrument.tickSize}</td>
                                    <td className="border border-border p-3">{instrument.tickValue}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="space-y-4 md:hidden">
                <div class="bg-white/5 rounded-lg p-4 shadow">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-lg font-bold">ES</span>
                        <span class="text-sm bg-blue-900 px-2 py-1 rounded">S&P 500</span>
                    </div>
                    <div class="grid grid-cols-2 gap-2 text-sm">
                        <div>
                            <p class="text-gray-400">Tick Size</p>
                            <p class="font-medium">.25</p>
                        </div>
                        <div>
                            <p class="text-gray-400">Tick Value</p>
                            <p class="font-medium text-green-400">$12,50</p>
                        </div>
                    </div>
                </div>

                <div class="bg-white/5 rounded-lg p-4 shadow">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-lg font-bold">NQ</span>
                        <span class="text-sm bg-blue-900 px-2 py-1 rounded">Nasdaq 100</span>
                    </div>
                    <div class="grid grid-cols-2 gap-2 text-sm">
                        <div>
                            <p class="text-gray-400">Tick Size</p>
                            <p class="font-medium">.25</p>
                        </div>
                        <div>
                            <p class="text-gray-400">Tick Value</p>
                            <p class="font-medium text-green-400">$5,00</p>
                        </div>
                    </div>
                </div>

                <div class="bg-white/5 rounded-lg p-4 shadow">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-lg font-bold">YM</span>
                        <span class="text-sm bg-blue-900 px-2 py-1 rounded">Dow</span>
                    </div>
                    <div class="grid grid-cols-2 gap-2 text-sm">
                        <div>
                            <p class="text-gray-400">Tick Size</p>
                            <p class="font-medium">1</p>
                        </div>
                        <div>
                            <p class="text-gray-400">Tick Value</p>
                            <p class="font-medium text-green-400">$5,00</p>
                        </div>
                    </div>
                </div>

                <div class="bg-white/5 rounded-lg p-4 shadow">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-lg font-bold">6E</span>
                        <span class="text-sm bg-blue-900 px-2 py-1 rounded">Euro FX</span>
                    </div>
                    <div class="grid grid-cols-2 gap-2 text-sm">
                        <div>
                            <p class="text-gray-400">Tick Size</p>
                            <p class="font-medium">.00005</p>
                        </div>
                        <div>
                            <p class="text-gray-400">Tick Value</p>
                            <p class="font-medium text-green-400">$6,25</p>
                        </div>
                    </div>
                </div>

                <div class="bg-white/5 rounded-lg p-4 shadow">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-lg font-bold">CL</span>
                        <span class="text-sm bg-blue-900 px-2 py-1 rounded">Crude Oil</span>
                    </div>
                    <div class="grid grid-cols-2 gap-2 text-sm">
                        <div>
                            <p class="text-gray-400">Tick Size</p>
                            <p class="font-medium">.01</p>
                        </div>
                        <div>
                            <p class="text-gray-400">Tick Value</p>
                            <p class="font-medium text-green-400">$10,00</p>
                        </div>
                    </div>
                </div>

                <div class="bg-white/5 rounded-lg p-4 shadow">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-lg font-bold">GC</span>
                        <span class="text-sm bg-blue-900 px-2 py-1 rounded">Gold</span>
                    </div>
                    <div class="grid grid-cols-2 gap-2 text-sm">
                        <div>
                            <p class="text-gray-400">Tick Size</p>
                            <p class="font-medium">.10</p>
                        </div>
                        <div>
                            <p class="text-gray-400">Tick Value</p>
                            <p class="font-medium text-green-400">$10,00</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};