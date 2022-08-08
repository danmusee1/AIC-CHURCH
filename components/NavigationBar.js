
import React from 'react'
import {  HomeIcon } from '@heroicons/react/solid'
import { BellIcon,DotsHorizontalIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, HashtagIcon, InboxInIcon, UserCircleIcon} from '@heroicons/react/outline'
import 'tailwindcss/tailwind.css'
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image'

export default function NavigationBar() {
  return (
    <div>
        <div className="">
        <Image
             // onClick={signOut}
              src=""
              alt="church-img"
              height="250px"
              width="250px"
              className="  xl:mr-2"
              
              
            />
        </div>
    </div>
  )
}
