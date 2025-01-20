import { ReactNode } from "react";

export default function HeroLayout({children} : {children : ReactNode}){
    return (
      <div className="w-[1440px] h-[737px] bg-gradient-to-b from-[#DCEFFF] via-[#F7FAFC] to-[#FFFFFF]">{
        children
      }</div>
    );
}