import React from "react";
import {
  TimeIcon,
  RiskIcon,
  ProfitIcon,
  SettingsIcon,
  ConsistencyIcon,
  TargetIcon,
} from "../icons";

// Determine icon from title
const getIconForTitle = (title) => {
  const normalizedTitle = title.toLowerCase();

  const iconMap = {
    target: {
      component: TargetIcon,
      keywords: ["target", "profit", "objetivo", "objectif"],
    },
    settings: {
      component: SettingsIcon,
      keywords: [
        "contracts",
        "max contracts",
        "leverage",
        "activation",
        "fee",
        "apalancamiento",
        "levier",
      ],
    },
    risk: {
      component: RiskIcon,
      keywords: [
        "loss",
        "daily loss",
        "drawdown",
        "trailing",
        "pérdida",
        "perte",
      ],
    },
    consistency: {
      component: ConsistencyIcon,
      keywords: [
        "consistency",
        "rule",
        "eval",
        "consistencia",
        "regla",
        "consistance",
        "règle",
      ],
    },
    profit: {
      component: ProfitIcon,
      keywords: [
        "scaling",
        "funded",
        "micro",
        "payout",
        "participación",
        "partage",
      ],
    },
    time: {
      component: TimeIcon,
      keywords: [
        "mode",
        "drawdown mode",
        "días",
        "time",
        "duration",
      ],
    },
  };

  for (const { component, keywords } of Object.values(iconMap)) {
    if (keywords.some((keyword) => normalizedTitle.includes(keyword))) {
      return component;
    }
  }
  return TargetIcon;
};

const CardTable = ({
  icon: IconComponentProp,
  title,
  value,
  ...props
}) => {
  const IconComponent = IconComponentProp || getIconForTitle(title);

  const handleMouseEnter = (e) => {
    e.currentTarget.style.background =
      "linear-gradient(93deg, #151921ff 0.54%, #20341dff 100%)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.background =
      "linear-gradient(93deg, #181D28 0.5%, #263E22 100%)";
  };

  return (
    <div
      className="relative group transition-all duration-200 ease-in-out font-inter flex-shrink-0 w-full px-4 py-4 flex flex-col justify-between h-[120px] md:h-[140px]"
      style={{
        borderRadius: "12px",
        background: "linear-gradient(93deg, #181D28 0.5%, #263E22 100%)",
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={`${title}: ${value}`}
      {...props}
    >
      {/* Header Section */}
      <div className="flex items-start gap-3 flex-shrink-0">
        <div
          className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1"
          aria-hidden="true"
        >
          <IconComponent className="w-6 h-6" />
        </div>
        <div className="flex-1 min-w-0 mt-1">
          <h3 className="text-xl font-medium text-white group-hover:text-slate-100 leading-tight">
            {title}
          </h3>
        </div>
      </div>

      {/* Value Section */}
      <div className="flex items-end justify-end flex-grow">
        <span className="text-3xl md:text-4xl font-medium text-[#939BB5] text-right">
          {value || '--'}
        </span>
      </div>
    </div>
  );
};

export default CardTable;