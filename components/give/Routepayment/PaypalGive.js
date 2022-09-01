import React from 'react'
import Image from 'next/image'
export default function PaypalGive() {
  return (
    <div className="pt-20 pb-20 lg:pl-20 pl-5 pr-5">
        <div className='lg:flex'>
        <div className='lg:w-2/3 lg:pr-20'>
        <h1 className='text-cyan-700  text-2xl lg:text-3xl font-bold mb-2'>
           Make a donation using PayPal
           </h1>
        <h1 className='lg:w-2/3 text-gray-500 text-lg pb-5'> 
        The AIC UMOJA Church is an approved charity
         of the PayPal Giving Fund. Paypal offers two different ways in which
          you can donate to the AIC UMOJA Church. If you are a PayPal member, 
        you can perform either of the following actions:</h1>
        <div className=''>
          <li className=" text-gray-500 text-lg pb-5">Donate via our PayPal Giving Fund page</li>
          <li className=" text-gray-500 text-lg pb-5">Donate using the PayPal app. Simply tap the “Donate” button on the home screen, and search for “AIC UMOJA Church”</li>
          <li className=" text-gray-500 text-lg pb-5">Email us at email to let us know which AIC UMOJA Church location you attend.</li>
        </div>
        <h1 className=' text-gray-500 text-lg pb-5'> All donations given via the PayPal Giving Fund 
        are 100% received by the AIC UMOJA Church. 
        You will not be charged a fee for any transaction.</h1>
        <h1 className=' text-gray-500 text-lg pb-5'> After giving your donation and once your 
        transaction is complete, PayPal should send you a confirmation email.
         This email replaces an acknowledgement from AIC UMOJA Church and is required 
         in order for the contribution(s) to be 
        tax-deductible. It should be retained for tax purposes.</h1>
        <div className=''>
          <h1 className=' text-gray-500 text-sm font-bold pb-5'>
          Questions? Contact us
          </h1>

        </div>
          
          </div>
          <div className=' lg:pr-20 lg:p-4 md:p-8 bg-white shadow-lg img-hover-zoom--point-zoom:hover img img-hover-zoom--point-zoom img'>
          <Image className="" src="https://352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/give-01.jpg" alt="" height="900" width="600"/>
          </div>
        </div>
    </div>
  )
}
