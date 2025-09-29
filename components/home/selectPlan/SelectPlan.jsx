"use client";

import { SectionLayout } from "@/components/common/SectionLayout";
import { ChallengeSelector } from "./Components/ChallengeSelector";
import { AmountSelector } from "./Components/AmountSelector";
import OrderSummary from "./Components/OrderSummary";
import CardTable from "./Components/CardTable";
import ShowMoreButton from "./Components/ShowMoreButton";
import { ACCOUNTS, updateCTAsWithVariant } from "./Data/TableData";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { track } from "@vercel/analytics/react";

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    <path d="M12 9h.01" />
    <path d="M11 12h1v4h1" />
  </svg>
);

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M6 9l6 6l6 -6" />
  </svg>
);

// Custom hook to detect mobile vs desktop
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, [breakpoint]);

  return isMobile;
};

export function SelectPlan() {
  const [abVariant] = useState(() => (Math.random() < 0.5 ? "A" : "B"));
  const defaultAmount = abVariant === "A" ? "50k" : "100k";

  const [selectedChallenge, setSelectedChallenge] = useState("starter");
  const [selectedAmount, setSelectedAmount] = useState(defaultAmount);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [showAllCards, setShowAllCards] = useState(false);

  const isMobile = useIsMobile();
  const selectedAccount = ACCOUNTS[selectedAmount];
  const selectedPlanData = selectedAccount?.[selectedChallenge];

  useEffect(() => {
    updateCTAsWithVariant(abVariant);
  }, [abVariant]);

  useEffect(() => {
    track("select_plan_view", {
      default_amount: defaultAmount,
      ab_variant: abVariant,
      page: "select_plan",
      initial_challenge: selectedChallenge,
      initial_amount: selectedAmount,
    });
  }, []);

  const handleChallengeSelection = (challengeType) => {
    const previousChallenge = selectedChallenge;
    setSelectedChallenge(challengeType);

    track("challenge_selection", {
      challenge_type: challengeType,
      previous_challenge: previousChallenge,
      current_amount: selectedAmount,
      ab_variant: abVariant,
      default_amount: defaultAmount,
    });
  };

  const handleAmountSelection = (amountId) => {
    const previousAmount = selectedAmount;
    setSelectedAmount(amountId);

    track("amount_selection", {
      amount_type: amountId,
      previous_amount: previousAmount,
      current_challenge: selectedChallenge,
      ab_variant: abVariant,
      default_amount: defaultAmount,
    });
  };

  const handleCTAClick = (amountType, challengeType, price) => {
    track("select_plan_cta_click", {
      amount_type: amountType,
      challenge_type: challengeType,
      price: price,
      ab_variant: abVariant,
      default_amount: defaultAmount,
      selected_matches_default: amountType === defaultAmount,
    });
  };

  const handleShowMoreToggle = () => {
    setShowAllCards(!showAllCards);

    track("plan_details_toggle", {
      action: showAllCards ? "show_less" : "show_more",
      challenge_type: selectedChallenge,
      amount_type: selectedAmount,
      ab_variant: abVariant,
    });
  };

  const getPlanDetails = (planData) => {
    if (!planData) return [];

    return [
      {
        title: "Profit Target",
        value: planData.profitTarget,
      },
      {
        title: "Max Contracts",
        value: planData.maxContracts,
      },
      {
        title: "Daily Loss Limit",
        value: planData.dailyLossLimit,
      },
      {
        title: "Trailing Max Drawdown",
        value: planData.trailingMaxDrawdown,
      },
      {
        title: "Drawdown Mode",
        value: planData.drawdownMode,
      },
      {
        title: "Activation Fee",
        value: planData.activationFee,
      },
      {
        title: "Micro Scaling Funded",
        value: planData.microScalingFunded,
      },
      {
        title: "Consistency Rule",
        value: planData.consistencyRule,
      },
      {
        title: "Eval Consistency Rule",
        value: planData.evalConsistencyRule,
      },
    ];
  };

  const allPlanDetails = getPlanDetails(selectedPlanData);

  const displayedPlanDetails = showAllCards
    ? allPlanDetails
    : allPlanDetails.slice(0, isMobile ? 2 : 4);

  const shouldShowButton = allPlanDetails.length > (isMobile ? 2 : 4);

  return (
    <SectionLayout>
      <section id="challenge-box">
        <h2 className="text-center grid place-items-center text-3xl md:text-5xl mb-8">
          Select Your Plan
        </h2>

        {/* Challenge Type Selector */}
        <ChallengeSelector
          selectedChallenge={selectedChallenge}
          onChallengeSelect={handleChallengeSelection}
          className="mb-8"
        />

        {/* Amount Selector */}
        <AmountSelector
          selectedAmount={selectedAmount}
          onAmountSelect={handleAmountSelection}
          className="mb-8"
        />

        {/* Plan Details Grid */}
        <div className="mx-auto max-w-[650px] mb-8 relative">
          <div
            className="w-full p-4 md:p-6"
            style={{
              border: "1px solid #4D516A",
              borderRadius: "12px",
              background: "transparent",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {displayedPlanDetails.map((detail, index) => (
                <CardTable
                  key={index}
                  title={detail.title}
                  value={detail.value}
                />
              ))}
            </div>
          </div>

          {/* Show More/Less Button */}
          {shouldShowButton && (
            <div
              className="absolute left-1/2 transform -translate-x-1/2"
              style={{ bottom: "-45px" }}
            >
              <ShowMoreButton
                isExpanded={showAllCards}
                onToggle={handleShowMoreToggle}
                locale="en"
              />
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="mx-auto max-w-[650px] mb-8">
          <OrderSummary
            challengeType={selectedChallenge}
            accountAmount={selectedAmount}
            price={selectedPlanData?.price}
            ctaUrl={selectedPlanData?.CTA || "#"}
            ctaText="Get Started Now"
            onCTAClick={() =>
              selectedAccount?.name &&
              handleCTAClick(
                selectedAccount.name,
                selectedChallenge,
                selectedPlanData?.price
              )
            }
            isButtonDisabled={!selectedAccount?.name}
          />
        </div>

        {/* Info Panel */}
        <div className="mx-auto max-w-[650px]">
          <article className="text-modest text-xs">
            {/* Starter Accounts Info - Only show if starter is selected */}
            {selectedChallenge === "starter" && (
              <div className="py-2 flex flex-col">
                <div
                  onClick={() =>
                    setDropdownOpen(dropdownOpen === null ? "beginner" : null)
                  }
                  className="cursor-pointer flex items-center justify-between pb-2 border-b border-modest"
                >
                  <span className="text-md gap-2 flex items-center">
                    <InfoIcon />
                    Starter Accounts
                  </span>
                  <motion.span
                    animate={{
                      rotate: dropdownOpen === "beginner" ? 180 : 0,
                    }}
                  >
                    <ChevronDown />
                  </motion.span>
                </div>
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: dropdownOpen === "beginner" ? "auto" : 0,
                    opacity: dropdownOpen === "beginner" ? 1 : 0,
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  style={{ overflow: "hidden" }}
                  className="flex flex-col gap-3 list-disc mt-2 pl-4"
                >
                  <li>
                    40% consistency rule during the simulated funded stage means
                    that the profits from one trading day can not equal or be
                    greater than 40% of total profits made.
                  </li>
                  <li>
                    5 winning days $100 for 50K, $200 for 100K, $300 for 150K
                  </li>
                  <li>
                    Max Payout after 5 winning days 1200 -50K, 2400 -100k, 3600
                    - 150K
                  </li>
                  <li>Payout minimum is $250</li>
                </motion.ul>
              </div>
            )}

            {/* Pro Accounts Info - Only show if pro is selected */}
            {selectedChallenge === "pro" && (
              <div className="mt-6 py-2">
                <div
                  onClick={() =>
                    setDropdownOpen(dropdownOpen === null ? "pro" : null)
                  }
                  className="cursor-pointer flex items-center justify-between pb-2 border-b border-modest"
                >
                  <span className="text-md gap-2 flex items-center">
                    <InfoIcon />
                    Pro Accounts
                  </span>
                  <motion.span
                    animate={{
                      rotate: dropdownOpen === "pro" ? 180 : 0,
                    }}
                  >
                    <ChevronDown />
                  </motion.span>
                </div>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: dropdownOpen === "pro" ? "auto" : 0,
                    opacity: dropdownOpen === "pro" ? 1 : 0,
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <ul className="flex flex-col gap-3 list-disc mt-2 pl-4">
                    <p className="-ml-4">Buffer Zone:</p>
                    <li>50K: $52,100</li>
                    <li>100K: $103,100</li>
                    <li>150K: $154,600</li>
                  </ul>

                  <p className="mt-3">
                    You can request a payout of 60% of profits before reaching
                    the full Buffer Zone (minimum $1,000 per request). The
                    remaining 40% stays in your account to support further
                    trading.
                  </p>
                </motion.div>
              </div>
            )}
          </article>
        </div>
      </section>
    </SectionLayout>
  );
}
