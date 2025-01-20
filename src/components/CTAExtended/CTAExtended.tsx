export default function CallToActionExtended(){
    return (
      <>
        <section className="" id="call-to-action-extended">
          <div className="relative w-[1440px] h-[1705px] bg-blck flex flex-col items-center justify-center space-y-40">
            <GridLayout/>
            <div className="w-[41%] flex flex-col items-center justify-center space-y-20">
              <button className="border-2 px-3 rounded-full shadow-md">
                How it works
              </button>
              <h1 className="text-[#212F40] tracking-[-3%] font-semibold text-4xl">
                Get started in 3 simple steps
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center space-y-36 ">
              <Step
                odd={true}
                number={'01'}
                title={'Install supermetrics and create an account'}
                description={
                  'Installation is quick, and creating a SuperMetrics account is completely free.'
                }
                img={'step1.png'}
                alt={'step 1'}
              />
              <Step
                odd={false}
                number={'02'}
                title={'Install supermetrics and create an account'}
                description={
                  'Installation is quick, and creating a SuperMetrics account is completely free.'
                }
                img={'step1.png'}
                alt={'step 2'}
              />
              <Step
                odd={true}
                number={'03'}
                title={'Install supermetrics and create an account'}
                description={
                  'Installation is quick, and creating a SuperMetrics account is completely free.'
                }
                img={'step1.png'}
                alt={'step 3'}
                last = {true}
              />
            </div>
          </div>
        </section>
      </>
    );
}


function Step({odd, number, title, description, img, alt,last} : {
    odd : boolean,
    number : string,
    title : string,
    description : string,
    img : string,
    alt : string, 
    last? : boolean
}){
    
    return (
      <>
        <div className="w-[72.77%] h-[20.05%] bg-blak">
          {odd ? (
            <div className="grid grid-cols-2 -mt-5">
              <div className="bg-pnk-400">
                <img src={img} alt={alt} width={'534px'} height={'342px'} />
              </div>
              <div className="relative  w-full h-full flex flex-col justify-center font-geist">
                <div className="absolute right-0 w-[75%] ">
                  <h1 className="bg-gradient-to-b from-[#CFD5DE] to-[#CFD5DE]/0 text-transparent bg-clip-text font-black text-[94px] ">
                    {number}
                  </h1>

                  <h1 className="font-semibold text-xl">{title}</h1>
                  <p className="text-[#344054]">{description}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 -mt-10">
              <div className="relative w-full h-full flex flex-col justify-center font-geist">
                <div className="absolute left-0 w-[75%] ">
                  <h1 className="bg-gradient-to-b from-[#CFD5DE] to-[#CFD5DE]/0 text-transparent bg-clip-text font-black text-[94px] ">
                    {number}
                  </h1>

                  <h1 className="font-semibold text-xl">{title}</h1>
                  <p className="text-[#344054]">{description}</p>
                </div>
              </div>
              <div className="bg-pnk-400">
                <img src={img} alt={alt} width={'534px'} height={'342px'} />
              </div>
            </div>
            // {connector}
          )}
          {odd
            ? !last && (
                <div className="w-fit ml-36">
                  <img src="connector1.svg" alt="connector 1" className=""/>
                </div>
              )
            : !last && (
                <div className="w-fit  ml-20">
                  <img src="connector2.svg" alt="connector 2" className="" />
                </div>
              )}
        </div>
      </>
    );
}


function GridLayout(){
    return (
      <>
        <div className="absolute inset-0">
          <svg
            width="1440"
            height="1715"
            viewBox="0 0 1440 1715"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="113.35"
              y1="1.5299e-08"
              x2="113.35"
              y2="1704"
              stroke="#CFD5DE"
              stroke-width="0.7"
            />
            <line
              x1="1327.35"
              y1="1.5299e-08"
              x2="1327.35"
              y2="1704"
              stroke="#CFD5DE"
              stroke-width="0.7"
            />
            <line
              x1="1440"
              y1="1704.35"
              y2="1704.35"
              stroke="#CFD5DE"
              stroke-width="0.7"
            />
            <g filter="url(#filter0_d_0_1)">
              <rect
                x="107"
                y="1698"
                width="12"
                height="12"
                rx="4"
                fill="white"
              />
              <rect
                x="107.35"
                y="1698.35"
                width="11.3"
                height="11.3"
                rx="3.65"
                stroke="#CFD5DE"
                stroke-width="0.7"
              />
            </g>
            <path d="M1327 1692V1704H1315" stroke="black" />
            <defs>
              <filter
                id="filter0_d_0_1"
                x="103"
                y="1695"
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