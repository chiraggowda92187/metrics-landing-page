import HeroLayout from "../../layouts/HeroLayout";
import Navbar from "../Navbar";

export default function HeroSection(){
    return (
      <>
        <HeroLayout>
          <Navbar />
          <section
            className="h-full  flex flex-col items-center"
            id="heroSection"
          >
            <div className=" my-auto">
              <div className="grid grid-cols-10 ">
                <div className="col-span-6  flex items-center ">
                  <div className="w-full flex justify-center">
                    <div className="w-[75%]">
                      <h1 className="text-transparent bg-gradient-to-b from-[#0D314F] to-[#165182] bg-clip-text tracking-[-3%] leading-[74px] text-6xl flex justify-center font-semibold font-geist">
                        <span>
                          {' '}
                          Sync Your Marketing Data to{' '}
                          <img
                            src="googletextlogo.svg"
                            alt="google"
                            className="inline-block pl-2"
                          />
                          <img
                            src="workspace.svg"
                            alt="workspace"
                            className="inline-block pl-2"
                          />
                        </span>
                      </h1>
                      <p className="text-[20px] font-geist leading-[30px] pt-6 text-[#697586]">
                        With the SuperMetrics Workspace add-on, access all your
                        connected marketing and sales accounts directly in
                        Google Sheets, Slides, and everywhere else.
                      </p>
                      <div className="pt-10 w-[50%] flex justify-between">
                        <img src="herobtn1.svg" alt="" />
                        <img src="herobtn2.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 ">
                  <div className="relative  h-[487.89px] w-[727px] bg-re">
                    <div className="absolute z-20 h-[477.72px] w-[727px] bg-gradient-to-b from-white/0 to-white "></div>
                    <img
                      src="img2hero.png"
                      width={'251.52px'}
                      height={'601.11px'}
                      alt=""
                      className="absolute z-10 left-[325px]"
                    />
                    <img
                      height={'477.72px'}
                      width={'570.15px'}
                      className="absolute left-0 flex-1"
                      src="img1hero.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </HeroLayout>
      </>
    );
}