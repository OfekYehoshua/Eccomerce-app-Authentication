import Footer from "../components/footer";
import HomeHeader from "../components/header";
import ResponsiveAppBar from "../components/navbar";
import SwipeableTextMobileStepper from '../components/carousel'
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Home() {

  const { user } = useSelector((state) => state.auth)

  return (
    <div className="home-container">
      <ResponsiveAppBar></ResponsiveAppBar>
        <h1>Welcome {user.fullName}</h1>
      <HomeHeader></HomeHeader>
      <Link to={'/products'}>
      <SwipeableTextMobileStepper></SwipeableTextMobileStepper>
      </Link>
      <Footer></Footer>
    </div>
  );
}
