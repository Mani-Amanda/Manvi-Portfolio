import React from 'react'
import { Link } from 'react-scroll'
import { profilePicWithoutBg } from '../../assets'
import { navLinksdata } from '../../constants'

const Navbar=()=> {
  return (
    <div className='w-full h-20 mx-auto px-4 flex flex-wrap justify-between items-center font-titleFont'>
  <div className="flex items-center gap-4">
    <div className="h-16 w-16">
      <img
        src={profilePicWithoutBg}
        alt="profile Pic"
        className="h-full w-full rounded-full object-cover"
      />
    </div>
    <span className="text-lg  whitespace-nowrap">
      Manavi Amanda Hettiarachchi
    </span>
  </div>

  <div className="overflow-x-auto max-w-full">
    <ul className='flex items-center gap-6 flex-wrap justify-end'>
      {navLinksdata.map(({_id,title,link}) => (
        <li key={_id} className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
          <Link 
            activeClass='active'
            to={link}
            spy={true}
            smooth={true}
            offset={-70}
            duraion={500}
          >{title}</Link>
        </li>
      ))}
    </ul>
  </div>
</div>


  )
}

export default Navbar