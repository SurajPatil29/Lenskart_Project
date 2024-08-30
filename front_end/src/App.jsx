import { useLocation } from "react-router-dom";
import { FooterMain } from "./footer/FooterMain"
import { HeaderMain } from "./headers/headerMain"
import { AllRoutes } from "./routers/AllRoutes"



function App() {
  const location = useLocation();

  // Determine if we should show HeaderMain and FooterMain based on the current path
  const shouldHideHeaderAndFooter = location.pathname === '/signUp' || location.pathname === '/login';

  return (
    <>
      {!shouldHideHeaderAndFooter && <HeaderMain />}
      <AllRoutes />
      {!shouldHideHeaderAndFooter && <FooterMain />}
    </>
  );
}

export default App
