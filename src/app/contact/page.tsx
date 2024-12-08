import { FaPhoneAlt,  } from 'react-icons/fa';

export default function Contact(){
    return(
        <div>
            <div className="w-[114px] h-[21px] flex relative left-[135px] mt-10">
            <p className="w-[42px] h-[21px]">Home 

</p>
<p className="ml-1"> /</p>
<p className="w-[42px] h-[21px] ml-1"> About

</p>

            </div>
            <div className='flex'>
        <div className='w-[340px] h-[457px] relative left-[135px] '>
          <div className='w-[270px] h-[366px] left-[35px] gap-[32px]  '>
            <div className='w-[262px] h-[122px] gap-[24px] '>
              <div className='w-[135px] h-[40px] gap-[16px] mt-4 flex'>
                {/* image */}
                <div className='bg-[#DB4444] pl-[10px] pt-[10px] w-[40px] rounded-[40px] '>
                <FaPhoneAlt className=' ' />
                </div>
                <p className='font-semibold'>Call To Us</p>
                </div>
              <div className='w-[262px] text-[14px] mt-4 h-[58px] gap-[16px]'>
                <p>We are available 24/7, 7 days a week.</p>
                <p  className='mt-2'>Phone: +8801611112222</p>
              </div>
              <hr />
              <p className='w-[270px] bg-black h-[1px] mt-4 '></p>

              </div>
              <div className='w-[250px] h-[180px] gap-[24px] mt-8 '>
                <div className='w-[px] h-[40px] gap-[16px] '>
                {/* image */}
                <div className='w-[px] h-[40px] gap-[16px] mt-4 flex'>
                {/* image */}
                <div className='bg-[#DB4444] pl-[10px] pt-[10px] w-[40px] rounded-[40px] '>
                <FaPhoneAlt className=' ' />

                </div>
                <p className='font-semibold '>Write To US</p>
                </div>
                {/* <hr /> */}
                </div>
                

                <div className='w-[250px] h-[116px] gap-[16px] grid mt-10'>
                <p className='w-[250px] h-[42px] '>Fill out our form and we will contact you within 24 hours.</p>
                  <p className='w-[232px] h-[21px] mt-4'>Emails:customer@exclusive.com</p>
                  <p className='w-[232px] h-[21px] mt-4 '>Emails: support@exclusive.com</p>
                  
                </div>
                

              </div>
            </div>
        </div>

          <div className='w-[800px] h-[457px] relative left-[135px] rounded-[4px] '>
            <div className='w-[737px] h-[377px] left-[31px]  '>
              <div className='w-[50px] gap-[16px] flex'>
                <input className='bg-slate-200 w-[235px] ' value='' placeholder='Your Name'  />
                <input className='bg-slate-200 w-[235px] ' value='' placeholder='Your Email'  />
                <input className='bg-slate-200 w-[235px] ' value='' placeholder='Your Phone'  />

                
              
              </div>
              <textarea className='mt-7' name="message" rows={9} cols={67}>     Write Comment here</textarea>
              <div className='w-[215px] h-[56px] relative left-[400px] mt-7 bg-[#DB4444] pt-4 pr-[48px] pb-4 pl-[48px] text-white justify-items-end '>
                <button>
                    Send Message
                </button>
              </div>

              
              </div>
          </div>
          </div>
          

          </div>
    )
}