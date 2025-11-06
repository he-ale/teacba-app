import { useParams } from "react-router";

export const FatekPage = () => {
  const {name}= useParams();
  return (
    <div className="relative h-screen pt-40 bg bg-white">FatekPage {name} works</div>
  )
}

export default FatekPage;