import { useLocation } from "react-router-dom";
import DisplayCards from "../components/display/DisplayCards";
import Display from "./Display";

function DisplayAll() {
  const location = useLocation();
  const pathParts = location.pathname.split("/");

  const isCardsPage = pathParts.length === 2 && pathParts[1] === "displayAll";

  const isSearchedPage =
    pathParts.length === 4 && pathParts[1] === "displayAll";

  const isDisplayPage = isSearchedPage && pathParts[3] !== "displayAll";

  return (
    <>
      {isCardsPage && <DisplayCards />}
      {isDisplayPage && <Display />}
    </>
  );
}

export default DisplayAll;
