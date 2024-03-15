
import React from 'react'
import "./sevice.scss"
import { GrReactjs } from "react-icons/gr";
import { TbBrandFlutter } from "react-icons/tb";
import { FaAngular } from "react-icons/fa";
import { IoLogoVue } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { SiWoo } from "react-icons/si";
import { MdOutlineSmartphone } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

function Service() {
  return (
    <div>
        <div className="row g-3 mx-md-5 mt-md-5 mx-3 mt-3">
            <div className="col-md-4">
                <h4 className='fw-bold'>Mobile App Development</h4>
                <ul className='ms-md-0 ps-md-0'>
                    <li>  <a  href='/app'> <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-apple me-2" viewBox="0 0 16 16">
                             <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
                              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
                               </svg> </span>iOS App Development </a>
                         </li>

                    <li> <a href='/serviceandriod'> <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-android2 me-2" viewBox="0 0 16 16">
                               <path d="m10.213 1.471.691-1.26q.069-.124-.048-.192-.128-.057-.195.058l-.7 1.27A4.8 4.8 0 0 0 8.005.941q-1.032 0-1.956.404l-.7-1.27Q5.281-.037 5.154.02q-.117.069-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.7 3.7 0 0 0 3.5 5.02h9q0-1.125-.623-2.072a4.27 4.27 0 0 0-1.664-1.476ZM6.22 3.303a.37.37 0 0 1-.267.11.35.35 0 0 1-.263-.11.37.37 0 0 1-.107-.264.37.37 0 0 1 .107-.265.35.35 0 0 1 .263-.11q.155 0 .267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264m4.101 0a.35.35 0 0 1-.262.11.37.37 0 0 1-.268-.11.36.36 0 0 1-.112-.264q0-.154.112-.265a.37.37 0 0 1 .268-.11q.155 0 .262.11a.37.37 0 0 1 .107.265q0 .153-.107.264M3.5 11.77q0 .441.311.75.311.306.76.307h.758l.01 2.182q0 .414.292.703a.96.96 0 0 0 .7.288.97.97 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182q0 .414.292.703a.97.97 0 0 0 .71.288.97.97 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76q.436 0 .749-.308.31-.307.311-.75V5.365h-9zm10.495-6.587a.98.98 0 0 0-.702.278.9.9 0 0 0-.293.685v4.063q0 .406.293.69a.97.97 0 0 0 .702.284q.42 0 .712-.284a.92.92 0 0 0 .293-.69V6.146a.9.9 0 0 0-.293-.685 1 1 0 0 0-.712-.278m-12.702.283a1 1 0 0 1 .712-.283q.41 0 .702.283a.9.9 0 0 1 .293.68v4.063a.93.93 0 0 1-.288.69.97.97 0 0 1-.707.284 1 1 0 0 1-.712-.284.92.92 0 0 1-.293-.69V6.146q0-.396.293-.68"/>
                              </svg></span> android App Development </a></li>
                    <li> <a href='/serviceflutter'> <span><TbBrandFlutter className='me-2' /> </span>Flutter Development </a></li>
                    <li> <a href='/servicenative'> <span>< GrReactjs className='me-2'/></span>  React Native Development </a></li>
                    
                </ul>
            </div>
            <div className="col-md-4">
                <h4 className='fw-bold'>Frontend Development</h4>
                <ul className='ms-md-0 ps-md-0'>
                    <li> <a  href='/angular'> <span> <FaAngular className='me-2'/> </span>Angular JS Development </a> </li>
                    <li> <a href='/servicevue'><span> <IoLogoVue className='me-2' /> </span> Vue JS Development </a></li>
                    <li> <a href='/servicereact'> <span>< GrReactjs className='me-2'/></span>  React JS Development </a></li>
                    <li> <a href='/servicejavascript'> <span> < RiJavascriptFill  className='me-2'/> </span> JavaScript Development </a></li>
                    
                </ul>
            </div>
            <div className="col-md-4">
                <h4 className='fw-bold'>Backend Development</h4>
                <ul className='ms-md-0 ps-md-0'>
                    <li> <a  href='/servicenode'> <span><FaNodeJs  className='me-2'/> </span>NodeJS Development </a> </li>
                    <li> <a href=' /serviceexpress'><span><SiExpress className='me-2' /> </span> Express JS Development</a></li>
                    <li> <a href='servicelavarel'><span> <FaLaravel className='me-2'/> </span> Laravel Development</a></li>
                    <li> <a href='/python'> <span> <SiPython  className='me-2'/> </span> Python Development</a></li>
                    
                </ul>
            </div>
            <div className="col-md-4 mt-md-5 mt-3" >
                <h4 className='fw-bold'>API Integration</h4>
                <ul className='ms-md-0 ps-md-0'>
                    <li> <a  href='/crmintegration'> <span> <img className='me-2' src='https://invennico-site.vercel.app/assets/crm-2abf640a.svg'/> </span>CRM Integration </a> </li>
                    <li> <a href='inventory'><span> <img className='me-2' src='https://invennico-site.vercel.app/assets/inventory-ee896742.svg'/></span> Inventory Integration</a></li>
                    <li> <a href='/paymentintegration'> <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-credit-card me-2" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                                  <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                                </svg></span>Payment Gateway integration</a></li>
                    <li> <a href='/shippingintegration'> <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                   </svg></span> Shipping Integration </a></li>
                    
                </ul>
            </div>
            <div className="col-md-4 mt-md-5 mt-3">
                <h4 className='fw-bold'>Ecommerce & CMS</h4>
                <ul className='ms-md-0 ps-md-0'>
                    <li> <a  href='/webpress'> <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wordpress me-2" viewBox="0 0 16 16">
                               <path d="M12.633 7.653c0-.848-.305-1.435-.566-1.892l-.08-.13c-.317-.51-.594-.958-.594-1.48 0-.63.478-1.218 1.152-1.218q.03 0 .058.003l.031.003A6.84 6.84 0 0 0 8 1.137 6.86 6.86 0 0 0 2.266 4.23c.16.005.313.009.442.009.717 0 1.828-.087 1.828-.087.37-.022.414.521.044.565 0 0-.371.044-.785.065l2.5 7.434 1.5-4.506-1.07-2.929c-.369-.022-.719-.065-.719-.065-.37-.022-.326-.588.043-.566 0 0 1.134.087 1.808.087.718 0 1.83-.087 1.83-.087.37-.022.413.522.043.566 0 0-.372.043-.785.065l2.48 7.377.684-2.287.054-.173c.27-.86.469-1.495.469-2.046zM1.137 8a6.86 6.86 0 0 0 3.868 6.176L1.73 5.206A6.8 6.8 0 0 0 1.137 8"/>
                                 <path d="M6.061 14.583 8.121 8.6l2.109 5.78q.02.05.049.094a6.85 6.85 0 0 1-4.218.109m7.96-9.876q.046.328.047.706c0 .696-.13 1.479-.522 2.458l-2.096 6.06a6.86 6.86 0 0 0 2.572-9.224z"/>
                                 <path fillRule="evenodd" d="M0 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.59 8-8 8-8-3.589-8-8m.367 0c0 4.209 3.424 7.633 7.633 7.633S15.632 12.209 15.632 8C15.632 3.79 12.208.367 8 .367 3.79.367.367 3.79.367 8"/>
                            </svg></span>WordPress</a> </li>
                    <li> <a href='/wooservice'><span> <SiWoo className='me-2'/> </span> WooCommerce </a></li>
                    
                    
                </ul>
            </div>
            <div className="col-md-4 mt-md-5 mt-3">
                <h4 className='fw-bold'>UX Design</h4>
                <ul className='ms-md-0 ps-md-0'>
                    <li> <a  href='/mobiledesigns'> <span> <MdOutlineSmartphone className='me-2'/></span>Mobile App Design</a> </li>
                    <li> <a href='/ websiteservices'> <span> < CgWebsite className='me-2'/> </span>Website Design</a></li>
                    
                    
                </ul>
            </div>
            
            
        </div>
    </div>
  )
}

export default Service;