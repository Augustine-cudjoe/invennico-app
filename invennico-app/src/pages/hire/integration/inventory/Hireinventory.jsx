
import React from 'react'
import "../crmintegration/crmintegration.scss"
import Slider from "react-slick";
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
import { CgWebsite } from "react-icons/cg"

function  Hireinventory() {
    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500
      };
   
  return (
    <div className='Hireinventory'>
        <header className='mb-md-5'>
     <nav className="navbar navbar-expand-lg bg-white fixed-top  mb-md-5">
    <div className="container-fluid">
      <a className="navbar-brand mt-md-4 mt-2" href="#">
      <img className='img-fluid ms-3' 
      src='https://invennico-site.vercel.app/assets/Invenicoblack-f045e121.svg'/>         
      </a>
      <button className="navbar-toggler" type="button" 
      data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" aria-expanded="false"
       aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 "> 
          <li className="nav-item  dropdown mx-md-5 mt-md-4 mt-2">
            <a className="nav-link dropdown-toggle " href="/" role="button" 
            data-bs-toggle="dropdown" aria-expanded="false">
             Company
            </a>
            <div className="dropdown-menu ">
              <ul className='menu-holder'>
              <li><a className="dropdown-item" href="#">Invennico</a></li>
              <li><a className="dropdown-item" href="/about">About Us</a></li>
              <li><a className="dropdown-item" href="/life">Life at Invennico</a></li>
              <li><a className="dropdown-item" href="/engage">Engagement model</a></li>
              <li><a className="dropdown-item" href="/employee">What employees say about us</a></li>
           
              </ul>
            </div>
          </li>
          <li className="nav-item dropdown mx-md-5 mt-md-4 mt-2">
          <a className="nav-link dropdown-toggle " href="/" role="button"
           data-bs-toggle="dropdown" aria-expanded="false">
             Service
            </a>
             <ul className="dropdown-menu">
               <div className="row">
               <div className='col-md-4 '>
              <li><a className="dropdown-item fw-bold" href="#">Mobile App Development</a></li>
              <li>  <a className="dropdown-item"  href='/app'> <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-apple me-2" viewBox="0 0 16 16">
                             <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
                              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
                               </svg> </span>iOS App Development </a>
                </li>
                <li> <a className="dropdown-item" href='/serviceandriod'> <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-android2 me-2" viewBox="0 0 16 16">
                               <path d="m10.213 1.471.691-1.26q.069-.124-.048-.192-.128-.057-.195.058l-.7 1.27A4.8 4.8 0 0 0 8.005.941q-1.032 0-1.956.404l-.7-1.27Q5.281-.037 5.154.02q-.117.069-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.7 3.7 0 0 0 3.5 5.02h9q0-1.125-.623-2.072a4.27 4.27 0 0 0-1.664-1.476ZM6.22 3.303a.37.37 0 0 1-.267.11.35.35 0 0 1-.263-.11.37.37 0 0 1-.107-.264.37.37 0 0 1 .107-.265.35.35 0 0 1 .263-.11q.155 0 .267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264m4.101 0a.35.35 0 0 1-.262.11.37.37 0 0 1-.268-.11.36.36 0 0 1-.112-.264q0-.154.112-.265a.37.37 0 0 1 .268-.11q.155 0 .262.11a.37.37 0 0 1 .107.265q0 .153-.107.264M3.5 11.77q0 .441.311.75.311.306.76.307h.758l.01 2.182q0 .414.292.703a.96.96 0 0 0 .7.288.97.97 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182q0 .414.292.703a.97.97 0 0 0 .71.288.97.97 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76q.436 0 .749-.308.31-.307.311-.75V5.365h-9zm10.495-6.587a.98.98 0 0 0-.702.278.9.9 0 0 0-.293.685v4.063q0 .406.293.69a.97.97 0 0 0 .702.284q.42 0 .712-.284a.92.92 0 0 0 .293-.69V6.146a.9.9 0 0 0-.293-.685 1 1 0 0 0-.712-.278m-12.702.283a1 1 0 0 1 .712-.283q.41 0 .702.283a.9.9 0 0 1 .293.68v4.063a.93.93 0 0 1-.288.69.97.97 0 0 1-.707.284 1 1 0 0 1-.712-.284.92.92 0 0 1-.293-.69V6.146q0-.396.293-.68"/>
                              </svg></span> android App Development </a></li>
                    <li> <a className="dropdown-item" href='/serviceflutter'> <span><TbBrandFlutter className='me-2' /> </span>Flutter Development </a></li>
                    <li> <a className="dropdown-item" href='/servicenative'> <span>< GrReactjs className='me-2'/></span>  React Native Development </a></li>
                    

              </div>
              <div className='col-md-4'>
                
              <li> <a className="dropdown-item"  href='#'> Frontend Development </a> </li>
              <li> <a  className="dropdown-item" href='/angular'> <span> <FaAngular className='me-2'/> </span>Angular JS Development </a> </li>
                    <li> <a className="dropdown-item"  href='/servicevue'><span> <IoLogoVue className='me-2' /> </span> Vue JS Development </a></li>
                    <li> <a className="dropdown-item" href='/servicereact'> <span>< GrReactjs className='me-2'/></span>  React JS Development </a></li>
                    <li> <a className="dropdown-item" href='/servicejavascript'> <span> < RiJavascriptFill  className='me-2'/> </span> JavaScript Development </a></li>
                    
              </div>
              <div className='col-md-4'>
              <li><a className="dropdown-item " href="#">Backend Development</a></li>
              <li> <a  className="dropdown-item " href='/servicenode'> <span><FaNodeJs  className='me-2'/> </span>NodeJS Development </a> </li>
                    <li> <a className="dropdown-item "  href=' /serviceexpress'><span><SiExpress className='me-2' /> </span> Express JS Development</a></li>
                    <li> <a className="dropdown-item " href='servicelavarel'><span> <FaLaravel className='me-2'/> </span> Laravel Development</a></li>
                    <li> <a className="dropdown-item " href='/python'> <span> <SiPython  className='me-2'/> </span> Python Development</a></li>
                    
              </div>
              <div className='col-md-4'>
              <li ><a className="dropdown-item " href="#">API Integration</a></li>
              <li className='mb-3'> <a  href='/crmintegration'> <span> <img className='me-2' src='https://invennico-site.vercel.app/assets/crm-2abf640a.svg'/> </span>CRM Integration </a> </li>
                    <li className='mb-3'> <a href='inventory'><span> <img className='me-2' src='https://invennico-site.vercel.app/assets/inventory-ee896742.svg'/></span> Inventory Integration</a></li>
                    <li className='mb-3'> <a href='/paymentintegration'> <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-credit-card me-2" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                            <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                              </svg>
                              </span>
                            Payment Gateway integration
                          </a>
                                
                    </li>
                    <li className='mb-3'> <a href='/shippingintegration'> <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                   </svg></span> Shipping Integration </a></li>
                    
              </div>
              <div className='col-md-4'>
              <li><a className="dropdown-item " href="#">Ecommerce & CMS</a></li>
              <li> <a className="dropdown-item "  href='/webpress'> <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wordpress me-2" viewBox="0 0 16 16">
                               <path d="M12.633 7.653c0-.848-.305-1.435-.566-1.892l-.08-.13c-.317-.51-.594-.958-.594-1.48 0-.63.478-1.218 1.152-1.218q.03 0 .058.003l.031.003A6.84 6.84 0 0 0 8 1.137 6.86 6.86 0 0 0 2.266 4.23c.16.005.313.009.442.009.717 0 1.828-.087 1.828-.087.37-.022.414.521.044.565 0 0-.371.044-.785.065l2.5 7.434 1.5-4.506-1.07-2.929c-.369-.022-.719-.065-.719-.065-.37-.022-.326-.588.043-.566 0 0 1.134.087 1.808.087.718 0 1.83-.087 1.83-.087.37-.022.413.522.043.566 0 0-.372.043-.785.065l2.48 7.377.684-2.287.054-.173c.27-.86.469-1.495.469-2.046zM1.137 8a6.86 6.86 0 0 0 3.868 6.176L1.73 5.206A6.8 6.8 0 0 0 1.137 8"/>
                                 <path d="M6.061 14.583 8.121 8.6l2.109 5.78q.02.05.049.094a6.85 6.85 0 0 1-4.218.109m7.96-9.876q.046.328.047.706c0 .696-.13 1.479-.522 2.458l-2.096 6.06a6.86 6.86 0 0 0 2.572-9.224z"/>
                                 <path fillRule="evenodd" d="M0 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.59 8-8 8-8-3.589-8-8m.367 0c0 4.209 3.424 7.633 7.633 7.633S15.632 12.209 15.632 8C15.632 3.79 12.208.367 8 .367 3.79.367.367 3.79.367 8"/>
                            </svg></span>WordPress</a> </li>
                    <li> <a className="dropdown-item "  href='/wooservice'><span> <SiWoo className='me-2'/> </span> WooCommerce </a></li>
                    
                    
              </div>
              <div className='col-md-4'>
              <li><a className="dropdown-item " href="#">UX Design</a></li>
              <li> <a className="dropdown-item "  href='/mobiledesigns'> <span> <MdOutlineSmartphone className='me-2'/></span>Mobile App Design</a> </li>
                <li> <a className="dropdown-item "  href='/ websiteservices'> <span> < CgWebsite className='me-2'/> </span>Website Design</a></li>
                    
              </div>
               </div>
            </ul>
          </li>
          <li className="nav-item dropdown mx-md-5 mt-md-4 mt-2">
          <a className="nav-link dropdown-toggle " href="/" role="button"
           data-bs-toggle="dropdown" aria-expanded="false">
               Hire Developer
            </a>
             <ul className="dropdown-menu">
              <div className="row">
             <div className="col-md-4 ">
                
                <ul className='ms-md-0 ps-md-0 mb-3'>
                     <li className='mb-3'> <a href=''>Hire Mobile App Development</a></li>
                    <li className='mb-3'>  <a  href='/hireios'> <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-apple me-2" viewBox="0 0 16 16">
                             <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
                              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
                               </svg> </span>Hire iOS App Development </a> </li>

                    <li className='mb-3'> <a href='/ hireandroid'> <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-android2 me-2" viewBox="0 0 16 16">
                               <path d="m10.213 1.471.691-1.26q.069-.124-.048-.192-.128-.057-.195.058l-.7 1.27A4.8 4.8 0 0 0 8.005.941q-1.032 0-1.956.404l-.7-1.27Q5.281-.037 5.154.02q-.117.069-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.7 3.7 0 0 0 3.5 5.02h9q0-1.125-.623-2.072a4.27 4.27 0 0 0-1.664-1.476ZM6.22 3.303a.37.37 0 0 1-.267.11.35.35 0 0 1-.263-.11.37.37 0 0 1-.107-.264.37.37 0 0 1 .107-.265.35.35 0 0 1 .263-.11q.155 0 .267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264m4.101 0a.35.35 0 0 1-.262.11.37.37 0 0 1-.268-.11.36.36 0 0 1-.112-.264q0-.154.112-.265a.37.37 0 0 1 .268-.11q.155 0 .262.11a.37.37 0 0 1 .107.265q0 .153-.107.264M3.5 11.77q0 .441.311.75.311.306.76.307h.758l.01 2.182q0 .414.292.703a.96.96 0 0 0 .7.288.97.97 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182q0 .414.292.703a.97.97 0 0 0 .71.288.97.97 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76q.436 0 .749-.308.31-.307.311-.75V5.365h-9zm10.495-6.587a.98.98 0 0 0-.702.278.9.9 0 0 0-.293.685v4.063q0 .406.293.69a.97.97 0 0 0 .702.284q.42 0 .712-.284a.92.92 0 0 0 .293-.69V6.146a.9.9 0 0 0-.293-.685 1 1 0 0 0-.712-.278m-12.702.283a1 1 0 0 1 .712-.283q.41 0 .702.283a.9.9 0 0 1 .293.68v4.063a.93.93 0 0 1-.288.69.97.97 0 0 1-.707.284 1 1 0 0 1-.712-.284.92.92 0 0 1-.293-.69V6.146q0-.396.293-.68"/>
                              </svg></span>Hire  android App Development </a></li>
                    <li className='mb-3'> <a href='/hireflutter'> <span><TbBrandFlutter className='me-2' /> </span>Hire Flutter Development </a></li>
                    <li className='mb-3'> <a href='/hirenative'> <span>< GrReactjs className='me-2'/></span> Hire React Native Development </a></li>
                    
                </ul>
            </div>
            <div className="col-md-4 ">
                
                <ul className='ms-md-0 ps-md-0 mb-3'>
                    <li className='mb-3'> <a href='#'> Hire Web Developer</a></li>
                    <li className='mb-3'> <a  href='/hiremernstack'> <span> <FaAngular className='me-2'/> </span> MERN Stack  Developer </a> </li>
                    <li className='mb-3'> <a href='/hiremeanstack'><span> <IoLogoVue className='me-2' /> </span> MEAN Stack  Developer </a></li>
                    <li className='mb-3'> <a href='/hirevue'> <span>< GrReactjs className='me-2'/></span> Vue  Developer </a></li>
                    <li className='mb-3'> <a href='/hirejavascript'> <span> < RiJavascriptFill  className='me-2'/> </span> JavaScript Developer </a></li>
                    
                </ul>
            </div>
             
            <div className="col-md-4  ">
                
                <ul className='ms-md-0 ps-md-0 mb-3'>
                    <li className='mb-3'> <a href='#'>Hire  Backend Development</a></li>
                    <li className='mb-3'> <a  href='/hirenode'> <span><FaNodeJs  className='me-2'/> </span>NodeJS Development </a> </li>
                    <li className='mb-3'> <a href='/hireexpress'><span><SiExpress className='me-2' /> </span> Express JS Development</a></li>
                    <li className='mb-3'> <a href='/hirelaravel'><span> <FaLaravel className='me-2'/> </span> Laravel Development</a></li>
                    <li className='mb-3'> <a href='/hirepython'> <span> <SiPython  className='me-2'/> </span> Python Development</a></li>
                    
                </ul>
            </div>

            <div className="col-md-4  " >
                
                <ul className='ms-md-0 ps-md-0'>
                    <li className='mb-3'> <a href='#'>API Integration</a> </li>
                    <li className='mb-3'> <a  href='/hircrmapi'> <span> <img className='me-2' src='https://invennico-site.vercel.app/assets/crm-2abf640a.svg'/> </span>CRM Integration </a> </li>
                    <li className='mb-3'> <a href='/hireinventoryapi'><span> <img className='me-2' src='https://invennico-site.vercel.app/assets/inventory-ee896742.svg'/></span> Inventory Integration</a></li>
                    <li className='mb-3'> <a href='/hirepaymentapi'> <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-credit-card me-2" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                                  <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                                </svg></span>Payment Gateway integration</a></li>
                    <li className='mb-3'> <a href='/hireshipping'> <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                   </svg></span> Shipping Integration </a></li>
                    
                </ul>
            </div>
            <div className="col-md-4 ">
                
                <ul className='ms-md-0 ps-md-0'>
                      <li className='mb-3'> <a href='#'>Ecommerce & CMS</a></li>
                    <li className='mb-3'> <a  href='/hirewordpress'> <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wordpress me-2" viewBox="0 0 16 16">
                               <path d="M12.633 7.653c0-.848-.305-1.435-.566-1.892l-.08-.13c-.317-.51-.594-.958-.594-1.48 0-.63.478-1.218 1.152-1.218q.03 0 .058.003l.031.003A6.84 6.84 0 0 0 8 1.137 6.86 6.86 0 0 0 2.266 4.23c.16.005.313.009.442.009.717 0 1.828-.087 1.828-.087.37-.022.414.521.044.565 0 0-.371.044-.785.065l2.5 7.434 1.5-4.506-1.07-2.929c-.369-.022-.719-.065-.719-.065-.37-.022-.326-.588.043-.566 0 0 1.134.087 1.808.087.718 0 1.83-.087 1.83-.087.37-.022.413.522.043.566 0 0-.372.043-.785.065l2.48 7.377.684-2.287.054-.173c.27-.86.469-1.495.469-2.046zM1.137 8a6.86 6.86 0 0 0 3.868 6.176L1.73 5.206A6.8 6.8 0 0 0 1.137 8"/>
                                 <path d="M6.061 14.583 8.121 8.6l2.109 5.78q.02.05.049.094a6.85 6.85 0 0 1-4.218.109m7.96-9.876q.046.328.047.706c0 .696-.13 1.479-.522 2.458l-2.096 6.06a6.86 6.86 0 0 0 2.572-9.224z"/>
                                 <path fillRule="evenodd" d="M0 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.59 8-8 8-8-3.589-8-8m.367 0c0 4.209 3.424 7.633 7.633 7.633S15.632 12.209 15.632 8C15.632 3.79 12.208.367 8 .367 3.79.367.367 3.79.367 8"/>
                            </svg></span>WordPress</a> </li>
                    <li className='mb-3'> <a href='/hirewoo'><span> <SiWoo className='me-2'/> </span> WooCommerce </a></li>
                    
                    
                </ul>
            </div>
            <div className="col-md-4  ">
               
                <ul className='ms-md-0 ps-md-0'>
                   <li className='mb-3'> <a href='#'> Hire UX Designer </a></li>
                    <li className='mb-3'> <a  href='/hirmobile'> <span> <MdOutlineSmartphone className='me-2'/></span>Mobile App Design</a> </li>
                    <li className='mb-3'> <a href='/hirewebsite'> <span> < CgWebsite className='me-2'/> </span>Website Design</a></li>
                    
                    
                </ul>
            </div>
              </div>
            </ul>
          </li>
          
            <li  className='mx-md-3 hire mt-md-4 mt-2 pt-md-3'>
               <a href='/hire'>We’re Hiring</a></li>
            <li> <a href='#' className='ms-md-3 me-md-0 px-md-4 py-md-3 btn project mt-md-4 mt-2'>
               Start your project</a></li>
        </ul>
       
      </div>
    </div>
    </nav>
     </header>
     <main>
        <section className="android-hero">
        <div className="left-holder">
        <div className="d-flex gap-4 align-items-center justify-content-center">
                    <div className="left-holder">
                        <h1>Hire a Inventory  API
                            <br/>  Integration</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, <br/> 
                        sed diam nonummy nibh euismod tincidunt ut laoreet <br/>
                         dolore magna aliquam erat volutpat. Ut wisi enim ad <br/>
                          minim veniam, quis nostrud exerci tation ullamcorper <br/>
                          suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                          <div className="d-flex">
                            <div className='me-md-4 me-3'>
                                <p  className='mb-md-0 pb-md-0 years'>30+</p>
                                <p className='mt-md-0 pt-md-0'> APPS DEVELOPED</p>
                            </div>
                            <div className='me-md-4 me-3'>
                                <p  className='mb-md-0 pb-md-0 years'>5+</p>
                                <p className='mt-md-0 pt-md-0'> YEARS EXPERIENCE</p>
                            </div>
                            <div className='me-md-4 me-3'>
                                <p className='mb-md-0 pb-md-0 years'>100+</p>
                                <p className='mt-md-0 pt-md-0'> CLIENTS</p>
                            </div>
                          </div>
                          <div className="d-flex">
                            <button type='button' className='button btn px-md-4 py-md-2'>Book a call</button>
                          </div>
                    </div>
                    <div className="right-holder">
                        <img src="https://invennico-site.vercel.app/assets/undraw_developer_activity_re_39tg1-98ac20a1.svg" alt="" className="img-fluid img" />
                    </div>
                </div>
            
        </div>
        </section>
        <section className="android-developer">
        <h1  className='ms-md-5 ps-md-5'>Why Hire Inventory API Integrater from Innvennico</h1>
            <div className="d-flex gap-4 align-items-center  justify-content-around">
                <div className="left-content ">
                    
                    <p className='ps-md-5 ms-md-0  text-start'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, <br/> 
                        sed diam nonummy nibh euismod tincidunt ut laoreet <br/>
                         dolore magna aliquam erat volutpat. Ut wisi enim ad <br/>
                          minim veniam, quis nostrud exerci tation ullamcorper <br/>
                          suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                          <ul className='mb-3 text-start ps-md-5'>
                            <li className='mb-3 align-self-start'> <span>
                                 <svg xmlns="http://www.w3.org/2000/svg" 
                                 width="25" height="25" fill="currentColor"
                                  className="bi bi-check2 me-3" viewBox="0 0 16 16">
                                 <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0
                                      0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                               </svg>
                               </span> 
                               Lorem ipsum dolor sit amet,
                            </li>
                            <li  className='mb-3'> 
                            <span>
                                 <svg xmlns="http://www.w3.org/2000/svg" 
                                 width="25" height="25" fill="currentColor"
                                  className="bi bi-check2 me-3" viewBox="0 0 16 16">
                                 <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0
                                      0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                               </svg>
                               </span>
                                Consectetuer adipiscing elit, sed diam
                            </li>
                            <li  className='mb-3'>
                            <span>
                                 <svg xmlns="http://www.w3.org/2000/svg" 
                                 width="25" height="25" fill="currentColor"
                                  className="bi bi-check2 me-3" viewBox="0 0 16 16">
                                 <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0
                                      0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                               </svg>
                               </span>

                                 Nonummy nibh euismod tincidunt ut
                            </li>
                            <li  className='mb-3'> <span>
                                 <svg xmlns="http://www.w3.org/2000/svg" 
                                 width="25" height="25" fill="currentColor"
                                  className="bi bi-check2 me-3" viewBox="0 0 16 16">
                                 <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0
                                      0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                               </svg>
                               </span>
                                Laoreet dolore magna aliquam erat
                                
                             </li>
                           
                            
                          </ul>
                    <div className="d-flex mt-3 ps-md-5">
                    <button type='button' className='button btn px-md-5 py-md-2'>Book a call</button>
                    </div>
                </div>
                <div className="right-content-holder ">
                    <img src="https://invennico-site.vercel.app/assets/undraw_engineering_team_a7n21-41dac34c.svg" alt="" className="img-fluid img pt-md-5" />
                </div>
            </div>
        </section>
        <section className="android-hire">
            <div className="android-hire-header">
                <h1 className='text-center'>Hire a Dedicated</h1>
                <h2 className='text-danger text-center'>IOS Developer</h2>
                <p className='text-center'> Explore our other related services to enhance the  <br/>
                    performance of your digital product</p>
            </div>
            <div className="android-hire-salary">
                <div className="row g-4  mx-auto mx-md-5 px-md-5 ">
                    <div className="col-md-4">
                        <div className="card text-center">
                            <div className="card-body ">
                                <h4 className='card-title  my-md-4'>Junior Developer</h4>
                                <p className="price ">$300 /<span className='opacity-50'> mo </span> </p>
                                  <h5 className=' my-md-5'>What’s included</h5>
                                  <ul className=''>
                                    <li className='mb-3'>   <span>
                                 <svg xmlns="http://www.w3.org/2000/svg" 
                                 width="25" height="25" fill="currentColor"
                                  className="bi bi-check2 me-3" viewBox="0 0 16 16">
                                 <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0
                                      0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                               </svg>
                               </span> 1 - 3 years experience
                               </li>
                               <li className='mb-3'>   <span>
                                 <svg xmlns="http://www.w3.org/2000/svg" 
                                 width="25" height="25" fill="currentColor"
                                  className="bi bi-check2 me-3" viewBox="0 0 16 16">
                                 <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0
                                      0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                               </svg>
                               </span>Development Manager
                               </li>
                               <li className='mb-3'>   <span>
                                 <svg xmlns="http://www.w3.org/2000/svg" 
                                 width="25" height="25" fill="currentColor"
                                  className="bi bi-check2 me-3" viewBox="0 0 16 16">
                                 <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0
                                      0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                               </svg>
                               </span>15 Days Risk-free Trial
                               </li>
                               <li className='mb-3 mx-md-0  me-md-5'>   <span className='ms-md-0 ps-md-0'>
                                 <svg xmlns="http://www.w3.org/2000/svg" 
                                 width="25" height="25" fill="currentColor"
                                  className="bi bi-check2 ms-md-0 ps-md-0 me-3 " viewBox="0 0 16 16">
                                 <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0
                                      0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                               </svg>
                               </span>8 hours per day
                               </li>
                               <li className='mb-3'>   <span>
                                 <svg xmlns="http://www.w3.org/2000/svg" 
                                 width="25" height="25" fill="currentColor"
                                  className="bi bi-check2 me-3" viewBox="0 0 16 16">
                                 <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0
                                      0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                               </svg>
                               </span>Development Manager
                               </li>
                                  </ul>
                                  <div className='mt-md-5 mb-3 text-center'>
                                    <span className="badge px-md-5 py-3 text-center rounded-pill text-dark">Request Access</span>
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card2 text-center">
                            <div className="card-bordy">
                                <h4 className='card-title my-md-4'>Mid Level Developer</h4>
                                <p className="price text-center">$900 /<span className='opacity-50'> mo </span> </p>
                                  <h5 className=' my-md-5'>What’s included</h5>
                                  <ul className=' '>
                                    <li className='mb-3'>   <span>
                                 <svg xmlns="http://www.w3.org/2000/svg" 
                                 width="25" height="25" fill="currentColor"
                                  className="bi bi-check2 me-3" viewBox="0 0 16 16">
                                 <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0
                                      0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                               </svg>
                               </span> 1 - 3 years experience
                               </li>
                               <li className='mb-3'>   <span>
                                 <svg xmlns="http://www.w3.org/2000/svg" 
                                 width="25" height="25" fill="currentColor"
                                  className="bi bi-check2 me-3" viewBox="0 0 16 16">
                                 <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0
                                      0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                               </svg>
                               </span>Development Manager
                               </li>
                               <li className='mb-3'>   <span>
                                 <svg xmlns="http://www.w3.org/2000/svg" 
                                 width="25" height="25" fill="currentColor"
                                  className="bi bi-check2 me-3" viewBox="0 0 16 16">
                                 <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0
                                      0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                               </svg>
                               </span>15 Days Risk-free Trial
                               </li>
                               <li className='mb-3 mx-md-0 pe-md-5'>   <span className='ms-md-0 ps-md-0'>
                                 <svg xmlns="http://www.w3.org/2000/svg" 
                                 width="25" height="25" fill="currentColor"
                                  className="bi bi-check2 me-3 ms-md-0 ps-md-0 " viewBox="0 0 16 16">
                                 <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0
                                      0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                               </svg>
                               </span>8 hours per day
                               </li>
                               <li className='mb-3'>   <span>
                                 <svg xmlns="http://www.w3.org/2000/svg" 
                                 width="25" height="25" fill="currentColor"
                                  className="bi bi-check2 me-3" viewBox="0 0 16 16">
                                 <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0
                                      0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                               </svg>
                               </span>Development Manager
                               </li>
                                  </ul>
                                  <div className='my-md-5 text-center'>
                                    <span className="badge py-3  px-md-5 rounded-pill">Request Access</span>
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card3 text-center">
                            <div className="card-body">
                                <h4 className='card-title  my-md-4'>Senior Developer</h4>
                                <p className="price ">$1000 /<span className='opacity-50'> mo </span> </p>
                                  <h5 className='text-center my-md-5'>What’s included</h5>
                                  <ul className=' '>
                                    <li className='mb-3'>   <span>
                                 <svg xmlns="http://www.w3.org/2000/svg" 
                                 width="25" height="25" fill="currentColor"
                                  className="bi bi-check2 me-3" viewBox="0 0 16 16">
                                 <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0
                                      0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                               </svg>
                               </span> 1 - 3 years experience
                               </li>
                               <li className='mb-3'>   <span>
                                 <svg xmlns="http://www.w3.org/2000/svg" 
                                 width="25" height="25" fill="currentColor"
                                  className="bi bi-check2 me-3" viewBox="0 0 16 16">
                                 <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0
                                      0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                               </svg>
                               </span>Development Manager
                               </li>
                               <li className='mb-3'>   <span>
                                 <svg xmlns="http://www.w3.org/2000/svg" 
                                 width="25" height="25" fill="currentColor"
                                  className="bi bi-check2 me-3" viewBox="0 0 16 16">
                                 <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0
                                      0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                               </svg>
                               </span>15 Days Risk-free Trial
                               </li>
                               <li className='mb-3 mx-md-0 pe-md-5'>   <span className='ms-md-0 ps-md-0'>
                                 <svg xmlns="http://www.w3.org/2000/svg" 
                                 width="25" height="25" fill="currentColor"
                                  className="bi bi-check2 me-3 " viewBox="0 0 16 16">
                                 <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0
                                      0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                               </svg>
                               </span>8 hours per day
                               </li>
                               <li className='mb-3'>   <span>
                                 <svg xmlns="http://www.w3.org/2000/svg" 
                                 width="25" height="25" fill="currentColor"
                                  className="bi bi-check2 me-3" viewBox="0 0 16 16">
                                 <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0
                                      0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                               </svg>
                               </span>Development Manager
                               </li>
                                  </ul>
                                  <div className='my-md-5 text-center'>
                                    <span className="badge py-3 px-md-5 rounded-pill ">Request Access</span>
                                  </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="android-proficiency">
        
            <div className="proficiency-holder mx-md-5 px-md-5" >
                <div className="proficiency-header mx-md-5 px-md-5 mb-md-5 ">
                    <h1 className=''>Tech Stack Proficiency of our </h1>
                    <h1>Dedicated <span className='is-color text-success'>IOS Developer</span></h1>
                <p> Explore our other related services to enhance the 
                    <br/>  performance of your digital product.</p>
                </div>

                  <div className="row mx-md-2   proficiency-content align-items-center justify-content-center">
                    <div className="col-md-4">
                    <p className=' fw-bold  mx-md-5 px-md-5 mb-md-5 '>Libraries</p> 
                    <p className='fw-bold mx-md-5 px-md-5 mb-md-5  '>Database</p>
                    <p className=' fw-bold mx-md-5 px-md-5 mb-md-5  '>Hosting Platforms</p> 
                    <p className='  fw-bold mx-md-5 px-md-5 mb-md-5 '>Other</p> 
                    </div>
                    <div className="col-md-8">
                    <p  className='mb-md-5'>
                         <span className='badge p-2 me-3 text-dark  rounded-pill'>S ocket.io </span>
                       <span className='badge p-2 me-3 text-dark  rounded-pill'>Storybook </span>
                        <span className='badge p-2 me-3 text-dark  rounded-pill'>Angular </span>
                        <span className='badge p-2 me-3 text-dark  rounded-pill'>TailwindCSS </span>
                        <span className='badge p-2 me-3 text-dark  rounded-pill'>TailwindCSS </span>
                    </p>
                     
                    <p  className='mb-md-5'> <span className='badge p-2 me-3 text-dark rounded-pill'>MongoDB </span>
                       <span className='badge p-2 me-3 text-dark rounded-pill'>PostgreSQL </span>
                        <span className='badge p-2 me-3 text-dark rounded-pill'>mySQL</span>
                        <span className='badge p-2 me-3 text-dark rounded-pill'>DynamoDB </span>
                        <span className='badge p-2 me-3 text-dark rounded-pill'>CoachDB </span>
                        <span className='badge p-2 me-3 text-dark rounded-pill'>ElasticSearch </span>
                        <span className='badge p-2 me-3 text-dark rounded-pill'>SQLite </span>
                    </p>
                    <p  className='mb-md-5'> <span className='badge p-2 me-3 text-dark rounded-pill'>Kubernetes </span>
                       <span className='badge p-2 me-3 text-dark rounded-pill'>Azure </span>
                        <span className='badge p-2 me-3 text-dark rounded-pill'>Dapr</span>
                        <span className='badge p-2 me-3 text-dark rounded-pill'>Docker </span>
                        <span className='badge p-2 me-3 text-dark rounded-pill'>Heroku </span>
                        <span className='badge p-2 me-3 text-dark rounded-pill'>Firebase </span>
                      </p>
                      <p  className='mb-md-5'> <span className='badge p-2 me-3 text-dark rounded-pill'>JSX </span>
                       <span className='badge p-2 me-3 text-dark rounded-pill'>Typescript</span>
                        <span className='badge p-2 me-3 text-dark rounded-pill'>Routing</span>
                        <span className='badge p-2 me-3 text-dark rounded-pill'>Hooks </span>
                        <span className='badge p-2 me-3 text-dark rounded-pill'>Gulp </span>
                    </p>
                    </div>
                  </div>

                
            </div>
        </section>
        <section className="android-development">
            <div className="development-header">
                <h1 className='ms-md-5 ps-md-5 mb-md-5'>Our Development Work</h1>
                <div className="slider-container mx-md-3 px-md-3">
                    <Slider {...settings}>
                     <div>
                     <img  className='img-fluid img'  src='https://invennico-site.vercel.app/assets/image13-31e8c12b.jpg' alt='...'  />
                     </div> 
                     <div>
                     <img  className='img-fluid img'   src='https://invennico-site.vercel.app/assets/Frame274-72fd26f7.jpg' alt='...'  />
                     </div>
                     <div>
                     <img  className='img-fluid img' src='https://invennico-site.vercel.app/assets/image14-8d2dcea0.jpg' alt='...'  />
                     </div>
                    </Slider>
                </div>
            </div>
        </section>
        <section className='android-process'>
            <div className="process-holder">
             
              <div className="d-flex  gap-5 align-items-center justify-content-center">
                
                 <div className="left-holder">
                 <h1 className='mb-3'>Hiring Process</h1>
                 <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                    Nihil eum hic vitae magnam animi at. Commodi, quas aperiam <br/>
                    aspernatur ex modi possimus vel soluta molestiae beatae asperiores
                    <br/> excepturi, ducimus quisquam!
                    </p>
                 </div>
                 <div className="right-holder">
                    <ol className='circle-items'>
                        <li> 
                        <div className="card">
                        
                        <div className="card-body">
                           <p className="card-title fw-bold">Lorem Ipsum</p>
                             <p>  Lorem Ipsum is simply dummy text of the printing <br/>
                           and typesetting industry. Lorem Ipsum has been the <br/>
                            industry's standard dummy text ever since the<br/> 1500s,
                             when an unknown printer took a galley of  <br/>type and scrambled 
                             it to make a type specimen <br/> book.</p>
                       </div>
                       </div>

                        </li>
                        <li>
                        <div className="card">
                        
                        <div className="card-body">
                        <p className="card-title fw-bold">Lorem Ipsum</p>
                        <p> Lorem Ipsum is simply dummy text of the printing <br/>
                        and typesetting industry. Lorem Ipsum has been the <br/>
                         industry's standard dummy text ever since the<br/> 1500s,
                          when an unknown printer took a galley of  <br/>type and scrambled 
                          it to make a type specimen <br/> book.</p>
                        </div>
                    </div>
                         </li>
                        <li> 
                        <div className="card">
                        
                        <div className="card-body">
                        <p className="card-title fw-bold">Lorem Ipsum</p>
                          <p>       Lorem Ipsum is simply dummy text of the printing <br/>
                        and typesetting industry. Lorem Ipsum has been the <br/>
                         industry's standard dummy text ever since the<br/> 1500s,
                          when an unknown printer took a galley of  <br/>type and scrambled 
                          it to make a type specimen <br/> book.</p>
                        </div>
                    </div>
                        </li>
                    </ol>
                   
                   
                   
                 </div>
            </div>  
            </div>

        </section>
        
        <section className="android-business">
            <div className="business-holder">
            <div className="engage-business ">
            <div className="d-flex flex-column align-items-center ">
                <h1>Let's Launch Your Business.</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetuer
                  adipiscing elit, sed <br/> diam nonummy nibh euismod 
                  tincidunt ut laoreet dolore <br/> magna aliquam erat Lorem i
                  psum dolor sit amet, consectetuer<br/> adipiscing elit, 
                  sed diam nonummy nibh euismod tincidunt ut<br/> laoreet dolore magna 
                  aliquam erat

               </p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <button type='button' className='btn button px-md-5 border-bottom-0 text-white'>Explore open role</button>
            </div>
        </div>
            </div>
        </section>
        <section className="android-project">
            <div className="project-holder">
            <div className="row g-2 teach-content mx-md-5 justify-content-center align-items-center ">
            <div className="col-md-6">
                <div className="business-holder ps-md-5">
                    <h5 className='fw-bolder fs-1 ps-3'>Let’s Talk</h5>
                    <h1 className='ps-2'>Business!</h1>
                    <p className='ps-3'>Have questions about your idea? Drop <br/>
                     in your details to discuss with our <br/>
                      solution consultants. We look forward <br/>
                       to hear from you.</p>

                </div>
                <div className="business-icons mx-md-2">
                   <h4  className='ps-md-4 ps-3'> <span><img className='img-fluid mb-md-3 mb-2' src='https://invennico-site.vercel.app/assets/RingingPhone-1efa64c0.svg'/>  </span> Give us a call</h4>
                       
                    <ul>
                         <li className='mt-md-3 mt-2'> <span><img className='img-fluid  ' src='https://invennico-site.vercel.app/assets/India-872ee449.svg'/>  </span> India  <br/> +91-00-000-0000</li>
                        <li className='mt-md-3 mt-2'> <span><img className='img-fluid ' src='https://invennico-site.vercel.app/assets/Ghana-73792450.svg'/>  </span> Ghana  <br/> +233-00-000-0000</li>
                    </ul>
                </div>
                <div className="d-flex mx-md-5 ps-3">
                    <button className='btn px-md-5 py-3 business text-white text-center'>Send us an email</button>
                </div>
            </div>
            <div className="col-md-6">
                <div className="project-holder">
                    <h2 className='fw-bold ps-3'>For Project Inquiries</h2>
                </div>
                <div className="form-content">
                <div className="mb-3">
                  <input type="text" className="form-control p-3 border-start-0 border-top-0 border-end-0 " id="exampleFormControlInput1" placeholder="Name"/>
                </div>
           <div className="mb-3 ">
              <input type="email" className="form-control border-start-0 border-top-0 border-end-0 p-3" id="exampleFormControlInput1" placeholder="Email"/>
              
           </div>
           <div className="mb-3">
             <div className="d-flex">
             <select className='border-start-0 border-top-0 border-end-0 p-3' >
            <option   className='border-start-0 border-top-0 border-end-0 p-3 option'>+233</option>
            </select>
               <input type="text" className="form-control p-3 ms-3 border-start-0 border-top-0 border-end-0" placeholder='000-000-000'/>
             </div>
           </div>
                </div>
                <div className="service-option mt-md-5 mt-3 mb-md-5 mb-3 ps-3">
                    <p>service-option</p>
                    <p><span className="badge p-3  service-span  rounded-pill "> MOBILE APP DEVELOPMENT</span> <span className="service-span  p-3 badge  rounded-pill "> SEARCH ENGINE  MARKETING </span> </p>
                    <p><span className="badge p-3 service-span  rounded-pill "> WEBSITE DEVELOPMENT</span> <span className=" p-3 badge service-span  rounded-pill "> SOCIAL MEDIA MARKETING </span> </p>
                    <p><span className="badge p-3 service-span  rounded-pill "> STRIPE PAYMENT INTEGRATION</span> </p>
                </div>
                <div className="business-form mb-md-5">
                <div className="mb-3">
                 <textarea className="form-control border-start-0 border-top-0 border-end-0" placeholder='Tell us about your project' id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  <div className="d-flex ms-3">
                    <button className='btn px-md-5 py-3 business text-white text-center'>Submit Inquiry</button>
                </div>
                </div>
               
            </div>
          </div>
            </div>
        </section>
     </main>
     <footer>
    <div className="  footer-section  mt-md-5">
        <div className="footer-header mb-md-5 px-3 mx-3  mb-3 mt-md-5">
            <div className="row g-4 mx-3 px-3 mx-md-5 justify-content-center align-items-center">
                 <div className="col-md-6">
                    <img className='img-fluid ps-md-5' src='https://invennico-site.vercel.app/assets/Invenicoblack-f045e121.svg'/>
                 </div>
                 <div className="col-md-3">
                    <h6><span> <img className='img-fluid' src='https://invennico-site.vercel.app/assets/India-872ee449.svg'/> </span> India</h6>
                    <ul>
                        <li> Vadodara, Gujarat 212, K10</li>
                         <li> GRANDB/H ATLANTIS </li>
                         <li> K10,Vadodara, Gujarat </li>
                         <li> 390007 </li>
                          
                    </ul>
                 </div>
                 <div className="col-md-3">
                    <h6><span> <img className='img-fluid' src='https://invennico-site.vercel.app/assets/Ghana-73792450.svg'/> </span> Ghana</h6>
                    <ul>
                        <li> Vadodara, Gujarat 212, K10</li>
                         <li> GRANDB/H ATLANTIS </li>
                         <li> K10,Vadodara, Gujarat </li>
                         <li> 390007 </li>
                          
                    </ul>
                 </div>
            </div>
        </div>
         <div className="row g-2 ms-3  ps-md-5 mx-md-5 footer-content justify-content-center align-items-center">
           <div className="col-md-3 ">
            <h6 className='fw-bold'>Need Help?</h6>
             <ul>
                <li className='fw-bold'> Call Us:</li>
                <li > <span> <img src='https://invennico-site.vercel.app/assets/India-872ee449.svg'/></span> +91 000-000-000</li>
                <li > <span> <img src='https://invennico-site.vercel.app/assets/Ghana-73792450.svg'/></span> +91 000-000-000</li>
                
             </ul>
             <h6 className='fw-bold'> Email and Skype</h6>
             <ul>
                <li> <span><img className='img-fluid' src='https://invennico-site.vercel.app/assets/GmailLogo-6246ff64.svg'/> </span>
                   hello@invennico.com</li>
                <li>
                <span> <img className='img-fluid' src='https://invennico-site.vercel.app/assets/Skype-885f1eba.svg'/></span>
                    invennico.official</li>
             </ul>
           </div>
           <div className="col-md-3">
              <h6 className='fw-bold'>Quick as</h6>
              <ul>
                 <li> <a href='#'>About Us</a></li>
                 <li> <a href='#'>Contact Us</a></li>
                 <li> <a href='#'>Services</a></li>
                 <li> <a href='#'>Hire Developer</a></li>
                 <li> <a href='#'>Projects</a></li>
                 <li> <a href='#'>Partnerships</a></li>
              </ul>

           </div>
           <div className="col-md-3">
              <h6 className='fw-bold'>Services</h6>
              <ul>
                 <li> Search Engine Marketing</li>
                 <li> Web Development</li>
                 <li> Organic SEO</li>
                 <li> Stripe Payment Integration</li>
                 <li> Social Media Marketing</li>
                 <li> Mobile App Development</li>
              </ul>

           </div>
           <div className="col-md-3">
              <h6 className='fw-bold'>Tech Stack</h6>
              <ul>
                 <li> Mobile App Development</li>
                 <li> Social Media Marketing</li>
                 <li> React JS</li>
                 <li> MEVN Stack</li>
                 <li> MERN Stack</li>
                 <li> MEAN Stack</li>
              </ul>

           </div>
        </div>
        <div className="mt-md-5 ps-md-5 ps-3 row g-4 justify-content-center align-items-center mx-md-5">
           <div className="col">
            <p> © Invennico 2022. All right reserved</p>
           </div>
           <div className="col-md-4">
           <p>Terms and Conditions Privacy Policy</p>
           </div>
           
           <div className="col-md-4">
            <div className="d-flex flex-row social-media ">
                <li> <a href='#'> <img  className='mx-md-2 mx-3' src='https://invennico-site.vercel.app/assets/facebook(1)-3ba255a6.svg'/> </a> </li>
                <li> <a href='#'> <img className='mx-md-2 mx-3' src='https://invennico-site.vercel.app/assets/Vector-ec3486aa.svg'/> </a> </li>
                <li> <a href='#'> <img className='mx-md-2 mx-3' src='https://invennico-site.vercel.app/assets/Vector(1)-4237b186.svg'/></a> </li>
                <li> <a href='#'> <img className='mx-md-2 mx-3'  src='https://invennico-site.vercel.app/assets/Vector(2)-d73b623b.svg'/> </a> </li>
                <li> <a href='#'> <img className='mx-md-2 mx-3'  src='https://invennico-site.vercel.app/assets/Vector(3)-63705b93.svg'/> </a> </li>
            </div>
        </div>
        </div>
         
    </div>
     </footer>

    </div>
  )
}

export default Hireinventory;