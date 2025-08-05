import { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import BookStack from "./BooksStack.json";

function LottieBookSpinner() {
  const lottieRef = useRef();

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(2); // velocità 2x
    }
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "65vh" }}>
      <Lottie
        lottieRef={lottieRef}
        animationData={BookStack}
        loop
        autoplay
        style={{ height: 200, width: 200 }}
      />
    </div>
  );
}

export default LottieBookSpinner;