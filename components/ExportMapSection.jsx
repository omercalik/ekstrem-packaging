// components/ExportMapSection.jsx
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

// countries prop expects: [{ id: "de", tr: "Almanya", en: "Germany" }, ...]
const ExportMapSection = ({ countries }) => {
  const t = useTranslations("ExportMapSection");
  const locale = useLocale();

  const countryList = Array.isArray(countries) ? countries : [];

  const highlightedColor = "#F37021";
  const defaultColor = "#E5E7EB";
  const strokeColor = "#FFFFFF";
  const listTextColor = "text-cyan-700";

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
          aria-label={t("mapAriaLabel") || "World map showing export countries"} // Add mapAriaLabel to messages
        >
          <Sphere stroke="#CBD5E1" strokeWidth={0.5} id="sphere" />
          <Graticule stroke="#CBD5E1" strokeWidth={0.5} />
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryNameFromMap = geo.properties.name;
                const isExportCountry = countryList.some(
                  (countryObj) =>
                    countryNameFromMap &&
                    countryObj.en &&
                    countryNameFromMap.toLowerCase() ===
                      countryObj.en.toLowerCase() // Match based on English name from map data
                );

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
                        fill: isExportCountry ? "#D95F1A" : "#CFD8DC",
                        outline: "none",
                        cursor: "pointer",
                      },
                      pressed: {
                        fill: isExportCountry ? "#BF5415" : "#B0BEC5",
                        outline: "none",
                      },
                    }}
                    aria-label={countryNameFromMap} // Use the name from map data for ARIA, tooltip shows localized
                  >
                    {/* Tooltip can show localized name if available */}
                    <title>
                      {isExportCountry
                        ? countryList.find(
                            (c) =>
                              c.en.toLowerCase() ===
                              countryNameFromMap.toLowerCase()
                          )?.[locale] || countryNameFromMap
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
            {t("mapNote.beforeSpan")} {/* "Countries marked with" */}
            <span style={{ color: highlightedColor, fontWeight: "bold" }}>
              {" "}
              ●{" "}
            </span>
            {t("mapNote.afterSpan")}{" "}
            {/* "on the map are the main regions we export to." */}
          </p>
          {countryList && countryList.length > 0 && (
            <div>
              <h3
                className={`text-lg font-semibold ${listTextColor} mb-4 text-center`}
              >
                {t("exportedCountriesTitle")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                {countryList
                  .slice()
                  .sort((a, b) =>
                    (a[locale] || a.en).localeCompare(b[locale] || b.en, locale)
                  ) // Sort by localized name
                  .map((country) => (
                    <p
                      key={country.id || country.en}
                      className={`${listTextColor} text-sm`}
                    >
                      {country[locale] || country.en}{" "}
                      {locale !== "en" && country.en ? ` / ${country.en}` : ""}{" "}
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
