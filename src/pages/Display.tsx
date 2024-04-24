import { useParams } from "react-router-dom";
import DisplayKP from "../components/display/DisplayKP";

function Display() {
  const { kpId } = useParams<{ kpId: string }>();
  return (
    <>
      <DisplayKP docId={kpId} />
    </>
  );
}

export default Display;
