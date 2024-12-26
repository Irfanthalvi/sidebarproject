/**
    * @description      : 
    * @author           : computer
    * @group            : 
    * @created          : 03/12/2024 - 22:45:52
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/12/2024
    * - Author          : computer
    * - Modification    : 
**/
import React from 'react';
import {Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

// Layout component with Outlet
const Layout = () => (
  <div style={{display:'flex'}}>
    <div style={{flexBasis:'240px'}}>
      <Sidebar /> 
    </div>
    <div>
      <Outlet />
    </div>
  </div>
);

 export default Layout

