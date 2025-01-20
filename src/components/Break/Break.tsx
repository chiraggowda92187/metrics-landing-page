
type VariantType = string


export default function Break({
    variant
} : {
    variant : VariantType
}){
    return (
      <>
        <div className="relative w-[1440px] h-[220px] -mt-3">
          <GridLayout1 />
          {variant === 'variant1' ? (
            <></>
          ) : (
            <>
              <div className="absolute left-[49%] bottom-[42%]">
                <img src="break.png" alt="" width={'31'} height={'31'} />
              </div>
            </>
          )}
        </div>
      </>
    );
}



export function GridLayout1(){
    return (
      <>
        <div className="absolute top-0">
          <svg
            width="1440"
            height="220"
            viewBox="0 0 1440 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="685"
              y1="113.35"
              x2="325"
              y2="113.35"
              stroke="#CFD5DE"
              stroke-width="0.7"
            />
            <g filter="url(#filter0_d_0_1)">
              <rect
                x="319"
                y="107"
                width="12"
                height="12"
                rx="4"
                fill="white"
              />
              <rect
                x="319.35"
                y="107.35"
                width="11.3"
                height="11.3"
                rx="3.65"
                stroke="#CFD5DE"
                stroke-width="0.7"
              />
            </g>
            <line
              x1="755"
              y1="112.65"
              x2="1115"
              y2="112.65"
              stroke="#CFD5DE"
              stroke-width="0.7"
            />
            <g filter="url(#filter1_d_0_1)">
              <rect
                width="12"
                height="12"
                rx="4"
                transform="matrix(-1 0 0 1 1121 107)"
                fill="white"
              />
              <rect
                x="-0.35"
                y="0.35"
                width="11.3"
                height="11.3"
                rx="3.65"
                transform="matrix(-1 0 0 1 1120.3 107)"
                stroke="#CFD5DE"
                stroke-width="0.7"
              />
            </g>
            <line
              x1="1440"
              y1="208.35"
              y2="208.35"
              stroke="#CFD5DE"
              stroke-width="0.7"
            />
            <line
              x1="1440"
              y1="11.35"
              y2="11.35"
              stroke="#CFD5DE"
              stroke-width="0.7"
            />
            <g filter="url(#filter2_d_0_1)">
              <rect x="107" y="5" width="12" height="12" rx="4" fill="white" />
              <rect
                x="107.35"
                y="5.35"
                width="11.3"
                height="11.3"
                rx="3.65"
                stroke="#CFD5DE"
                stroke-width="0.7"
              />
            </g>
            <g filter="url(#filter3_d_0_1)"></g>
            <path d="M1327 -1.11759e-07V12H1315" stroke="black" />

            <defs>
              <filter
                id="filter0_d_0_1"
                x="315"
                y="104"
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
                x="1105"
                y="104"
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
                y="2"
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
                id="filter3_d_0_1"
                x="1317"
                y="199"
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