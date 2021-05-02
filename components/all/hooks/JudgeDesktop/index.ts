import { useEffect, useState } from "react";
import { SP_WIDTH } from "~/constants";

export const useJudgeDesktop = (isPc: boolean) => {
  const [isDesktop, setIsDesktop] = useState(isPc);

  function judgeDevice() {
    if (window.innerWidth <= SP_WIDTH) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
  }

  useEffect(() => {
    if (window) {
      window.addEventListener("resize", judgeDevice);
    }
  }, []);

  return isDesktop;
};
