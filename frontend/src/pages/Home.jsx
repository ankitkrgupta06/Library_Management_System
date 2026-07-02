import React from 'react'
import Sidebar from '../components/Sidebar'
import { BookMarked, ShieldCheck, Users } from 'lucide-react';
import { useAuth } from '../shared/AuthContext';

const navItems=[
  {
    label:"Student Dashboard",
    description:"Open issued books,fines and profile details",
    href:"/user/dashboard",
    match:"/user",
    icon:"dashboard"
  },
  {
    label:"Admin Dashboard",
    description:"Manage student issues, fines and returns",
    href:"/admin/dashboard",
    match:"/admin",
    icon:"admin",
  },
];

const features=[
  {
    icon:BookMarked,
    title:"Manual Book issuing",
    text:"Track manual book issues,due dates,returns and dynamic fine calculation in one workflow",
  },
  {
    icons:Users,
    title:"Student Self-Service",
    text:"Students can review borrowed books,pending fines,academic details and recent activity quickly",
  },
  {
    icons:ShieldCheck,
    title:"Admin desk controls",
    text:"Library staff can manage student records,manual book issues,overdue items,and fine setting from the admin area",
  },
];

function Home() {
  const {currentUser,logout}=useAuth();
  const footerItems=currentUser
    ?[
      {
        label:"logout",
        icon:"login",
        kind:"primary",
        action:()=>{
          logout();
          navigate("/");
        },
      },
    ]
    :[
      {label:"login",href:"/login",icon:"login",kind:"primary"},
      {
        label:"Sign Up",
        href:"/signup",
        icon:"signup",
        kind:"secondary"
      }
    ];

  return (
    <div>
      <Sidebar 
        title="ShelfWise" 
        subtitle="Library management portal" 
        badge="Beautiful Theme"
        navItems={navItems}
        footerItems={footerItems}
        />
    </div>
  )
}

export default Home