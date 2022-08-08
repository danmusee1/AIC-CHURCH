import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import Link from 'next/link';

export default function Dropdown() {
    const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div>
         <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
             
              <div className={item.cName}  to={item.path}
                onClick={() => setClick(false)} >
        <Link  href='/'>
        {item.title}
            </Link>
            </div>
            </li>
          );
        })}
      </ul>
    </div>
  )
}
