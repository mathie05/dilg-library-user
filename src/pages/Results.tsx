import { useLocation, useParams } from "react-router-dom";
import SearchResults from "../components/search/SearchResults";
import Display from "./Display";

function Results() {
  const { kpTitle } = useParams<{ kpTitle: string }>();
  const location = useLocation();
  const pathParts = location.pathname.split("/");

  const isResultsPage =
    pathParts.length === 3 && pathParts[1] === "searchResults";

  const isSearchedPage =
    pathParts.length === 4 && pathParts[1] === "searchResults";

  const isDisplayPage = isSearchedPage && pathParts[3] !== "searchResults";

  return (
    <>
      {isResultsPage && <SearchResults searchTitle={kpTitle} />}
      {isDisplayPage && <Display />}
    </>
  );
}

export default Results;
