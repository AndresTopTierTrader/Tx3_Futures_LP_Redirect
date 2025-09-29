"use client";

import Link from "next/link";
import { track } from "@vercel/analytics/react";

export const Arrow = () => (
  <svg
    width="12"
    height="9"
    viewBox="0 0 12 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.28737 0.83374L10.859 4.40535L7.28737 7.97696M10.4304 4.40535H1.42993"
      stroke="currentColor"
      strokeWidth="1.14292"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CTAhref =
  "https://futures.tx3markets.com/checkout/?add-to-cart=1495&el=HomeCta&hcategory=June2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&_gl=1*k2sgsj*_gcl_au*MTk0MjQ3NDI0NS4xNzM5ODM3MjM2";

export function PrimaryButton({
  children,
  onClick = null,
  href = CTAhref,
  target = null,
  fullWidth = false,
  icon = false,
  trackName = null,
  color = "bg-green",
  textColor = "text-background",
}) {
  const handleClick = (e) => {
    // Ejecutar la función de tracking
    track(trackName);

    // Si hay una función onClick pasada como prop, ejecutarla también
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link
      target={target}
      className={`group font-medium flex items-center justify-center text-sm px-4 gap-2 py-2 ${
        fullWidth ? "w-full" : "w-fit"
      } text-nowrap rounded-lg ${textColor} cursor-pointer transition-all hover:brightness-125`}
      href={href}
      onClick={handleClick}
      style={{
        background: "linear-gradient(91deg, #65FD51 1.18%, #4FB242 140.88%)",
      }}
    >
      {children}
      {icon && (
        <span className="transition-all group-hover:translate-x-1">
          <Arrow />
        </span>
      )}
    </Link>
  );
}

export function DefaultButton({
  children,
  onClick = null,
  href = "#",
  target = null,
  fullWidth = false,
  trackName = null,
}) {
  const handleClick = (e) => {
    // Ejecutar la función de tracking
    track(trackName);

    // Si hay una función onClick pasada como prop, ejecutarla también
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link
      target={target}
      className={`flex font-medium items-center justify-center text-sm px-4 gap-2 py-2 ${
        fullWidth ? "w-full" : "w-fit"
      } text-nowrap rounded-lg border cursor-pointer transition-colors hover:bg-white/20`}
      href={href}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}

export function NoLinkButton({
  children,
  onClick = null,
  href = CTAhref,
  target = null,
  fullWidth = false,
  icon = false,
  trackName = null,
  color = "bg-green",
  textColor = "text-background",
}) {
  const handleClick = (e) => {
    // Ejecutar la función de tracking
    track(trackName);

    // Si hay una función onClick pasada como prop, ejecutarla también
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      target={target}
      className={`group font-medium flex items-center justify-center text-sm px-4 gap-2 py-2 ${
        fullWidth ? "w-full" : "w-fit"
      } text-nowrap rounded-lg ${color} ${textColor} cursor-pointer transition-all hover:brightness-125`}
      onClick={handleClick}
    >
      {children}
      {icon && (
        <span className="transition-all group-hover:translate-x-1">
          <Arrow />
        </span>
      )}
    </button>
  );
}

export function ChallengesButton({
  children,
  onClick = null,
  href,
  target = null,
  fullWidth = false,
  icon = false,
  trackName,
  color = "bg-green",
  textColor = "text-background",
}) {
  const handleClick = (e) => {
    // Ejecutar la función de tracking
    track(trackName);

    // Si hay una función onClick pasada como prop, ejecutarla también
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      target={target}
      href={href}
      onClick={() => {
        track(trackName);
      }}
      className={`group font-medium flex items-center justify-center text-sm px-4 gap-2 py-2 ${
        fullWidth ? "w-full" : "w-fit"
      } text-nowrap rounded-lg ${color} ${textColor} cursor-pointer transition-all hover:brightness-125`}
    >
      {children}
      {icon && (
        <span className="transition-all group-hover:translate-x-1">
          <Arrow />
        </span>
      )}
    </a>
  );
}
