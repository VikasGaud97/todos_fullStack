import React from 'react'
import { ALL_TABS } from '../redux/actions/type'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTab } from '../redux/actions'
import "./tabs.css"

const Tabs = ({currentTab}) => {
    const dispatch = useDispatch();
  
  return (
    <div className='tab_container'>
<div className='middle_layer'>
 {   ALL_TABS.map((tab)=>{
      return <button className={tab === currentTab ? "tab_button selected":'tab_button'} onClick={()=>dispatch(toggleTab(tab))}>{tab}</button>
    })}
    </div>
     </div>
  )
}

export default Tabs