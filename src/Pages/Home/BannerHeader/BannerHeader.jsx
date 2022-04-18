import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../../../assets/80356-online-learning.json";

const BannerHeader = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default BannerHeader;
