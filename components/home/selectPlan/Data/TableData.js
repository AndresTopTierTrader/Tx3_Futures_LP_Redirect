// Function to update el parameter for A/B testing
export const updateElParam = (url, accountType, variant = 'B') => {
    return url.replace('el=HomePageTable', `el=HomePageTable${accountType}ab${variant}`);
};

// Account data configuration
export const ACCOUNTS = {
    '50k': {
        id: '50k',
        name: '50k',
        starter: {
            price: 70,
            profitTarget: '$3,000',
            maxContracts: '3',
            dailyLossLimit: '$1,200',
            trailingMaxDrawdown: '$2,500',
            drawdownMode: 'EOD',
            activationFee: 'N/A',
            resetFee: '$75',
            scalingRules: 'Yes',
            microScaling: 'Yes',
            microScalingFunded: 'Yes',
            consistencyRule: 'Yes',
            evalConsistencyRule: 'N/A',
            CTA: updateElParam('https://futures.tx3markets.com/checkout/?add-to-cart=1498&el=HomePageTable&hcategory=June2025&htrafficsource=Website', '50k')
        },
        pro: {
            price: 150,
            profitTarget: '$4,000',
            maxContracts: '5',
            dailyLossLimit: 'N/A',
            trailingMaxDrawdown: '$2,000',
            drawdownMode: 'EOD',
            activationFee: 'N/A',
            resetFee: '$150',
            scalingRules: 'N/A',
            microScaling: 'N/A',
            microScalingFunded: 'N/A',
            consistencyRule: 'N/A',
            evalConsistencyRule: 'N/A',
            CTA: updateElParam('https://futures.tx3markets.com/checkout/?add-to-cart=1469&el=HomePageTable&hcategory=June2025&htrafficsource=Website', '50k')
        }
    },
    '100k': {
        id: '100k',
        name: '100k',
        starter: {
            price: 135,
            profitTarget: '$6,000',
            maxContracts: '6',
            dailyLossLimit: '$2,400',
            trailingMaxDrawdown: '$3,500',
            drawdownMode: 'EOD',
            activationFee: 'N/A',
            resetFee: '$135',
            scalingRules: 'Yes',
            microScaling: 'Yes',
            microScalingFunded: 'Yes',
            consistencyRule: 'Yes',
            evalConsistencyRule: 'N/A',
            CTA: updateElParam('https://futures.tx3markets.com/checkout/?add-to-cart=1499&el=HomePageTable&hcategory=June2025&htrafficsource=Website', '100k')
        },
        pro: {
            price: 250,
            profitTarget: '$8,000',
            maxContracts: '10',
            dailyLossLimit: 'N/A',
            trailingMaxDrawdown: '$3,000',
            drawdownMode: 'EOD',
            activationFee: 'N/A',
            resetFee: '$250',
            scalingRules: 'N/A',
            microScaling: 'N/A',
            microScalingFunded: 'N/A',
            consistencyRule: 'N/A',
            evalConsistencyRule: 'N/A',
            CTA: updateElParam('https://futures.tx3markets.com/checkout/?add-to-cart=1495&el=HomePageTable&hcategory=June2025&htrafficsource=Website', '100k')
        }
    },
    '150k': {
        id: '150k',
        name: '150k',
        starter: {
            price: 200,
            profitTarget: '$12,000',
            maxContracts: '9',
            dailyLossLimit: '$3,600',
            trailingMaxDrawdown: '$5,000',
            drawdownMode: 'EOD',
            activationFee: 'N/A',
            resetFee: '$200',
            scalingRules: 'Yes',
            microScaling: 'Yes',
            microScalingFunded: 'Yes',
            consistencyRule: 'Yes',
            evalConsistencyRule: 'N/A',
            CTA: updateElParam('https://futures.tx3markets.com/checkout/?add-to-cart=1500&el=HomePageTable&hcategory=June2025&htrafficsource=Website', '150k')
        },
        pro: {
            price: 350,
            profitTarget: '$12,000',
            maxContracts: '15',
            dailyLossLimit: 'N/A',
            trailingMaxDrawdown: '$4,000',
            drawdownMode: 'EOD',
            activationFee: 'N/A',
            resetFee: '$350',
            scalingRules: 'N/A',
            microScaling: 'N/A',
            microScalingFunded: 'N/A',
            consistencyRule: 'N/A',
            evalConsistencyRule: 'N/A',
            CTA: updateElParam('https://futures.tx3markets.com/checkout/?add-to-cart=1496&el=HomePageTable&hcategory=June2025&htrafficsource=Website', '150k')
        }
    }
};

// Helper function to update CTAs with A/B variant
export const updateCTAsWithVariant = (abVariant) => {
    Object.keys(ACCOUNTS).forEach(accountKey => {
        const account = ACCOUNTS[accountKey];
        account.starter.CTA = account.starter.CTA.replace(/ab[AB]/, `ab${abVariant}`);
        account.pro.CTA = account.pro.CTA.replace(/ab[AB]/, `ab${abVariant}`);
    });
};