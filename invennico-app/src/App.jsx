
import 'bootstrap/dist/css/bootstrap.min.css';

import './app.scss'
import Home from './pages/home/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import DeveloperDrop from './utils/developer/DeveloperDrop';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./pages/company/about/About";
import Career from './pages/company/career/Career';
import Life from './pages/company/lifeinn/Life';
import Engagement from './pages/company/engagement/Engagement';
import Employement from './pages/company/employement/Employement';
import Hire from './pages/hire/Hire';
import Appio from './pages/services/mobile/app/Appio';
import Android from './pages/services/mobile/andriod/Android';
import ServiceAndroid from './pages/services/mobile/serviceandroid/ServiceAndroid';
import Serviceflutter from './pages/services/mobile/serviceflutter/Serviceflutter';
import Servicenative from './pages/services/mobile/servicenative/Servicenative';
import Angular from './pages/services/frontend/angular/Angular';
import Servicevue from './pages/services/frontend/vue/Servicevue';
import Servicereact from './pages/services/frontend/react/Servicereact';
import Servicejavascript from './pages/services/frontend/javascript/Servicejavascript';
import Servicenode from './pages/services/backend/node/Servicenode';
import Serviceexpress from './pages/services/backend/express/Serviceexpress';
import Servicelavarel from './pages/services/backend/laveral/Servicelavarel';  
import Python from './pages/services/backend/python/Python';
import Crmintegration from './pages/services/integration/crmintegration/Crmintegration';
import Inventory from './pages/services/integration/inventory/Inventory';
import Paymentintegration from './pages/services/integration/paymentintegration/Paymentintegration';
import Shipping from './pages/services/integration/shipping/Shipping'; 
import Webpress from './pages/services/ecommence/webpress/Webpress';
import Wooservices from './pages/services/ecommence/woo/Wooservices';
import Mobiledesigns from './pages/services/uxdesign/mobiledesigns/Mobiledesigns';
import Websiteservices from './pages/services/uxdesign/website/Websiteservices';
import Hireandroid from './pages/hire/mobile/hireandroid/Hireandroid';
import Hireios from './pages/hire/mobile/hireios/Hireios';
import Hireflutter from './pages/hire/mobile/hireflutter/Hireflutter';
import Hirenative from './pages/hire/mobile/hirenative/Hirenative';
import Mernstack from './pages/hire/web/mernstack/Mernstack';
import Meanstack from './pages/hire/web/meanstack/Meanstack';
import Hirevue from './pages/hire/web/vue/Hirevue';
import Hirejavascript from './pages/hire/web/javascript/Hirejavascript';
import Hirenode from './pages/hire/backend/nodejs/Hirenode';
import Hireexpress from './pages/hire/backend/express/Hireexpress';
import Hirelaravel from './pages/hire/backend/laravel/Hirelaravel';
import Hirepython from './pages/hire/backend/python/Hirepython';
import Hirecrmintegration from './pages/hire/integration/crmintegration/Hirecrmintegration';
import Hireinventory from './pages/hire/integration/inventory/Hireinventory'; 
import Hirepayment from './pages/hire/integration/payment/Hirepayment';
import Hireshipping from './pages/hire/integration/shipping/Hireshipping';
import Hirewordpress from './pages/hire/ecommence/wordpress/Hirewordpress';
import Hirewoo from './pages/hire/ecommence/woo/Hirewoo';
import Hiremobileapp from './pages/hire/designer/mobile/Hiremobileapp';
import Hirewebsite from './pages/hire/designer/website/Hirewebsite';

function  App(){
  return (
    <>
      <div className='app'>
     
          <BrowserRouter>
          <Routes>
             
          <Route path='/' element={<Home/>} /> 
            
            <Route  path='/developer' element={ <DeveloperDrop/>}/>
            <Route  path='/about' element={ <About/>}/>
            <Route  path='/career' element={ <Career/>}/>
            <Route  path='/life' element={ <Life/>}/>
            <Route  path='/engage' element={ <Engagement/>}/>
            <Route  path='/employee' element={ <Employement/>}/>
            <Route  path='/hire' element={ <Hire/>}/>
            <Route  path='/app' element={ <Appio/>}/>
            <Route  path='/andriod' element={ <Android/>}/>
            <Route  path='/serviceandriod' element={ <ServiceAndroid/>}/>
            <Route  path='/serviceflutter' element={ <Serviceflutter/>}/>
            <Route  path='/servicenative' element={ <Servicenative/>}/>
            <Route  path='/angular' element={ <Angular/>}/>
            <Route  path='/servicevue' element={ <Servicevue/>}/>
            <Route  path='/servicereact' element={ <Servicereact/>}/>
            <Route  path='/servicejavascript' element={ <Servicejavascript/>}/>
            <Route  path='/servicenode' element={ <Servicenode/>}/>
            <Route  path='/serviceexpress' element={ <Serviceexpress/>}/>
            <Route  path='/servicelavarel' element={ <Servicelavarel/>}/>
            <Route  path='/python' element={ <Python/>}/>
            <Route  path='/crmintegration' element={ <Crmintegration/>}/>
            <Route  path='/inventory' element={ < Inventory/>}/>
            <Route  path='/paymentintegration' element={ < Paymentintegration/>}/>
            <Route  path='/shippingintegration' element={ < Shipping/>}/>
            <Route  path='/webpress' element={ < Webpress/>}/>
            <Route  path='/wooservice' element={ < Wooservices/>}/>
            <Route  path='/mobiledesigns' element={ < Mobiledesigns/>}/>
            <Route  path='/websiteservices' element={ <  Websiteservices/>}/>
            <Route  path='/hireandroid' element={ < Hireandroid />}/>
            <Route  path='/hireios' element={ < Hireios />}/>
            <Route  path='/hireflutter' element={ < Hireflutter />}/>
            <Route  path='/hirenative' element={ < Hirenative />}/>
            <Route  path='/hiremernstack' element={ < Mernstack />}/>
            <Route  path='/hiremeanstack' element={ < Meanstack />}/>
            <Route  path='//hirevue' element={ < Hirevue />}/>
            <Route  path='/hirejavascript' element={ < Hirejavascript />}/>
            <Route  path='/hirenode' element={ < Hirenode />}/>
            <Route  path='/hireexpress' element={ < Hireexpress />}/>
            <Route  path='/hirelaravel' element={ < Hirelaravel />}/>
            <Route  path='/hirepython' element={ < Hirepython />}/>
            <Route  path='/hircrmapi' element={ < Hirecrmintegration />}/>
            <Route  path='/hireinventoryapi' element={ < Hireinventory />}/>
            <Route  path='/hirepaymentapi' element={ < Hirepayment />}/>
            <Route  path='/hireshipping' element={ < Hireshipping />}/>
            <Route  path='/hirewordpress' element={ < Hirewordpress />}/>
            <Route  path='/hirewoo' element={ < Hirewoo />}/>
            <Route  path='/hirmobile' element={ < Hiremobileapp />}/>
            <Route  path='/hirewebsite' element={ < Hirewebsite />}/>
            
             
          </Routes>
          </BrowserRouter>
       
        
     
      </div>
      
    </>
  )
  }

export default App;
