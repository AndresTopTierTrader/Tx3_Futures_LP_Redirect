import LoadingRedirection from "../components/common/LoadingRedirection";
export const metadata = {
  title: "Tx3 Funding Futures | Funding for Futures Traders",
  description: "Get funded with Futures by Toptier Trader. Obtain a trading account of up to $150K in minutes and start earning with no time limits.",
  keywords: "futures trading, funded accounts, prop firm, trader financing, TopTier Trader, Tx3 Funding Futures, trading accounts, profit split",
  authors: [{ name: "Tx3 Funding Futures" }],
  publisher: "TX3 Funding",
  language: "en-US",
  category: "Finance",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Tx3 Funding Futures | Funding for Futures Traders",
    description: "Get a $100K funded account in just 10 minutes and start earning with our flexible plans.",
    type: "website",
    locale: "en_US",
    url: "https://tx3funding.com",
    images: [
      {
        url: "/og/home.png",
        width: 1200,
        height: 630,
        alt: "Tx3 Funding Futures Open Graph Image",
        type: "image/jpeg",
      },
    ],
  },
};



export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <LoadingRedirection />
    </div>
  );
}
