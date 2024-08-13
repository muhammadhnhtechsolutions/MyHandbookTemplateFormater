import React from "react";
import Image from "next/image";
import Logo from "@/app/assets/loader.gif";

const Loader = () => {
  return (
    <div id="loader" className={"loader"}>
      <div className={"loader_image"}>
        <Image src={Logo} alt="Loading..." height={100} width={100} />
      </div>
    </div>
  );
};

export default Loader;
