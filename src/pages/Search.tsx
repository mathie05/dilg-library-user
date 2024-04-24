import { useLocation } from "react-router-dom";
import Results from "./Results";
import SearchBar from "../components/search/SearchBar";

function Search() {
  const location = useLocation();
  const pathParts = location.pathname.split("/");

  const isSearchPage = location.pathname === "/";

  const isResultsPage =
    pathParts.length === 3 && pathParts[1] === "searchResults";

  const isSearchedPage =
    pathParts.length === 4 && pathParts[1] === "searchResults";

  const isDisplayPage = isSearchedPage && pathParts[3] !== "searchResults";

  const hideHeader = isResultsPage || isDisplayPage;

  return (
    <>
      {!hideHeader && <SearchBar />}

      {!isSearchPage && <Results />}
    </>
  );
}

export default Search;
