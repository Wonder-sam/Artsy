import './App.css';
import boy from './assets/images/boy.svg'
import leaf from './assets/images/leaf.svg'
import girl from './assets/images/girl.svg'
import kangaroo from './assets/images/kangaroo.svg'
import berry from './assets/images/berry.svg'
import { DisplayProducts } from './dataset/productsData';
import showroom from './assets/images/showroom.svg'
import girlclip from './assets/images/girlclip.svg'
import smile from './assets/images/smile.svg'
import flower from './assets/images/flower.svg'
import whitedress from './assets/images/whitedress.svg'

const positions = [0, 5, 10, 15, 20];

function App() {
  return (
    <div>
      <div className="w-full">
        <h1 className='container mx-auto text-[150%] mb-[8%] font-[ClashDisplaySemiBold] text-center leading-relaxed'>
          Photography is poetry &<br/> beautiful untold stories
        </h1>
        <div className='relative mb-[4%] sm:mb-0'>
          <h5 className='container mx-auto w-[85%] sm:w-[50%] text-center font-[SatoshiVariable]'>
          Flip through more than 10,000 vintage shots, old photographs, historic images and captures seamlessly in one place.
          Register to get top access.
          </h5>
        </div>
      </div>
      <div className='w-full hidden sm:flex h-96 overflow-hidden flex flex-row flex-nowrap mb-32 justify-start' >
        <div className="w-1/5 flex flex-none flex-row flex-nowrap overflow-hidden mr-4 -ml-16 mt-24">
          <img src={boy} className=" inline-block mr-4" alt="" />
          <img src={leaf} className="inline-block mr-4" alt=""/>
          <img src={girl} className="inline-block mr-4" alt=""/>
          <img src={kangaroo} className="inline-block mr-4" alt=""/>
          <img src={berry} className="inline-block mr-4" alt=""/>
        </div>
        <div className="w-1/5 flex flex-none flex-row flex-nowrap overflow-hidden mr-4 mt-16">
          <img src={boy} className="inline-block order-5 mr-4" alt=""/>
          <img src={leaf} className="inline-block order-1 mr-4" alt=""/>
          <img src={girl} className="inline-block order-2 mr-4" alt=""/>
          <img src={kangaroo} className="inline-block order-3 mr-4" alt=""/>
          <img src={berry} className="inline-block order-4 mr-4" alt=""/>
        </div>
        <div className="w-1/5 flex flex-none flex-row flex-nowrap overflow-hidden mr-4 mt-8">
          <img src={boy} className="inline-block order-4 mr-4" alt=""/>
          <img src={leaf} className="inline-block order-5 mr-4" alt=""/>
          <img src={girl} className="inline-block order-1 mr-4" alt=""/>
          <img src={kangaroo} className="inline-block order-2 mr-4" alt=""/>
          <img src={berry} className="inline-block order-3 mr-4"  alt=""/>
        </div>
        <div className="w-1/5 flex flex-none flex-row flex-nowrap overflow-hidden mr-4 mt-16">
          <img src={boy} className="inline-block order-3 mr-4" alt=""/>
          <img src={leaf} className="inline-block order-4 mr-4" alt=""/>
          <img src={girl} className="inline-block order-5 mr-4" alt=""/>
          <img src={kangaroo} className="inline-block order-1 mr-4" alt=""/>
          <img src={berry} className="inline-block order-2 mr-4" alt=""/>
        </div>
        <div className="w-1/5 flex flex-none flex-row flex-nowrap overflow-hidden mr-4 mt-[4.25rem]">
          <img src={boy} className="inline-block order-2 mr-4" alt=""/>
          <img src={leaf} className="inline-block order-3 mr-4" alt=""/>
          <img src={girl} className="inline-block order-4 mr-4" alt=""/>
          <img src={kangaroo} className="inline-block order-5 mr-4" alt=""/>
          <img src={berry} className="inline-block order-1 mr-4" alt=""/>
        </div>
      </div>
      <div className='w-full sm:hidden h-[23rem] mb-4 sm:mb-0 relative box-border'>
        <img src={smile} className='object-contain w-[95%] h-[95%] object-center aspect-square absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-45%]' alt="flower"/>
        <img src={flower} className='object-contain w-[95%] h-[95%] object-center aspect-square absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-45%]' alt="flower"/>
        <img src={whitedress} className='object-contain w-[90%] h-[90%] object-center aspect-square absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-45%]' alt="flower"/>
      </div>
      <div className='sm:container sm:mx-auto w-[95%] ml-[5%] sm:w-4/5 mb-48'>
        <div className='w-full sm:border-b-4 sm:py-8'>
          <h4 className='font-[SatoshiVariable] text-[6.8vw] sm:text-4xl text-[#333333]'>
            Featured products
          </h4>
        </div>
       {
        DisplayProducts.map((product, index)=>(
          <div className='w-full flex flex-col sm:flex-row pt-4 sm:py-16 last: border-b border-[#333333] justify-between'>
            <div className='w-[100%] sm:w-1/2'>
              {
                index%2===0?
                <div className='relative group'>
                  <img src={product.image} className="object-cover w-[100%] h-[15rem]" />
                  <div className='absolute sm:hidden sm:group-hover:flex top-0 w-full h-full bg-[rgba(51,51,51,0.5)] flex flex-row justify-center items-center'>
                    <h4 className="font-[SatoshiRegular] text-3xl text-[#FFFFFF] mr-6">
                      View product
                    </h4>
                    <div className="rounded-full border-[0.5px] border-[#FFFFFF] aspect-square w-[15%] flex justify-center items-center hover:cursor-pointer" >
                      <svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 13C0 12.617 0.1505 12.2496 0.418392 11.9788C0.686284 11.7079 1.04962 11.5558 1.42848 11.5558H35.1206L26.1298 2.46859C25.8615 2.1974 25.7108 1.82959 25.7108 1.44607C25.7108 1.06255 25.8615 0.694733 26.1298 0.423543C26.398 0.152353 26.7618 9.03605e-09 27.1411 0C27.5205 -9.03605e-09 27.8843 0.152353 28.1525 0.423543L39.5803 11.9775C39.7134 12.1116 39.8189 12.271 39.8909 12.4465C39.9629 12.6219 40 12.81 40 13C40 13.19 39.9629 13.3781 39.8909 13.5535C39.8189 13.729 39.7134 13.8884 39.5803 14.0225L28.1525 25.5765C27.8843 25.8476 27.5205 26 27.1411 26C26.7618 26 26.398 25.8476 26.1298 25.5765C25.8615 25.3053 25.7108 24.9375 25.7108 24.5539C25.7108 24.1704 25.8615 23.8026 26.1298 23.5314L35.1206 14.4442H1.42848C1.04962 14.4442 0.686284 14.2921 0.418392 14.0212C0.1505 13.7504 0 13.383 0 13V13Z" fill="#FFFFFF"/>
                      </svg>
                    </div>
                  </div>
                </div>
                :
                <div className='w-[100%] sm:w-[90%] hidden sm:block'>
                  <h4 className='font-[STIXTwoTextBold] text-3xl text-[#333333] mb-6  hidden sm:block'>{product.productName}</h4>
                  <h5 className='font-[SatoshiRegular] text-[#333333] h-[8rem]'>{product.description}</h5>
                  <div className='w-[90%] flex flex-row  items-center'>
                    <div className='w-[85%] relative flex flex-row items-center'>
                      {
                        product.creators.map((creator, cindex)=>(
                          <div className="w-[15%] sm:w-[12%] relative [&:nth-of-type(2)]:-ml-[20px] [&:nth-of-type(3)]:-ml-[20px] 
                          [&:nth-of-type(4)]:-ml-[20px] [&:nth-of-type(5)]:-ml-[20px] ">
                            <img src={creator.image} />
                          </div>
                        ))
                      }
                      
                      <h4 className="font-[SatoshiVariable] text-base text-[#333333] ml-2">{product.creators.length} major creators</h4>
                    </div>
                    <div className="hidden rounded-full border-[0.5px] border-[#333333] aspect-square w-[15%] sm:flex justify-center items-center cursor-pointer" >
                      <svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 13C0 12.617 0.1505 12.2496 0.418392 11.9788C0.686284 11.7079 1.04962 11.5558 1.42848 11.5558H35.1206L26.1298 2.46859C25.8615 2.1974 25.7108 1.82959 25.7108 1.44607C25.7108 1.06255 25.8615 0.694733 26.1298 0.423543C26.398 0.152353 26.7618 9.03605e-09 27.1411 0C27.5205 -9.03605e-09 27.8843 0.152353 28.1525 0.423543L39.5803 11.9775C39.7134 12.1116 39.8189 12.271 39.8909 12.4465C39.9629 12.6219 40 12.81 40 13C40 13.19 39.9629 13.3781 39.8909 13.5535C39.8189 13.729 39.7134 13.8884 39.5803 14.0225L28.1525 25.5765C27.8843 25.8476 27.5205 26 27.1411 26C26.7618 26 26.398 25.8476 26.1298 25.5765C25.8615 25.3053 25.7108 24.9375 25.7108 24.5539C25.7108 24.1704 25.8615 23.8026 26.1298 23.5314L35.1206 14.4442H1.42848C1.04962 14.4442 0.686284 14.2921 0.418392 14.0212C0.1505 13.7504 0 13.383 0 13V13Z" fill="#616161"/>
                      </svg>
                    </div>
                  </div>
                </div>
              }
            </div>
            <div className='w-[100%] sm:w-1/2'>
            {
                index%2===0?
                <div className='w-[100%] sm:w-[90%] flex flex-col sm:items-end'>
                  <h4 className='font-[STIXTwoTextBold] text-3xl text-[#333333] mb-6 w-[90%] hidden sm:block'>{product.productName}</h4>
                  <h5 className='font-[SatoshiRegular] text-[#333333] w-[90%] h-[8rem]'>{product.description}</h5>
                  <div className='w-[90%] flex flex-row items-center justify-between mb-4'>
                    <div className='w-[85%] relative flex flex-row items-center'>
                      {
                        product.creators.map((creator, cindex)=>(
                          <div className="w-[15%] sm:w-[12%] relative [&:nth-of-type(2)]:-ml-[20px] [&:nth-of-type(3)]:-ml-[20px] 
                          [&:nth-of-type(4)]:-ml-[20px] [&:nth-of-type(5)]:-ml-[20px] ">
                            <img src={creator.image} />
                          </div>
                        ))
                      }
                      <h4 className="font-[SatoshiVariable] text-base text-[#333333] ml-2">{product.creators.length} major creators</h4>
                    </div>
                    <div className="hidden rounded-full border-[0.5px] border-[#333333] aspect-square w-[15%] sm:flex justify-center items-center cursor-pointer" >
                      <svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 13C0 12.617 0.1505 12.2496 0.418392 11.9788C0.686284 11.7079 1.04962 11.5558 1.42848 11.5558H35.1206L26.1298 2.46859C25.8615 2.1974 25.7108 1.82959 25.7108 1.44607C25.7108 1.06255 25.8615 0.694733 26.1298 0.423543C26.398 0.152353 26.7618 9.03605e-09 27.1411 0C27.5205 -9.03605e-09 27.8843 0.152353 28.1525 0.423543L39.5803 11.9775C39.7134 12.1116 39.8189 12.271 39.8909 12.4465C39.9629 12.6219 40 12.81 40 13C40 13.19 39.9629 13.3781 39.8909 13.5535C39.8189 13.729 39.7134 13.8884 39.5803 14.0225L28.1525 25.5765C27.8843 25.8476 27.5205 26 27.1411 26C26.7618 26 26.398 25.8476 26.1298 25.5765C25.8615 25.3053 25.7108 24.9375 25.7108 24.5539C25.7108 24.1704 25.8615 23.8026 26.1298 23.5314L35.1206 14.4442H1.42848C1.04962 14.4442 0.686284 14.2921 0.418392 14.0212C0.1505 13.7504 0 13.383 0 13V13Z" fill="#616161"/>
                      </svg>
                    </div>
                  </div>
                </div>
                :
                <><div className='flex flex-col sm:flex-row justify-end relative group' >
                  <img src={product.image} className="object-cover right-0 w-[100%] h-[15rem]" />
                  <div className='absolute sm:hidden sm:group-hover:flex top-0 w-full h-full bg-[rgba(51,51,51,0.5)] flex flex-row justify-center items-center'>
                    <h4 className="font-[SatoshiRegular] text-3xl text-[#FFFFFF] mr-6">
                      View product
                    </h4>
                    <div className="rounded-full border-[0.5px] border-[#FFFFFF] aspect-square w-[15%] flex justify-center items-center hover:cursor-pointer" >
                      <svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 13C0 12.617 0.1505 12.2496 0.418392 11.9788C0.686284 11.7079 1.04962 11.5558 1.42848 11.5558H35.1206L26.1298 2.46859C25.8615 2.1974 25.7108 1.82959 25.7108 1.44607C25.7108 1.06255 25.8615 0.694733 26.1298 0.423543C26.398 0.152353 26.7618 9.03605e-09 27.1411 0C27.5205 -9.03605e-09 27.8843 0.152353 28.1525 0.423543L39.5803 11.9775C39.7134 12.1116 39.8189 12.271 39.8909 12.4465C39.9629 12.6219 40 12.81 40 13C40 13.19 39.9629 13.3781 39.8909 13.5535C39.8189 13.729 39.7134 13.8884 39.5803 14.0225L28.1525 25.5765C27.8843 25.8476 27.5205 26 27.1411 26C26.7618 26 26.398 25.8476 26.1298 25.5765C25.8615 25.3053 25.7108 24.9375 25.7108 24.5539C25.7108 24.1704 25.8615 23.8026 26.1298 23.5314L35.1206 14.4442H1.42848C1.04962 14.4442 0.686284 14.2921 0.418392 14.0212C0.1505 13.7504 0 13.383 0 13V13Z" fill="#FFFFFF"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='w-[100%] sm:w-[90%] sm:hidden'>
                  <h4 className='font-[STIXTwoTextBold] text-3xl text-[#333333] mb-6  hidden sm:block'>{product.productName}</h4>
                  <h5 className='font-[SatoshiRegular] text-[#333333] h-[8rem]'>{product.description}</h5>
                  <div className='w-[90%] flex flex-row items-center mb-4'>
                    <div className='w-[85%] relative flex flex-row items-center'>
                      {
                        product.creators.map((creator, cindex)=>(
                          <div className="w-[15%] sm:w-[12%] relative [&:nth-of-type(2)]:-ml-[20px] [&:nth-of-type(3)]:-ml-[20px] 
                          [&:nth-of-type(4)]:-ml-[20px] [&:nth-of-type(5)]:-ml-[20px] ">
                            <img src={creator.image} />
                          </div>
                        ))
                      }
                      
                      <h4 className="font-[SatoshiVariable] text-base text-[#333333] ml-2">{product.creators.length} major creators</h4>
                    </div>
                    <div className="hidden rounded-full border-[0.5px] border-[#333333] aspect-square w-[15%] sm:flex justify-center items-center cursor-pointer" >
                      <svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 13C0 12.617 0.1505 12.2496 0.418392 11.9788C0.686284 11.7079 1.04962 11.5558 1.42848 11.5558H35.1206L26.1298 2.46859C25.8615 2.1974 25.7108 1.82959 25.7108 1.44607C25.7108 1.06255 25.8615 0.694733 26.1298 0.423543C26.398 0.152353 26.7618 9.03605e-09 27.1411 0C27.5205 -9.03605e-09 27.8843 0.152353 28.1525 0.423543L39.5803 11.9775C39.7134 12.1116 39.8189 12.271 39.8909 12.4465C39.9629 12.6219 40 12.81 40 13C40 13.19 39.9629 13.3781 39.8909 13.5535C39.8189 13.729 39.7134 13.8884 39.5803 14.0225L28.1525 25.5765C27.8843 25.8476 27.5205 26 27.1411 26C26.7618 26 26.398 25.8476 26.1298 25.5765C25.8615 25.3053 25.7108 24.9375 25.7108 24.5539C25.7108 24.1704 25.8615 23.8026 26.1298 23.5314L35.1206 14.4442H1.42848C1.04962 14.4442 0.686284 14.2921 0.418392 14.0212C0.1505 13.7504 0 13.383 0 13V13Z" fill="#616161"/>
                      </svg>
                    </div>
                  </div>
                </div></>
              }
            </div>
          </div>
        ))
       }
      </div>
      <div className='flex flex-col items-center w-full bg-gradient-to-r from-[#4693ED] via-[#79C2D2] to-[rgba(192,86,9,0.49)] mb-44'>
        <h4 className='hidden sm:block self-start ml-[7.5%] font-[SatoshiVariable] text-3xl text-[#FFFFFF] py-4 my-4 border-b'>See Upcoming Auctions and Exhibitions</h4>
        <div className='w-[100%] sm:w-[85%] relative flex justify-center p-8 sm:p-0'>
          <img src={showroom} className='object-cover sm:object-contain w-full h-[70vw] sm:h-auto' />
          <div className='absolute w-[80%] sm:bottom-8 sm:left-8 text-[#FFFFFF] flex items-center left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h4 className='text-[10vw] -mt-12 m sm:-mt-8 mr-1'>01</h4>
            <div>
              <ul className='list-disc list-outside w-[60.5vw]'>
                <li className='text-[5vw]'>MONALISA REDEFINED IN STYLE.</li>
              </ul>
              <h5 className='text-[2.5vw] leading-[400%] uppercase'>Start on : 08:00 GTS . Monday </h5>
              <div className='flex flex-col sm:flex-row justify-between'>
                <h4 className='text-[2.3vw] sm:w-[50%] font-[SatoshiRegular] tracking-[0.065rem]'>
                  GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.
                </h4>
                <div className='sm:w-[27%] mt-4 ml-20'>
                  <a className='inline-block p-2 font-[SatoshiRegular] underline text-[3vw] underline-offset-4 cursor-pointer'>See more</a>
                  <button className='inline-block p-2 font-[SatoshiRegular] border text-[3vw] rounded-lg border-[#FFFFFF]'>Set a reminder</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='sm:flex justify-between w-[85%] items-center hidden'>
          <div className='relative w-[40%] bg-[#AEAEAE] h-[1rem] rounded-full overflow-hidden'>
            <div className='absolute bg-[#FFFFFF] w-[20%] h-full'></div>
          </div>
          <div className='flex'>
            <div className='cursor-pointer aspect-square w-[3.5rem] flex items-center justify-center rounded-full border border-[#FFFFFF] my-8 mr-4 shadow-[6.7px_6.7px_6.6px_rgba(0,0,0,0.15)]'>
              <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.94469 5.85521L6.79102 2.00888L5.69229 0.910156L0.747236 5.85521L5.69229 10.8003L6.79102 9.70153L2.94469 5.85521Z" fill="white"/>
              </svg>
            </div>
            <div className='cursor-pointer aspect-square w-[3.5rem] flex items-center justify-center rounded-full border border-[#FFFFFF] my-8 shadow-[6.7px_6.7px_6.6px_rgba(0,0,0,0.15)]'>
              <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.91505 5.85521L0.0687256 2.00888L1.16745 0.910156L6.11251 5.85521L1.16745 10.8003L0.0687256 9.70153L3.91505 5.85521Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between px-8 py-8 border-y border-[#333333]'>
        <h4 className="text-5xl font-[SatoshiVariable] text=[#333333]">Explore Marketplace</h4>
        <svg width="51" height="41" viewBox="0 0 81 71" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M41.9839 1.48617C42.9332 0.534578 44.2207 0 45.5631 0C46.9055 0 48.193 0.534578 49.1423 1.48617L79.5178 31.9419C80.4668 32.8938 81 34.1847 81 35.5306C81 36.8766 80.4668 38.1675 79.5178 39.1193L49.1423 69.5751C48.1875 70.4997 46.9087 71.0114 45.5813 70.9998C44.2539 70.9882 42.9842 70.4544 42.0455 69.5133C41.1069 68.5722 40.5745 67.299 40.5629 65.9681C40.5514 64.6372 41.0617 63.355 41.9839 62.3977L63.7175 40.6066H5.06257C3.71989 40.6066 2.43221 40.0718 1.48279 39.1199C0.533377 38.168 0 36.8769 0 35.5306C0 34.1844 0.533377 32.8933 1.48279 31.9414C2.43221 30.9895 3.71989 30.4547 5.06257 30.4547H63.7175L41.9839 8.66358C41.0348 7.7117 40.5016 6.42084 40.5016 5.07488C40.5016 3.72891 41.0348 2.43806 41.9839 1.48617Z" fill="#4693ED"/>
        </svg>
      </div>
      <div className='flex items-center justify-between px-8 py-8 border-b mb-44 border-[#333333]'>
        <h4 className="text-5xl font-[SatoshiVariable] text=[#333333]">See Aution</h4>
        <svg width="51" height="41" viewBox="0 0 81 71" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M41.9839 1.48617C42.9332 0.534578 44.2207 0 45.5631 0C46.9055 0 48.193 0.534578 49.1423 1.48617L79.5178 31.9419C80.4668 32.8938 81 34.1847 81 35.5306C81 36.8766 80.4668 38.1675 79.5178 39.1193L49.1423 69.5751C48.1875 70.4997 46.9087 71.0114 45.5813 70.9998C44.2539 70.9882 42.9842 70.4544 42.0455 69.5133C41.1069 68.5722 40.5745 67.299 40.5629 65.9681C40.5514 64.6372 41.0617 63.355 41.9839 62.3977L63.7175 40.6066H5.06257C3.71989 40.6066 2.43221 40.0718 1.48279 39.1199C0.533377 38.168 0 36.8769 0 35.5306C0 34.1844 0.533377 32.8933 1.48279 31.9414C2.43221 30.9895 3.71989 30.4547 5.06257 30.4547H63.7175L41.9839 8.66358C41.0348 7.7117 40.5016 6.42084 40.5016 5.07488C40.5016 3.72891 41.0348 2.43806 41.9839 1.48617Z" fill="#4693ED"/>
        </svg>
      </div>
      <div className='bg-[#E2E2E2] flex flex-col relative w-full'>
        <h4 className='font-[ClashDisplaySemiBold] text-[3rem] ml-[15%] mt-[3rem] text-[#161616]'>
          TOP CREATORS OF<br/>THE WEEK
        </h4>

        <h4 className='font-[ClashDisplayLight] text-xl w-[70%] text-[#000000] mt-32 self-center'>
          “Everything always looked better in black and white. Everything always  as if it were the first time; there’s always more people 
          in a black and white photograph. It just makes it seem that there were more people at a gig, more people at a football match, than 
          with colour photography. Everything looks more exciting.”– Jack Lowden
        </h4>
        <div className="w-full relative mb-44">
          <p className='font-[ClashDisplaySemiBold] text-8xl text-[#000000] line-through absolute right-32'>1985</p>
        </div>
        <div className='absolute h-[26%] top-[3rem] right-20 flex'>
          <div className='h-[100%] bg-[#292929] w-[0.5rem] mr-4 rounded-full overflow-hidden'>
            <div className='h-[80%] bg-[#AEAEAE]'></div>
          </div>
          <ul className='text-2xl font-[ClashDisplayRegular] leading-loose'>
            <li>Editorials</li>
            <li>Fashion</li>
            <li>Lifestyle</li>
            <li>Blueprint</li>
          </ul>
        </div>
        <img src={girlclip} className='absolute w-[40%] -bottom-10 right-[10%]'/>
      </div>
    </div>
  );
}

export default App;
