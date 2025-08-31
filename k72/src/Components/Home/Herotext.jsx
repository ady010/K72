import React from "react";
import Video from "./Video";

const Herotext = () => {
  return (
    <div className="text-center font-[font1] uppercase text-[9.5vw] leading-[8vw] pt-6">
      <div className="">L'étincelle</div>
      <div className="flex justify-center items-center">qui <div className="mb-7 h-[6.7vw] w-[16vw] rounded-full overflow-hidden"> <Video/> </div> génère</div>
      <div>la créativité</div>
    </div>
  );
};

export default Herotext;
