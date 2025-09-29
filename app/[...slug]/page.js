import LoadingRedirection from "../../components/common/LoadingRedirection";

export const metadata = {
  title: "Tx3 Funding Futures | Redirecting...",
  description: "Redirecting to Tx3 Funding Futures platform...",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CatchAllPage() {
  return (
    <div className="flex flex-col h-screen">
      <LoadingRedirection />
    </div>
  );
}
