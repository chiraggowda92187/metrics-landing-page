export default function Testimonials(){
    return (
      <>
        <section id="testimonials" className="-mt-4 ">
          <div className="relative w-[1440px] h-[612px] bg-gradient-to-b from-[#F5F7FA] to-white flex flex-col justify-center items-center font-geist">
            <GridLayout />
            <div className="relative w-[46.95%] h-[13.6%] flex flex-col items-center justify-center  font-geist mt-10 space-y-4 mb-11">
              <Quotation />
              <button className="absolute -top-10 rounded-full px-4 border shadow-xl text-sm text-[#697586] font-medium py-1 bg-white tracking-[8%]">
                TESTIMONIALS
              </button>
              <h1 className="absolute text-[#212F40] font-semibold text-[40px] ">
                Don't just take our word for it
              </h1>
            </div>
            <div className="w-[46.9%] h-[44.607%]  flex flex-col justify-center items-center rounded-3xl border ">
              <div className="w-[96%] h-[92%] bg-gradient-to-b from-[#F5F7FA] to-[#F5F7FA]/0 flex flex-col justify-center items-center rounded-3xl">
                <p className="text-center w-[68.67%] h-[27.64%] text-[#344054]">
                  SuperMetrics social analytics tool has provided great insights
                  into social channels for our clients and has become an
                  integral part of our content marketing strategies.
                </p>
                {/* Supposedly to be a twitter embedded code or something not hard coded. Thats why img */}
                <img src="testi1.png" alt="" className="mt-4" />
              </div>
            </div>
            <div className="w-[8.89%] h-[5.23%] pt-2">
              <img src="othertesti.png" alt="" className="" />
            </div>
          </div>
        </section>
      </>
    );
}




