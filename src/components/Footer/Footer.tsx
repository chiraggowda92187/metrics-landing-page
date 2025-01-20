export default function Footer(){
    return (
      <>
        <footer className="" id="footer-section">
          <div className="w-[1440px] h-[672px] bg-[#F5F7FA] -mt-3">
            <div className="grid grid-rows-11 font-geist">
              <div className="row-span-6 h-full w-full grid grid-cols-12 pt-16 text-[#42526B]">
                <div className="col-span-4 flex flex-col items-center justify-center">
                  <h1 className="text-lg font-semibold">Thrive10xlabs.in</h1>
                </div>
                <div className="col-span-2 space-y-2">
                  <h1 className="text-xs pt-2 text-[#838E9E]">PRODUCTS</h1>
                  <div className="h-[1px] w-[90%] bg-[#838E9E] "></div>
                  <p>Integrations</p>
                  <p>Analytics</p>
                  <p>Dashboard</p>
                  <p>Emded Charts</p>
                  <p>Google Add on</p>
                  <p>Pricing</p>
                  <p>Workspace</p>
                </div>
                <div className="col-span-2 space-y-2">
                  <h1 className="text-xs pt-2 text-[#838E9E]">RESOURCES</h1>
                  <div className="h-[1px] w-[90%] bg-[#838E9E] "></div>
                  <p>Blog</p>
                  <p>Knowledge Base</p>
                  <p>Affiliate Program</p>
                  <p>Changelog</p>
                  <p>Pricing</p>
                  <p>Contact Us</p>
                </div>
                <div className="col-span-2 space-y-2">
                  <h1 className="text-xs pt-2 text-[#838E9E]">LEGAL</h1>
                  <div className="h-[1px] w-[90%] bg-[#838E9E] "></div>
                  <p>Privacy Policy</p>
                  <p>Terms & Conditions</p>
                  <p>Affiliate Program</p>
                  <p>Changelog</p>
                  <p>Pricing</p>
                  <p>Contact Us</p>
                </div>
              </div>
              <div className="row-span-5 h-full w-full flex flex-col items-center justify-center">
                <p className="py-10 text-[#838E9E]">
                  Copyright 2025 <span>&#169;</span> thrive10xlabs.in
                </p>
                <h1 className="text-9xl bg-gradient-to-b text-transparent bg-clip-text from-[#838E9E]/65 to-[#CFD5DE] tracking-[-3%] font-semibold">
                  thrive10xlabs.in
                </h1>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
}