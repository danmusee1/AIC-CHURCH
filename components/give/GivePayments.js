import React from 'react'
import { FaPaypal } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import Link from 'next/link';
export default function GivePayments() {
  return (
    <div className="lg:pl-20 pl-5 pr-5 lg:pr-20 ">
        <div className="lg:flex place-content-evenly  line   ">
            <div className="flex  place-content-evenly  line">
            <Link href='/'>
            <div className="lg:pr-40  ">
            <FaPaypal className="pb-5 text-7xl cursor-pointer text-blue-400 hover:text-red-600" />
            <h1 className="font-semibold text-lg   ">Paypal</h1>
            <div className="pt-4 linepaypal "></div>
          </div>
          </Link>
             <div className="ml-5 ">
             <FaCreditCard className="pb-5 text-7xl cursor-pointer text-blue-400 hover:text-red-600" />
             <h1 className="font-semibold text-lg">Credit card</h1>
            </div>

            </div>
            <div className="flex place-content-evenly pt-2 line">
            <div className="lg:pr-40">
            <FaMailBulk  className="pb-5 text-7xl cursor-pointer text-blue-400 hover:text-red-600" />
            <h1 className="font-semibold text-lg">Mail a check</h1>
          </div>
             <div className="">
             <FaMoneyBill className="pb-5 text-7xl cursor-pointer text-blue-400 hover:text-red-600" />
             <h1 className="font-semibold text-lg">Mpesa</h1>
            </div>

            </div>
            

        </div>
        <div className="pl-20  pb-10 "></div>

    </div>
  )
}
