import React from "react";
import { Routes, Route } from "react-router-dom";

import Unauthorised from "../../pages/404/Unauthorised";
//Import All Components
import * as Pages from "./Pages";
import BlowerDivision from "../../pages/BlowerDivision";
import VacuumSystems from "../../pages/VacuumSystems";
import OtherProductsProjects from "../../pages/OtherProductsProjects";
import Application from "../../pages/Applications/Application";
// ✅ Import Applications
import LimeCalcination from "../../pages/Applications/LimeCalcination";
import chemical from "../../pages/Applications/chemical";
import Food from "../../pages/Applications/Food";
import HVAC from "../../pages/Applications/HVAC";
import Landfill from "../../pages/Applications/Landfill";
import Wastewater from "../../pages/Applications/Wastewater";
import PowerGeneration from "../../pages/Applications/PowerGeneration";
// import mixedgas from "../../pages/Applications/mixedgas";
// import driplants from "../../pages/Applications/driplants";
// import fluidbedcombustion from "../../pages/Applications/fluidbedcombustion";
// import digestergasprocessing from "../../pages/Applications/digestergasprocessing";
// import fluegasdesulphurisation from "../../pages/Applications/fluegasdesulphurisation";
// import steelmetalprocessing from "../../pages/Applications/steelmetalprocessing";
// import environmentalsystems from "../../pages/Applications/environmentalsystems";
// import pneumaticconveying from "../../pages/Applications/pneumaticconveying";
// import processairsupply from "../../pages/Applications/processairsupply";
// import powerplants from "../../pages/Applications/powerplants";
// import cementplants from "../../pages/Applications/cementplants";
// import refineries from "../../pages/Applications/refineries";
// import metallurgy from "../../pages/Applications/metallurgy";
// import bulkmaterialloading from "../../pages/Applications/bulkmaterialloading";
// import silovehicleoperations from "../../pages/Applications/silovehicleoperations";
import Services from "../../pages/Services";
import ClawVacuum from "../../pages/Products/ClawVacuum/ClawVacuum";
import ScrewBlower from "../../pages/Products/ScrewBlower/ScrewBlower";
import LiquidRingCompressors from "../../pages/Products/LiquidRingCompressors/LiquidRingCompressors";
import withPageSeo from "../../seo/withPageSeo";
import { PAGE_SEO_CONFIG } from "../../seo/pageSeoConfig";

