import { useState } from "react";

const content = [
  {
    title: 'Is there a free trial available?',
    description:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    title: 'Can I change my plan later?',
    description: '',
  },
  {
    title: 'What is your cancellation policy?',
    description: '',
  },
  {
    title: 'Can other info be added to an invoice?',
    description: '',
  },
  {
    title: 'How does billing work?',
    description: '',
  },
  {
    title: 'How do I change my account email?',
    description: '',
  },
];
export default function Faq(){
    return (
      <>
        <section id="faq-section">
          <div className="relative w-[1440px] h-[725px] flex flex-col justify-center items-center -mt-2 font-geist">
            <GridLayout />
            <div className="absolute w-[46.95%] h-[13.6%] flex flex-col items-center justify-center   mt-10 space-y-4 mb-11">
              <button className="rounded-full px-4 border shadow-xl text-sm text-[#697586] font-medium py-1 bg-white tracking-[8%]">
                FAQ's
              </button>
              <h1 className="text-[#212F40] font-semibold text-[40px] ">
                Frequently asked questions
              </h1>
              <div className="space-y-6 w-full">
                {content.map((question, _index) => {
                  return (
                    <>
                      <Question title={question.title} description={question.description}/>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

function Question({title , description }:{title : string, description : string}){
    const [expanded,setExpanded] = useState(false)
    const onClick = ()=>{
        setExpanded(!expanded)
    }
    return (
      <div className="w-full">
        <h1 className="flex justify-between">
          <span className="text-lg font-medium">{title}</span>
          <span className="text-[#B4BBC5] text-4xl">
            {expanded ? (
              <button onClick={onClick}>-</button>
            ) : (
              <button onClick={onClick}>+</button>
            )}
          </span>
        </h1>
        {expanded && <p className="text-[#697586]">{description}</p>}
        <div className="w-full pt-6 ">
          <svg height={'1'} className="w-full">
            <path
              d="M0 1H768V-1H0V1Z"
              fill="#EAECF0"
              mask="url(#path-1-inside-1_1_1370)"
            />
          </svg>
        </div>
      </div>
    );
}
function GridLayout() {
  return (
    <>
      <div className="absolute inset-0 flex justify-center ">
        <svg
          width="1440"
          height="785"
          viewBox="0 0 1440 785"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          
          <line
            x1="1440"
            y1="784.35"
            y2="784.35"
            stroke="#CFD5DE"
            stroke-width="0.7"
          />
          <line
            x1="113.35"
            y1="1.5299e-08"
            x2="113.35"
            y2="785"
            stroke="#CFD5DE"
            stroke-width="0.7"
          />
          <line
            x1="1327.35"
            y1="1.5299e-08"
            x2="1327.35"
            y2="785"
            stroke="#CFD5DE"
            stroke-width="0.7"
          />
        </svg>
      </div>
    </>
  );
}