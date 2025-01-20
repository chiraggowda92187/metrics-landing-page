const contentCard = [
  {
    iconUnicode: '\u2661',
    title: 'Free',
    color: '#F17878',
    description: 'To grow referrals and and leads of buisness looking',
    cost: '0',
    buttonTitle: 'Get Started for free',
    features: [
      'Data Sources: Up to 3 Accounts',
      '1 Workspace',
      '1 User',
      'Analytics Dashboard',
      'Google Add-on',
      'Reporting',
    ],
    popular: false,
  },
  {
    iconUnicode: '\u1F680',
    title: 'Starter',
    color: '#1B91F0',
    description: 'To grow referrals and and leads of buisness looking',
    cost: '19',
    buttonTitle: 'Get Starter',
    features: [
      'Data Sources: Up to 3 Accounts',
      '1 Workspace',
      '1 User',
      'Analytics Dashboard',
      'Google Add-on',
      'Reporting',
    ],
    popular: true,
  },
  {
    iconUnicode: '\u1F4BC',
    title: 'Professional',
    color: '#F6B51E',
    description: 'To grow referrals and and leads of buisness looking',
    cost: '19',
    buttonTitle: 'Get Professional',
    features: [
      'Data Sources: Up to 3 Accounts',
      '1 Workspace',
      '1 User',
      'Analytics Dashboard',
      'Google Add-on',
      'Reporting',
    ],
    popular: false,
  },
  {
    iconUnicode: '\u1F3E2',
    title: 'Team',
    color: '#7F56D9',
    description: 'To grow referrals and and leads of buisness looking',
    cost: '99',
    buttonTitle: 'Get Team',
    features: [
      'Data Sources: Up to 3 Accounts',
      '1 Workspace',
      '1 User',
      'Analytics Dashboard',
      'Google Add-on',
      'Reporting',
    ],
    popular: false,
  },
];
export default function Pricing() {
  return (
    <>
      <div className="relative w-[1440px] h-[875px] flex flex-col items-center justify-center -mt-4 ">
        <GridLayout />
        <div className="w-[46.95%] h-[13.6%] flex flex-col items-center justify-center  font-geist mt-10 space-y-4 mb-11">
          <button className="rounded-full px-4 border shadow-xl text-sm text-[#697586] py-1">
            Pricing
          </button>
          <h1 className="text-[#212F40] font-semibold text-[40px] ">
            Flexible Pricing, built for growth
          </h1>
        </div>
        <div className="rounded-full border shadow-lg hover:cursor-pointer font-geist bg-[#F9FAFB] py-1 px-2">
          <button className="px-2 relative z-20 hover:cursor-pointer text-[#697586] font-semibold">
            Monthly
          </button>
          <button className="ml-4 relative z-20 border hover:cursor-pointer text-[#1B91F0] font-semibold rounded-full shadow-xl py-1 px-4">
            Yearly{' '}
            <span className="bg-[#FDE3E3] text-[#E54545] font-semibold text-xs rounded-full px-[4px]">
              Save 20%
            </span>
          </button>
        </div>
        <div className="flex w-full h-full justify-center items-center">
          {contentCard.map((content,index)=>{
            return (
              <>
                {!content.popular ? (
                  <Card
                    title={content.title}
                    buttonTitle={content.buttonTitle}
                    description={content.description}
                    color={content.color}
                    cost={content.cost}
                    iconUnicode={content.iconUnicode}
                    features={content.features}
                  />
                ) : (
                  <SelectedCard
                    title={content.title}
                    buttonTitle={content.buttonTitle}
                    description={content.description}
                    color={content.color}
                    cost={content.cost}
                    iconUnicode={content.iconUnicode}
                    features={content.features}
                  />
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

function Card({
  title,
  description,
  cost,
  color,
  iconUnicode,
  buttonTitle,
  features,
}: {
  iconUnicode: string;
  title: string;
  color: string;
  description: string;
  cost: string;
  buttonTitle: string;
  features: string[];
}) {
  return (
    <>
      <div className="w-[17.73%] h-[79.77%]  mx-2 rounded-2xl font-geist border">
        <div className="p-3 flex flex-col items-center justify-center">
          <div className="w-full pb-6">
            <div className="rounded-full border  w-12 h-12 flex flex-col justify-center items-center  drop-shadow-glow">
              <Heart unicode={iconUnicode} color={color} />
            </div>
          </div>
          <div className="w-full font-geist">
            <h1 className="font-bold text-xl ">{title}</h1>
            <p className="text-[#697586] pb-4">{description}</p>
            <p>
              <span className="font-bold text-3xl text-[#121B26]">${cost}</span>{' '}
              <span className="text-[#697586] text-sm">/month</span>
            </p>
          </div>
          <div className="w-full">
            <button className="w-[90%] py-4 border border-[#1B91F0] rounded-xl font-semibold text-[#1B91F0]">
              {buttonTitle}
            </button>
          </div>
          <div className="mt-5 w-full">
            <h1 className="text-[#697586] font-semibold font-roboto tracking-[1%] leading-[24px]">
              Features
            </h1>
            <div className="pt-2 space-y-2">
              {features.map((feature, index) => {
                return (
                  <>
                    <p className="flex items-center" key={index}>
                      <span>
                        <Tick strokeColor={color} />{' '}
                      </span>
                      <span className="text-[#697586] text-sm pl-1">
                        {' '}
                        {feature}
                      </span>
                    </p>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SelectedCard({
  title,
  description,
  cost,
  color,
  iconUnicode,
  buttonTitle,
  features,
}: {
  iconUnicode: string;
  title: string;
  color: string;
  description: string;
  cost: string;
  buttonTitle: string;
  features: string[];
}) {
  return (
    <>
      <div className="w-[17.73%] h-[79.77%]  mx-2 rounded-2xl font-geist border border-[#B4BBC5] bg-gradient-to-b from-[#EDF4FF] via-[#EDF4FF]/10 to-[#EDF4FF]/0">
        <div className="p-3 flex flex-col items-center justify-center">
          <div className="w-full mb-6 flex justify-between items-center">
            <div className="rounded-full border w-12 h-12 flex justify-between">
              <Heart unicode={iconUnicode} color={color} />
            </div>
            <div className="rounded-full h-fit w-fit bg-gradient-to-b from-[#39A3F7] to-[#3B8BCB] flex flex-col items-center justify-center -p-4 text-xs font-medium text-[#FFFFFF] px-2 py-2">
              Most Popular
            </div>
          </div>
          <div className="w-full font-geist">
            <h1 className="font-bold text-xl ">{title}</h1>
            <p className="text-[#697586] pb-4">{description}</p>
            <p>
              <span className="font-bold text-3xl text-[#121B26]">${cost}</span>{' '}
              <span className="text-[#697586] text-sm">/month</span>
            </p>
          </div>
          <div className="w-full">
            <button className="w-[90%] py-4 border border-[#1B91F0] bg-[#1B91F0] rounded-xl font-semibold text-[#FFFFFF]">
              {buttonTitle}
            </button>
          </div>
          <div className="mt-5 w-full">
            <h1 className="text-[#697586] font-semibold font-roboto tracking-[1%] leading-[24px]">
              Features
            </h1>
            <div className="pt-2 space-y-2">
              {features.map((feature, index) => {
                return (
                  <>
                    <p className="flex items-center" key={index}>
                      <span>
                        <Tick strokeColor={color} />{' '}
                      </span>
                      <span className="text-[#697586] text-sm pl-1">
                        {' '}
                        {feature}
                      </span>
                    </p>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Tick({ strokeColor }: { strokeColor: string }) {
  return (
    <>
      <div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6667 5.23047L7.49999 14.3971L3.33333 10.2305"
            stroke={strokeColor}
            stroke-width="2.46154"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </>
  );
}

function Heart({ unicode, color }: { unicode: string; color: string }) {
  
  return (
    <>
      {/* <svg
          width="21"
          height="19"
          viewBox="0 0 21 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.813 9.88589L10.3169 17.3086L2.82081 9.88589C2.32637 9.40484 1.93691 8.82666 1.67695 8.18773C1.41699 7.54881 1.29216 6.86299 1.31033 6.17347C1.32849 5.48394 1.48926 4.80564 1.7825 4.18129C2.07574 3.55694 2.49511 3.00005 3.01419 2.5457C3.53327 2.09135 4.14083 1.74938 4.79859 1.54132C5.45636 1.33326 6.15009 1.26362 6.83609 1.33678C7.5221 1.40995 8.18553 1.62433 8.78459 1.96644C9.38366 2.30854 9.90538 2.77096 10.3169 3.32456C10.7302 2.77498 11.2526 2.3166 11.8512 1.97813C12.4499 1.63965 13.112 1.42837 13.7961 1.35749C14.4801 1.28661 15.1715 1.35766 15.8268 1.56621C16.4822 1.77475 17.0874 2.1163 17.6047 2.56947C18.122 3.02263 18.5401 3.57767 18.8329 4.19983C19.1258 4.822 19.287 5.4979 19.3066 6.18523C19.3261 6.87257 19.2036 7.55654 18.9466 8.19434C18.6896 8.83215 18.3037 9.41005 17.813 9.89188"
            stroke="#F17878"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg> */}
      <p className="text-color">{unicode}</p>
    </>
  );
}

function GridLayout() {
  return (
    <>
      <div className="absolute inset-0 flex justify-center ">
        <svg
          width="1234"
          height="895"
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
          {/* <path d="M1224 871V883H1212" stroke="black" /> */}
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
