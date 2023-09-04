import './App.css';
import jeremy from "./components/images/image-jeremy.png"
import work from "./components/images/icon-work.svg"

function App() {
  const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]


  console.log(data)

  return (
    <div className="App h-[100%] bg-very-dark-blue p-[50px]">
      <div className=' grid grid-cols-4 gap-4 h-[100%]'>
        <div className='bg-[#1d204b] h-[100%] rounded-[20px]'>
          <div className=' bg-[#5746ea] h-[70%] rounded-[20px] p-10 '>

            <div className=' '>
                <img src={jeremy} alt="jeremy" className=' h-[100px] w-[100px] border-2 border-[#fff] rounded-[50%]'/>
            </div>

            <p className=' text-[#9d98f8] pt-10'>Report for</p>

            <h1 className='text-h1 text-[#fff] leading-[46px]'>Jeremy</h1>
            <h1 className='text-h1 text-[#fff] leading-[46px]'>Robson</h1>

          </div >

          <div className='px-10 py-3'>
          <div className=' hover:text-[#fff] duration-300 cursor-pointer text-desaturated-blue pb-1'>
            Daily
          </div>
          <div className='hover:text-[#fff] duration-300  cursor-pointer text-desaturated-blue pb-1'>
            Weekly
          </div>
          <div className='hover:text-[#fff] duration-300  cursor-pointer text-desaturated-blue pb-1'>
            Monthly
          </div>
          </div>
       


        </div>
        <div className=' col-span-3 h-[100%]'>
          <div className=' grid grid-cols-3 gap-10 h-[100%] '>
            <div className='relative'>
            <div className=' bg-secondary rounded-[20px] h-[46%] '>
            <div className=' h-[20%] z-10 z-index-low '>
              <img src={work} alt="work" className='z-10 z-index-low'/>
            </div>
          <div className=' bg-[#1d204b] z-20 h-[80%] rounded-[20px] z-index-high '>

          </div>
            </div>
          
            </div>

          </div>

        </div>
      </div>
       



    </div>
  );
}

export default App;
