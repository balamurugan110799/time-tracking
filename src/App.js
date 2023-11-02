import {useEffect} from "react"
import './App.css';
import jeremy from "./components/images/image-jeremy.png"
import work from "./components/images/icon-work.svg"
import { data } from './components/data/data';
import { useState } from 'react';

function App() {
 const [firstTab,setFirstTab] = useState(true)
 const [secondTab,setSecondTab] = useState(false)
 const [thridTab,setThirdTab] = useState(false)



  const handleTab = (cal) => {

    // console.log(cal.cal)
    if(cal.cal==="Daily"){
      setFirstTab(true)
      setSecondTab(false)
      setThirdTab(false)
    }

    if(cal.cal==="Weekly"){
      setFirstTab(false)
      setSecondTab(true)
      setThirdTab(false)
    }

    if(cal.cal==="Monthly"){
      setFirstTab(false)
      setSecondTab(false)
      setThirdTab(true)
    }
   

  }


  useEffect(()=>{
    
  },[])

  return (
    <div className="App h-[100%] sm:h-auto bg-very-dark-blue p-[50px]">
      <div className=' grid grid-cols-4 gap-4 h-[100%]'>
        <div className='bg-[#1d204b] h-[100%] rounded-[20px] sm:col-span-4'>
          <div className=' bg-[#5746ea] w-full grid  lg:grid-cols-1 sm:grid-cols-3 h-[70%] rounded-[20px] p-10 sm:p-2 '>

            <div className=' grid-cols-1 '>
              <img src={jeremy} alt="jeremy" className='sm:h-[70px] sm:w-[70px] h-[100px] w-[100px] border-2 border-[#fff] rounded-[50%]' />
            </div>
            <div className=" col-span-2">

            <p className=' text-[#9d98f8] pt-10 sm:pt-0'>Report for</p>

            <h1 className='text-h1 sm:text-h4 text-[#fff] leading-[46px] sm:leading-8'>Jeremy</h1>
            <h1 className='text-h1 sm:text-h4 text-[#fff] leading-[46px] sm:leading-8'>Robson</h1>
            </div>


          </div >

          <div className='px-10 py-6 sm:py-2 sm:flex sm:space-even'>
            <div onClick={() => handleTab({ cal: "Daily" })} className={` ${firstTab ?"text-[#fff]":"text-desaturated-blue" } hover:text-[#fff] duration-300 cursor-pointer  pb-3 sm:pr-2` }>
              Daily
            </div>
            <div onClick={() => handleTab({ cal: "Weekly" })} className={` ${secondTab ?"text-[#fff]":"text-desaturated-blue" } hover:text-[#fff] duration-300 cursor-pointer  pb-3 sm:pr-2` }>
              Weekly
            </div>
            <div onClick={() => handleTab({ cal: "Monthly" })} className={` ${thridTab ?"text-[#fff]":"text-desaturated-blue" } hover:text-[#fff] duration-300 cursor-pointer  pb-3 sm:pr-2` }>
              Monthly
            </div>
          </div>



        </div>
     
        {firstTab  ? <>
        <div className=' col-span-3 sm:col-span-4 '>
        <div className=' grid grid-cols-3  sm:grid-cols-1 gap-10 h-[100%]  '>
        {data?.map((v,i)=>{
          console.log(v,i)
          return(
            <div className='relative h-[100%]' >
            <div className={ ` ${v?.color}  h-[100%] rounded-[22px]  relative `}>
                <div className=' h-[20%]  z-index-low  flex justify-end'>
                  <img src={v?.img} alt="work" className=' z-index-low absolute px-4' />
                </div>
                <div className=' bg-[#1d204b] p-6 py-10  z-index-high relative h-[82%] rounded-[20px]  '>
                  <div className=' grid grid-cols-2 '>
                    <div className=' flrx justify-start text-h6 text-white'>
                      {v?.title}
                    </div>
                    <div className=' flex justify-end text-h4 text-white'>
                      ...
                    </div>
                  </div>
                  <div className=' text-[42px] text-white'>
                                 {v?.timeframes?.daily?.current} hrs
                  </div>
                  <div className='text-desaturated-blue '>
                    Last week - 36 hrs
                  </div>
                </div>
              </div> 
            </div>
          )
        })}
          </div>
        </div>
         
        
        </> 
        
       :null}


          {secondTab  ? 
        <div className=' col-span-3 sm:col-span-4'>
        <div className=' grid grid-cols-3  sm:grid-cols-1 gap-10 h-[100%] gap-10 h-[100%] '>
            {data?.map((v, i) => {
              console.log(v.timeframes)
              return (
                <div className='relative h-[100%]' >
                <div className={ ` ${v?.color}  h-[100%] rounded-[22px]  relative `}>
                    <div className=' h-[20%]  z-index-low  flex justify-end'>
                      <img src={v?.img} alt="work" className=' z-index-low absolute px-4' />
                    </div>
                    <div className=' bg-[#1d204b] p-6 py-10 z-index-high relative h-[82%] rounded-[20px]  '>
                      <div className=' grid grid-cols-2 '>
                        <div className=' flrx justify-start text-h6 text-white'>
                          {v?.title}
                        </div>
                        <div className=' flex justify-end text-h4 text-white'>
                          ...
                        </div>
                      </div>
                      <div className=' text-[42px] text-white'>
                                     {v?.timeframes?.weekly?.current} hrs
                      </div>
                      <div className='text-desaturated-blue '>
                        Last week - 36 hrs
                      </div>
                    </div>
                  </div> 
                </div>
              )
            })}
          </div>
          </div>:null}


          {thridTab  ?  
        <div className=' col-span-3 sm:col-span-4'>
        <div className=' grid grid-cols-3  sm:grid-cols-1 gap-10 h-[100%] sm:grid-cols-1 gap-10 h-[100%] '>
            {data?.map((v, i) => {
              return (
                <div className='relative h-[100%]' >
                <div className={ ` ${v?.color}  h-[100%] rounded-[22px]  relative `}>
                    <div className=' h-[20%]  z-index-low  flex justify-end'>
                      <img src={v?.img} alt="work" className=' z-index-low absolute px-4' />
                    </div>
                    <div className=' bg-[#1d204b] p-6 py-10 z-index-high relative h-[82%] rounded-[20px]  '>
                      <div className=' grid grid-cols-2 '>
                        <div className=' flrx justify-start text-h6 text-white'>
                          {v?.title}
                        </div>
                        <div className=' flex justify-end text-h4 text-white'>
                          ...
                        </div>
                      </div>
                      <div className=' text-[42px] text-white'>
                                     {v?.timeframes?.monthly?.current} hrs
                      </div>
                      <div className='text-desaturated-blue '>
                        Last week - 36 hrs
                      </div>
                    </div>
                  </div> 
                </div>
              )
            })}
          </div>
          </div>:null}



         


      </div>




    </div>
  );
}

export default App;
