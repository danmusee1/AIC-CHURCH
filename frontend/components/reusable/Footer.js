import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


function Footer() {
	return (
		<>
			<div className="bg-gray-400 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
					<ul>
						<p className="text-gray-800 font-bold text-3xl pb-6">
							AIC <span className="text-red-600">UMOJA</span>
						</p>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">I’m New</p>
						<li className="link link-underline link-underline-black text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                        First Steps
						</li>
						<li className="link link-underline link-underline-black text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                        Events
						</li>
						<li className="link link-underline link-underline-black text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                        Ministries
						</li>
						<li className="link link-underline link-underline-black text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                        Contact Us
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Resources</p>
						<li className="link link-underline link-underline-black text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                        Blog
						</li>
						<li className="link link-underline link-underline-black text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                        Newsletters
						</li>
						<li className="link link-underline link-underline-black text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                        Media
						</li>
						<li className="link link-underline link-underline-black text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                        Deep Spirituality
						</li>
						<li className="link link-underline link-underline-black text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Press & Media
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
						<li className="link link-underline link-underline-black  text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Contact
						</li>
						<li className="link link-underline link-underline-black text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Support Portals
						</li>
						
						<li className="link link-underline link-underline-black text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Downloads & Resources
						</li>
						<li className="link link-underline link-underline-black text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Videos
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
				<h1 className=" text-gray-800 font-semibold">
					© 2022-2023 All rights reserved | Build with ❤ by{" "}
					<span className="hover:text-blue-600 font-semibold cursor-pointer">
						#Young CEO{" "}
					</span>
				</h1>
			</div>
		</>
	);
}

export default Footer;