const ROUTE_DEFINITIONS = [
  { path: "/", component: Pages.HomePage },
  { path: "/new", component: Pages.HomeV2 },
  { path: "/welcome-from-ceo", component: Pages.WelcomeFromCEO },
  { path: "/application", component: Application },
  { path: "/services", component: Services },
  // { path: "/lime-calcination", component: LimeCalcination },
  // { path: "/chemical", component: chemical },
  // { path: "/food", component: Food },
  // { path: "/hvac", component: HVAC },
  // { path: "/landfill", component: Landfill },
  // { path: "/wastewater", component: Wastewater },
  // { path: "/powergeneration", component: PowerGeneration },
  // { path: "/mixedgas", component: mixedgas },
  // { path: "/driplants", component: driplants },
  // { path: "/fluidbedcombustion", component: fluidbedcombustion },
  // { path: "/digestergasprocessing", component: digestergasprocessing },
  // { path: "/fluegasdesulphurisation", component: fluegasdesulphurisation },
  // { path: "/steelmetalprocessing", component: steelmetalprocessing },
  // { path: "/environmentalsystems", component: environmentalsystems },
  // { path: "/pneumaticconveying", component: pneumaticconveying },
  // { path: "/processairsupply", component: processairsupply },
  // { path: "/powerplants", component: powerplants },
  // { path: "/cementplants", component: cementplants },
  // { path: "/refineries", component: refineries },
  // { path: "/metallurgy", component: metallurgy },
  // { path: "/bulkmaterialloading", component: bulkmaterialloading },
  // { path: "/silovehicleoperations", component: silovehicleoperations },
  { path: "/about", component: Pages.AboutUs },
  { path: "/history", component: Pages.History },
  { path: "/plants", component: Pages.Plants },
  { path: "/mission-and-vision", component: Pages.MissionVision },
  { path: "/leadership", component: Pages.Leadership },
  { path: "/introduction", component: Pages.QualityTesting },
  { path: "/engineering-design", component: Pages.EngineeringDesign },
  { path: "/health-and-safety", component: Pages.HealthSafety },
  { path: "/certificates", component: Pages.Certificates },
  { path: "/blower-division", component: BlowerDivision },
  { path: "/vacuum-systems", component: VacuumSystems },
  { path: "/other-products-projects", component: OtherProductsProjects },
  { path: "/rotary-piston-blowers", component: Pages.RotaryTwinLobeBlowers },
  { path: "/rotarytrilobeblowers", component: Pages.RotaryTriLobeBlowers },
  { path: "/screwblower", component: ScrewBlower },
  { path: "/clawvacuum", component: ClawVacuum },
  { path: "/liquidringcompressors", component: LiquidRingCompressors },
  { path: "/process-gas-blowers", component: Pages.ProcessGasBlowers },
  { path: "/turbo-blowers", component: Pages.TurboBlowers },
  {
    path: "/super-helical-hybrid-blower",
    component: Pages.HybridHelicalBlowers,
  },
  { path: "/truck-blowers", component: Pages.TruckBlowers },
  {
    path: "/bio-gas-blowers-compressors",
    component: Pages.BioGasBlowersCompressors,
  },
  { path: "/air-injection", component: Pages.AirInjection },
  {
    path: "/rotary-sliding-vane-compressors",
    component: Pages.RotarySlidingVaneCompressors,
  },
  {
    path: "/centrifugal-fans-blowers",
    component: Pages.CentrifugalFansAndBlowers,
  },
  { path: "/sr-series-blowers", component: Pages.SRSeriesBlowers },
  { path: "/dry-screw-vacuum-pump", component: Pages.DryScrewVaccumPump },
  { path: "/liquid-ring-vacuum-pumps", component: Pages.LiquidRingVaccumPumps },
  { path: "/oil-vane-vacuum-pump-2", component: Pages.OilVaneVacuumPump },
  {
    path: "/mechanical-vacuum-boosters",
    component: Pages.MechanicalVaccumBoosters,
  },
  { path: "/mvr-blowers", component: Pages.MVRBlowers },
  {
    path: "/vacuum-systems-and-packages",
    component: Pages.VaccumSystemsPackages,
  },
  { path: "/condenser-exhausters", component: Pages.CondenserExhausters },
  // {
  //   path: "/shell-and-tube-type-heat-exchangers",
  //   component: Pages.ShellTubeHeatExchangers,
  // },
  // {
  //   path: "/acoustic-enclosures-and-silencers",
  //   component: Pages.AcousticEnclosuresSilencers,
  // },
  { path: "/events", component: Pages.Events },
  { path: "/testimonials", component: Pages.Testimonials },
  { path: "/awards", component: Pages.Awards },
  { path: "/career", component: Pages.Career },
  { path: "/gallery", component: Pages.Gallery },
  { path: "/product-knowledge-base", component: Pages.ProductKnowledgeBase },
  { path: "/contact-us", component: Pages.Contact },
];

const ROUTES_WITH_SEO = ROUTE_DEFINITIONS.map(({ path, component, seo }) => {
  // Get the SEO config for this path from PAGE_SEO_CONFIG
  const pageSeoConfig = PAGE_SEO_CONFIG[path] || {};
  
  // Debug: Log schema for rotary-piston-blowers
  if (path === '/rotary-piston-blowers') {
    console.log('🔍 DEBUG - OptimizedRoutes.jsx');
    console.log('Path:', path);
    console.log('pageSeoConfig:', pageSeoConfig);
    console.log('Has schema in config?', !!pageSeoConfig.schema);
    console.log('Schema value:', pageSeoConfig.schema);
  }
  
  return {
    path,
    Component: withPageSeo(component, { path, ...pageSeoConfig, ...seo }),
  };
});

const NotFoundRoute = withPageSeo(Unauthorised, {
  path: "/404",
  title: "Swamatics | Page Not Found",
  description:
    "The page you are looking for could not be found. Explore Swamatics products, services, and solutions.",
  noindex: true,
});

const OptimizedRoutes = () => {
  return (
    <Routes>
      {ROUTES_WITH_SEO.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<NotFoundRoute />} />
    </Routes>
  );
};

export default OptimizedRoutes;
