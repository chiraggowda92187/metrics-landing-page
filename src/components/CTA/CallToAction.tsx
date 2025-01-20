export default function CallToAction(){
    return (
      <>
        <section className="">
          <div className="relative w-[1440px] mt-2 h-[644px] flex flex-col justify-center items-center overflow-hidden ">
            <GridLayout />
            <GradientBackground />
            <DotLayout />
            <div className="absolute overflow-y-hidden h-[86.6%] flex flex-col justify-center items-center top-0">
              <h1 className="w-[41.80555%] tracking-[-3%] leading[54px] text-center font-semibold text-[40px]">
                Access all your marketing data without leaving
              </h1>
              <div className="w-[27%] pt-8 ">
                <img
                  src="googletextlogo.svg"
                  alt="google"
                  className="inline-block  w-[39%]"
                />
                <img
                  src="workspace.svg"
                  alt="workspace"
                  className="inline-block w-[57.51%] pl-3"
                />
              </div>
              <div className="relative w-[84.3055%] mt-20">
                <img src="ctaimage.png" alt="" className="" />
                <div className="absolute bottom-0 bg-gradient-to-b h-[30%] w-full from-white/0 to-white"></div>
              </div>
              <div className="grid grid-rows-10">
                <div className="row-span-8"></div>
              </div>
            </div>
            <div className="absolute bottom-0 w-full flex flex-col items-center justify-center -z-6 h-[13%]  mb-1 ">
              <h1 className="font-geist leading-[30px] text-xl flex items-center">
                <span className="text-[]">Looking for </span>
                <span className="font-bold pl-1">DataStudio</span>?
                <img
                  src="btn.png"
                  alt=""
                  width={126}
                  height={42}
                  className="inline-block pl-4"
                />
              </h1>
            </div>
          </div>
        </section>
      </>
    );
}

function DotLayout(){
    return (
      <>
        <div className="absolute -z-10 top-[200px] w-[82.48%]">
          <img src="dotlayout.png" alt="" />
        </div>
      </>
    );
}

function GradientBackground(){
    return (
      <div className="absolute -z-20 inset-0 w-full h-full bg-gradient-to-b from-[#F5F7FA] to-[#FFFFFF] "></div>
    );
}

function GridLayout(){
    return (
      <>
        <div className="absolute inset-0 -z-3">
          <svg
            width="1440"
            height="649"
            viewBox="0 0 1440 649"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1440"
              y1="558.35"
              y2="558.35"
              stroke="#CFD5DE"
              stroke-width="0.7"
            />
            <line
              x1="113.35"
              y1="12"
              x2="113.35"
              y2="558"
              stroke="#CFD5DE"
              stroke-width="0.7"
            />
            <line
              x1="1327.35"
              y1="12"
              x2="1327.35"
              y2="559"
              stroke="#CFD5DE"
              stroke-width="0.7"
            />
            <line
              x1="1440"
              y1="558.35"
              y2="558.35"
              stroke="#CFD5DE"
              stroke-width="0.7"
            />
            <line
              x1="1440"
              y1="637.35"
              y2="637.35"
              stroke="#CFD5DE"
              stroke-width="0.7"
            />
            <line
              x1="113.35"
              y1="558"
              x2="113.35"
              y2="638"
              stroke="#CFD5DE"
              stroke-width="0.7"
            />
            <line
              x1="1327.35"
              y1="558"
              x2="1327.35"
              y2="638"
              stroke="#CFD5DE"
              stroke-width="0.7"
            />
            <g filter="url(#filter0_d_0_1)">
              <rect x="1321" y="6" width="12" height="12" rx="4" fill="white" />
              <rect
                x="1321.35"
                y="6.35"
                width="11.3"
                height="11.3"
                rx="3.65"
                stroke="#CFD5DE"
                stroke-width="0.7"
              />
            </g>
            <g filter="url(#filter1_d_0_1)">
              <rect
                x="1321"
                y="632"
                width="12"
                height="12"
                rx="4"
                fill="white"
              />
              <rect
                x="1321.35"
                y="632.35"
                width="11.3"
                height="11.3"
                rx="3.65"
                stroke="#CFD5DE"
                stroke-width="0.7"
              />
            </g>
            <g filter="url(#filter2_d_0_1)">
              <rect
                x="107"
                y="552"
                width="12"
                height="12"
                rx="4"
                fill="white"
              />
              <rect
                x="107.35"
                y="552.35"
                width="11.3"
                height="11.3"
                rx="3.65"
                stroke="#CFD5DE"
                stroke-width="0.7"
              />
            </g>
            <path d="M113 625V637H125" stroke="black" />
            <path d="M1327 571V559H1315" stroke="black" />
            <defs>
              <filter
                id="filter0_d_0_1"
                x="1317"
                y="3"
                width="20"
                height="20"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.109804 0 0 0 0 0.0431373 0 0 0 0 0.270588 0 0 0 0.05 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_0_1"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_0_1"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_0_1"
                x="1317"
                y="629"
                width="20"
                height="20"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.109804 0 0 0 0 0.0431373 0 0 0 0 0.270588 0 0 0 0.05 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_0_1"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_0_1"
                  result="shape"
                />
              </filter>
              <filter
                id="filter2_d_0_1"
                x="103"
                y="549"
                width="20"
                height="20"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.109804 0 0 0 0 0.0431373 0 0 0 0 0.270588 0 0 0 0.05 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_0_1"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_0_1"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </>
    );

}
