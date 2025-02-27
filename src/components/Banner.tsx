import { PropsWithChildren } from "react";
import Recommandation from "./Recommandation";
const Banner = ({ children }: PropsWithChildren) => {
  return (
    <div className=" p-8 border-3 border-solid border-black flex flex-col gap-4 justify-end">
      <div className="flex items-center justify-end gap-2 ">{children}</div>
      <Recommandation />
    </div>
  );
};

export default Banner;
