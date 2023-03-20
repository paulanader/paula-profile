import { memo } from "react";
import { BorderLight, MarginCardContent } from "./styles";

const MarginCard = () => (
  <div>
    <MarginCardContent />
    <BorderLight />
  </div>
);

export default memo(MarginCard);
