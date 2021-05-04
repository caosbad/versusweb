import React, { useState } from "react";
import { Link } from "gatsby";
import { findIndex, includes, map } from "lodash";
import { useLocation } from "@reach/router";

let tabs = [];

const ArtistTabs = ({ className = "", dropInfo, ...newProps }) => {
  if (dropInfo.isProfile) {
    tabs = [
      {
        name: "Collection",
        href: "collection",
      },
    ];
  } else {
    tabs = [
      {
        name: "Drops",
        href: "drops",
      },
      {
        name: "Profile",
        href: "",
      },
    ];
  }
  const location = useLocation();
  const activeTab = findIndex(
    tabs,
    (t) =>
      location.pathname ===
        `/artist/${t.href ? `${t.href}/` : ""}${
          dropInfo.slug || dropInfo.id
        }` ||
      (includes(location.pathname, "profile") && t.name === "Collection")
  );
  let finalClass = `${className} w-full flex sm:border-b tab-border relative flex-col sm:flex-row`;
  let tabClassName =
    " flex-1 sm:text-center font-light pb-3 cursor-pointer hover:font-semibold";
  let sliderClassName =
    "hidden sm:block absolute bottom-0 left-0 h-0.5 bg-black-500 transition-transform duration-300 ease-out";
  const numTabs = tabs.length;
  if (numTabs === 1) sliderClassName += " w-full";
  else if (numTabs === 2) sliderClassName += " w-1/2";
  else if (numTabs === 3) sliderClassName += " w-1/3";
  else if (numTabs === 4) sliderClassName += " w-1/4";
  else if (numTabs === 5) sliderClassName += " w-1/5";
  if (activeTab === 0) sliderClassName += " transform translate-x-0";
  else if (activeTab === 1) sliderClassName += " transform translate-x-full";
  else if (activeTab === 2) sliderClassName += " transform translate-x-double";
  else if (activeTab === 3) sliderClassName += " transform translate-x-triple";
  else if (activeTab === 4) sliderClassName += " transform translate-x-quad";
  const AllTabs = map(tabs, (t, index) => {
    return (
      <Link
        key={`${t.value}-${index}`}
        to={
          dropInfo.isProfile
            ? `#`
            : `/artist/${t.href ? `${t.href}/` : ""}${
                dropInfo.slug || dropInfo.id
              }`
        }
        className={`${tabClassName} ${
          activeTab === index ? "font-lato font-semibold" : "font-sourceSansPro"
        }`}
      >
        {t.name}
      </Link>
    );
  });
  return (
    <div className={finalClass} {...newProps}>
      {AllTabs}
      <div className={sliderClassName} />
    </div>
  );
};

export default ArtistTabs;
