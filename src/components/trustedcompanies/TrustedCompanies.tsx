export default function TrustedCompanies(){
    return (
      <>
        <section
          className="relative w-[1440px] h-[284px] "
          id="trusted companies"
        >
          <Grid />
          <div className="absolute inset-0 z-3 flex flex-col justify-center items-center">
            <h1 className="text-lg text-[#697586] font-geist font-normal leading-8 mb-6">
              Trusted by 5000+ marketing professionals
            </h1>
            <div className="flex justify-center">
              <img src="companies.png" alt="" className="w-[84%] " />
            </div>
          </div>
        </section>
      </>
    );
}


function Grid(){
    return (
      <div className="absolute inset-0 z-20 ">
        <GridSvg/>        
      </div>
    );
}

function GridSvg(){
    return (
      <svg
        width="1440"
        height="303"
        viewBox="0 0 1440 303"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="113.35"
          y1="9"
          x2="113.35"
          y2="293"
          stroke="#CFD5DE"
          stroke-width="0.7"
        />
        <line
          x1="1327.35"
          y1="9"
          x2="1327.35"
          y2="293"
          stroke="#CFD5DE"
          stroke-width="0.7"
        />
        <line
          x1="1440"
          y1="9.35"
          y2="9.35"
          stroke="#CFD5DE"
          stroke-width="0.7"
        />
        <line
          x1="1440"
          y1="292.35"
          y2="292.35"
          stroke="#CFD5DE"
          stroke-width="0.7"
        />
        <path d="M1327 22V10H1315" stroke="black" />
        <g filter="url(#filter0_d_0_1)">
          <rect x="107" y="3" width="12" height="12" rx="4" fill="white" />
          <rect
            x="107.35"
            y="3.35"
            width="11.3"
            height="11.3"
            rx="3.65"
            stroke="#CFD5DE"
            stroke-width="0.7"
          />
        </g>
        <g filter="url(#filter1_d_0_1)">
          <rect x="1321" y="286" width="12" height="12" rx="4" fill="white" />
          <rect
            x="1321.35"
            y="286.35"
            width="11.3"
            height="11.3"
            rx="3.65"
            stroke="#CFD5DE"
            stroke-width="0.7"
          />
        </g>
        <path d="M113 280V292H125" stroke="black" />
        <defs>
          <filter
            id="filter0_d_0_1"
            x="103"
            y="0"
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
            y="283"
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
    );
}