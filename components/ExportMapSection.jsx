// File: omercalik/ekstrem-packaging/ekstrem-packaging-e487f92652d54e82cd3d7a93d73c5f07d5be1b0b/components/ExportMapSection.jsx
"use client";

import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from "react-simple-maps";
import { useTranslations, useLocale } from "next-intl";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const ExportMapSection = ({ countries }) => {
  const t = useTranslations("ExportMapSection");
  const locale = useLocale(); // Gets the current locale ('en' or 'tr')

  const countryList = Array.isArray(countries) ? countries : [];

  const highlightedColor = "#F37021"; // brandOrange
  const defaultColor = "#E5E7EB"; // A light gray, consider slate-200 or similar
  const strokeColor = "#FFFFFF"; // White
  const listTextColor = "text-cyan-700"; // brandBlue-darker perhaps

  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-base font-semibold uppercase tracking-wider text-orange-500">
            {t("mainTitle")}
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-cyan-800 sm:text-4xl">
            {t("subTitle")}
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            {t("description")}
          </p>
        </div>
      </div>

      <div className="w-full h-[75vh] bg-slate-100">
        <ComposableMap
          projectionConfig={{
            rotate: [-10, 0, 0],
            scale: 140,
          }}
          style={{ width: "100%", height: "100%" }}
          aria-label={t("mapAriaLabel") || "World map showing export countries"}
        >
          <Sphere stroke="#CBD5E1" strokeWidth={0.5} id="sphere" />
          <Graticule stroke="#CBD5E1" strokeWidth={0.5} />
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryNameFromMap = geo.properties.name;
                const matchedCountry = countryList.find(
                  (countryObj) =>
                    countryNameFromMap &&
                    countryObj.en &&
                    countryNameFromMap.toLowerCase() ===
                      countryObj.en.toLowerCase()
                );
                const isExportCountry = Boolean(matchedCountry);

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isExportCountry ? highlightedColor : defaultColor}
                    stroke={strokeColor}
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: {
                        fill: isExportCountry ? "#D95F1A" : "#CFD8DC", // brandOrange-dark or slate-300
                        outline: "none",
                        cursor: "pointer",
                      },
                      pressed: {
                        fill: isExportCountry ? "#BF5415" : "#B0BEC5", // brandOrange-darker or slate-400
                        outline: "none",
                      },
                    }}
                    aria-label={countryNameFromMap}
                  >
                    <title>
                      {isExportCountry
                        ? matchedCountry[locale] || matchedCountry.en // Show localized name in tooltip, fallback to English
                        : countryNameFromMap}
                    </title>
                  </Geography>
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8 text-left md:text-center">
          <p className="text-sm text-slate-500 text-center mb-6">
            {t("mapNote.beforeSpan")}
            <span style={{ color: highlightedColor, fontWeight: "bold" }}>
              {" "}
              ●{" "}
            </span>
            {t("mapNote.afterSpan")}
          </p>
          {countryList && countryList.length > 0 && (
            <div>
              <h3
                className={`text-lg font-semibold ${listTextColor} mb-4 text-center`}
              >
                {t("exportedCountriesTitle")}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-2">
                {countryList
                  .slice()
                  .sort((a, b) =>
                    (a[locale] || a.en).localeCompare(b[locale] || b.en, locale)
                  )
                  .map((country) => (
                    <p
                      key={country.id} // Use the unique ID (ISO code) as key
                      className={`${listTextColor} text-sm text-center md:text-left`} // Centered on small, left on medium+
                    >
                      {country[locale] || country.en}{" "}
                      {/* MODIFIED: Show only localized name or English fallback */}
                    </p>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExportMapSection;
