import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../img/logo.png'
import { FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="page-footer white">
        <div className="center">
            <div className="row">
                <div className="col l3 s12">
                    <li><Link><img src={Logo} alt='Logo' className="foot-logo" height='100px'/></Link></li>
                    <li>
                        <Link to="" className="">
                            <FaFacebookF className="grey-text social"/>
                        </Link>
                        <Link to="" className="">
                            <FaInstagram className="grey-text social"/>
                        </Link>
                        <Link to="" className="">
                            <FaTwitter className="grey-text social" />
                        </Link>
                    </li>
                </div>
                <div class="col l2 offset-l1 s12" style={{textAlign:"left"}}>
                    <h5 class="black-text">Quick Links</h5>
                    <ul>
                        <li><Link to='' className='grey-text'>Join US</Link></li>
                        <li><Link to='' className='grey-text'>News</Link></li>
                        <li><Link to='' className='grey-text'>Startups</Link></li>
                        <li><Link to='' className='grey-text'>Partner</Link></li>
                        <li><Link to='' className='grey-text'>Events</Link></li>
                    </ul>
                </div>
                <div class="col l2 offset-l1 s12" style={{textAlign:"left"}}>
                    <h5 class="black-text">Contact</h5>
                    <ul>
                        <li><Link to='' className='grey-text'>1st floor HQ</Link></li>
                        <li><Link to='' className='grey-text'>World Trade Center</Link></li>
                        <li><Link to='' className='grey-text'>Accra, Ghana</Link></li>
                        <li><Link to='' className='grey-text'>startupaccra18@gmail.com</Link></li>
                        <li><Link to='' className='grey-text'>+233 000 000 0000 / +233 000 000 0000</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer