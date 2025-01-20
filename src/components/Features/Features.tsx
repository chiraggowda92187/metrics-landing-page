

const Buttoms = [
  {
    name: 'Add Styling',
    imgName: 'color.png',
  },
  {
    name: 'Sync Data',
    imgName: 'tick.png',
  },
  {
    name: 'Integrations',
    imgName: 'img3.png',
  },
  {
    name: 'Google Add-on',
    imgName: 'google.png',
  },
  {
    name: 'Report',
    imgName: 'img4.png',
  },
  {
    name: 'Analytics',
    imgName: 'stats.png',
  },
  {
    name: 'Analytics',
    imgName: 'stats.png',
  },
];

export default function Features(){
    return (
      <>
        <div className="relative w-[1440px] h-[220px] mt-12">
          <GridLayout1 />
          <Mask/>
          <div className="absolute right-0 -z-10 flex h-full justify-center items-center space-x-7">
            {Buttoms.map((button, index)=>{
              return (
                <button className="border rounded-full px-4 py-2 space-x-3 font-medium text-[#697586] font-geist flex justify-center items-center">
                  <img
                    src={button.imgName}
                    alt={button.imgName}
                    className="w-6 h-6 inline-block "
                  />
                  <span>{button.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </>
    );
}

function Mask(){
  return (
    <>
      <div className="absolute z-10 right-0 w-[17%] h-full bg-gradient-to-r from-white/35 to to-white">

      </div>
    </>
  )
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
              x1="1440"
              y1="208.35"
              y2="208.35"
              stroke="#CFD5DE"
              stroke-width="0.7"
            />

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