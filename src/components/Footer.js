import React from 'react'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';

const Footer = () => {
  return (
    <div className='pqr flex flex-col md:flex-row'>
    <div><PhoneInTalkIcon className='mx-2'/> Toll free 1800 200 1234</div>
    <div><FacebookIcon className='mx-2' />www.facebook.com/cripumps</div>
    <div><LanguageIcon className='mx-2' />www.crigroups.com</div>
    </div>
  )
}

export default Footer