import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../../../assets/99436-404-page.json";

const NotFoundPages = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default NotFoundPages;
