import { useEffect, useState } from "react";
import { SP_WIDTH } from "~/constants";

export const useJudgeDesktop = (isPc: boolean) => {
  const [isDesktop, setIsDesktop] = useState(isPc);
  let currentWidth = 0;

  function judgeDevice() {
    if (currentWidth === window.innerWidth) {
      return;
    }
    if (window.innerWidth <= SP_WIDTH) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
  }

  useEffect(() => {
    if (window) {
      currentWidth = window.innerWidth;
      judgeDevice();
      window.addEventListener("resize", judgeDevice);
    }
  }, []);

  return isDesktop;
};
