import React, { useState } from "react";
import TopMenu from "../TopMenu/TopMenu";
import FloatingLanguageButton from "../FloatingLanguageButton";
import CountrySelectionModal from "../CountrySelectionModal";

const MainTemplate = ({ children }) => {
  const [isSideMenuCollapsed, setIsSideMenuCollapsed] = useState(false);
  const [isMobileSideMenuOpen, setIsMobileSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuCollapsed(!isSideMenuCollapsed);
  };

  const toggleMobileSideMenu = () => {
    setIsMobileSideMenuOpen(!isMobileSideMenuOpen);
  };

  return (
    <div className="flex w-full h-screen overflow-hidden">
      {/* Main Content */}
      <div className="flex flex-col flex-1 w-full overflow-hidden bg-white">
        <div className="sticky top-0 z-20">
          <TopMenu
            onBurgerClick={toggleMobileSideMenu}
            onDesktopBurgerClick={toggleSideMenu}
            isSideMenuCollapsed={isSideMenuCollapsed}
          />
        </div>
        <div className="flex-1 min-h-0 overflow-auto">
          <div className="w-full max-w-full">{children}</div>
        </div>
      </div>

      {/* Floating Language Button - Available on all pages */}
      <FloatingLanguageButton />

      {/* Country Selection Modal - Available globally */}
      <CountrySelectionModal />
    </div>
  );
};

export default MainTemplate;