function Quotation(){
    return (
      <>
        <div className="absolute -top-[105px] -z-9">
          <svg
            width="241"
            height="180"
            viewBox="0 0 241 241"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.7" clip-path="url(#clip0_1_1446)">
              <g filter="url(#filter0_i_1_1446)">
                <path
                  d="M157.576 222.461H213.192C220.917 222.461 227.482 219.757 232.891 214.351C238.296 208.944 241 202.379 241 194.653V139.039C241 131.313 238.298 124.749 232.891 119.343C227.483 113.937 220.916 111.232 213.192 111.232H180.75C176.889 111.232 173.605 109.88 170.901 107.177C168.198 104.476 166.846 101.191 166.846 97.3274V92.6954C166.846 82.46 170.468 73.7247 177.709 66.4817C184.95 59.2423 193.687 55.6213 203.924 55.6213H213.192C215.704 55.6213 217.876 54.7016 219.711 52.8683C221.545 51.035 222.462 48.8618 222.462 46.3513V27.8107C222.462 25.3042 221.545 23.1269 219.711 21.2931C217.874 19.4603 215.704 18.5401 213.192 18.5401H203.923C193.881 18.5401 184.298 20.4982 175.173 24.4073C166.048 28.3169 158.155 33.6048 151.493 40.2675C144.832 46.9306 139.545 54.8219 135.635 63.9468C131.725 73.0713 129.77 82.6538 129.77 92.6949V194.655C129.77 202.381 132.473 208.945 137.879 214.352C143.286 219.758 149.852 222.461 157.576 222.461ZM8.11296 214.351C13.5185 219.757 20.0843 222.461 27.8097 222.461H83.4239C91.1492 222.461 97.7145 219.757 103.121 214.351C108.526 208.943 111.229 202.379 111.229 194.653V139.039C111.229 131.313 108.526 124.749 103.121 119.343C97.7145 113.937 91.1487 111.232 83.4239 111.232H50.9817C47.1208 111.232 43.8347 109.88 41.1313 107.177C38.4306 104.475 37.0762 101.191 37.0762 97.3274V92.6954C37.0762 82.46 40.6976 73.7247 47.9401 66.4817C55.181 59.2423 63.9164 55.6213 74.1538 55.6213H83.4239C85.9339 55.6213 88.1076 54.7016 89.9409 52.8683C91.7757 51.035 92.6944 48.8618 92.6944 46.3513V27.8107C92.6944 25.3042 91.7757 23.1269 89.9409 21.2931C88.1081 19.4603 85.9344 18.5401 83.4239 18.5401H74.1538C64.1127 18.5401 54.5302 20.4982 45.4042 24.4073C36.2812 28.3169 28.3895 33.6048 21.7263 40.2675C15.0637 46.9306 9.77379 54.8239 5.8662 63.9468C1.95709 73.0693 0.000518799 82.6538 0.000518799 92.6949V194.655C0.00204468 202.381 2.70331 208.945 8.11296 214.351Z"
                  fill="url(#paint0_linear_1_1446)"
                />
              </g>
              <path
                d="M177.355 66.1282L177.355 66.1281C184.69 58.795 193.555 55.1213 203.924 55.1213H213.192C215.566 55.1213 217.612 54.2581 219.357 52.5147C221.101 50.7717 221.962 48.7243 221.962 46.3513V27.8107C221.962 25.4417 221.101 23.3904 219.358 21.6471C217.611 19.9038 215.566 19.0401 213.192 19.0401H203.923C193.948 19.0401 184.432 20.9847 175.37 24.8669C166.301 28.7528 158.462 34.0057 151.846 40.621C145.233 47.2368 139.981 55.0741 136.094 64.1438C132.212 73.2053 130.27 82.7207 130.27 92.6949V194.655C130.27 202.25 132.922 208.687 138.233 213.998C143.544 219.309 149.983 221.961 157.576 221.961H213.192C220.786 221.961 227.224 219.309 232.537 213.998C232.537 213.997 232.537 213.997 232.537 213.997M177.355 66.1282L232.537 213.997M177.355 66.1282C170.02 73.4648 166.346 82.3273 166.346 92.6954V97.3274C166.346 101.322 167.749 104.735 170.548 107.531L177.355 66.1282ZM232.537 213.997C237.848 208.685 240.5 202.248 240.5 194.653V139.039C240.5 131.444 237.849 125.008 232.537 119.696C227.224 114.386 220.785 111.732 213.192 111.732H180.75C176.758 111.732 173.347 110.328 170.548 107.531L232.537 213.997ZM8.46654 213.998L8.46638 213.997C3.15176 208.687 0.502014 202.25 0.500519 194.655V92.6949C0.500519 82.7207 2.44365 73.2033 6.32578 64.1438L5.8662 63.9468L6.32581 64.1437C10.2096 55.0762 15.4646 47.2368 22.0799 40.621C28.6957 34.0057 36.5336 28.7528 45.6011 24.8669C54.6642 20.9847 64.1797 19.0401 74.1538 19.0401H83.4239C85.7966 19.0401 87.8446 19.9039 89.5873 21.6467L89.5874 21.6468C91.3319 23.3903 92.1944 25.4417 92.1944 27.8107V46.3513C92.1944 48.7242 91.332 50.7715 89.5875 52.5146L89.5873 52.5148C87.8441 54.258 85.7962 55.1213 83.4239 55.1213H74.1538C63.7836 55.1213 54.9212 58.795 47.5866 66.1281L47.9401 66.4817L47.5865 66.1281C40.2504 73.4648 36.5762 82.3273 36.5762 92.6954V97.3274C36.5762 101.323 37.9823 104.733 40.7777 107.531L40.7778 107.531C43.576 110.329 46.9898 111.732 50.9817 111.732H83.4239C91.0176 111.732 97.4557 114.386 102.767 119.696C108.078 125.008 110.729 131.444 110.729 139.039V194.653C110.729 202.248 108.078 208.685 102.767 213.997C97.4558 219.309 91.0182 221.961 83.4239 221.961H27.8097C20.2153 221.961 13.7773 219.309 8.46654 213.998Z"
                stroke="white"
              />
              <rect
                width="241"
                height="241"
                fill="url(#paint1_linear_1_1446)"
              />
            </g>
            <defs>
              <filter
                id="filter0_i_1_1446"
                x="0.000488281"
                y="18.54"
                width="241"
                height="203.921"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="2" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_1_1446"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1_1446"
                x1="120.5"
                y1="18.5401"
                x2="120.5"
                y2="222.461"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CFD5DE" stop-opacity="0.3" />
                <stop offset="1" stop-color="#CFD5DE" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1_1446"
                x1="120.5"
                y1="0"
                x2="120.5"
                y2="241"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.597486" stop-color="white" stop-opacity="0" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <clipPath id="clip0_1_1446">
                <rect
                  width="241"
                  height="241"
                  fill="white"
                  transform="matrix(-1 0 0 -1 241 241)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </>
    );
}

function GridLayout() {
  return (
    <>
      <div className="absolute inset-0 flex justify-center ">
        <svg
          width="1440"
          height="612"
          viewBox="0 0 1234 895"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="10.35"
            y1="9"
            x2="10.35"
            y2="893"
            stroke="#CFD5DE"
            stroke-width="0.7"
          />
          <line
            x1="1224.35"
            y1="9"
            x2="1224.35"
            y2="893"
            stroke="#CFD5DE"
            stroke-width="0.7"
          />
          <g filter="url(#filter0_d_0_1)">
            <rect x="1218" y="3" width="12" height="12" rx="4" fill="white" />
            <rect
              x="1218.35"
              y="3.35"
              width="11.3"
              height="11.3"
              rx="3.65"
              stroke="#CFD5DE"
              stroke-width="0.7"
            />
          </g>
          <path d="M11 22V10H23" stroke="black" />
          <g filter="url(#filter1_d_0_1)">
            <rect x="4" y="878" width="12" height="12" rx="4" fill="white" />
            <rect
              x="4.35"
              y="878.35"
              width="11.3"
              height="11.3"
              rx="3.65"
              stroke="#CFD5DE"
              stroke-width="0.7"
            />
          </g>
          <path d="M1224 871V883H1212" stroke="black" />
          <defs>
            <filter
              id="filter0_d_0_1"
              x="1214"
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
              x="0"
              y="875"
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