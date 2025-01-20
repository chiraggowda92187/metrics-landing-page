export default function Navbar(){
    return (
      <>
        <section className="w-[1400px] h-[80px] ">
          <div className="flex justify-around pt-4">
            <div className="text-[#121B26] font-semibold text-lg font-geist flex items-center justify-center">
              SuperMetrics.com
            </div>
            <div>
              <div className="flex h-full justify-between items-center">
                <div className="px-4 flex items-center">Features {'v'}</div>
                <div className="px-4">Resources {'v'}</div>
                <div className="px-4">Company {'v'}</div>
                <div className="px-4">Pricing {'v'}</div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">Login</div>
              <div>
                <img src="navbarbtn.svg" alt="" className="inline-block ml-4" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
}