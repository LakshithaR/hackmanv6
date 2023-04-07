import React from 'react'

const Landing = () => {
  return (
      <div id="landing">
        <section style={{backgroundColor: "#002147"}}>
          <div className="items-center justify-center">
              <div className="items-center justify-center">
                  <img className="sm:px-[20%] px-[10%] pt-28" alt="Poster1" src={require('../assets/images/catalysis2.png')}/>
              </div>
              <h1 className="font-bold mb-8 text-center justify-center sm:text-5xl text-3xl mb-0" style={{color: '#E5F2FF'}}>JUNE 4th-5th</h1>
              <h2 className="font-bold mb-8 text-center justify-center sm:text-3xl text-1xl mb-0" style={{color: '#1E90FF'}}>&lt;BreakIt&gt;  &lt;MakeIt&gt;  &lt;OwnIt&gt;</h2>
              {/* <div className="flex justify-center">
                  <button className="pt-1 pb-2 sm:px-8 px-[10%] rounded-lg sm:mr-8"  style={{backgroundColor: "#00FDFB"}}>
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLScPHYEWUOn239BvEt-L15O__OO1kaS_RxyCPrIg1Y1x0vISQw/viewform" target="_blank" className="text-[#071E22] font-medium text-xl">Register</a>
                  </button>
              </div> */}
          </div>
        </section>
      </div>
  )
}

export default Landing