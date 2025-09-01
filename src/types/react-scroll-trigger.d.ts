declare module "react-scroll-trigger" {
  import * as React from "react";

  export interface ScrollTriggerProps {
    onEnter?: () => void;
    onExit?: () => void;
    children: React.ReactNode;
  }

  const ScrollTrigger: React.FC<ScrollTriggerProps>;
  export default ScrollTrigger;
}
