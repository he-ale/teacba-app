import { useParams } from "react-router";

export const SedePage = () => {
  const {name}= useParams();
  return (
    <div className="relative h-screen pt-40 bg bg-white">SedePage {name} works</div>
  )
}

export default SedePage;
