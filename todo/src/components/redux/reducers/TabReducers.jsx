import * as actionTypes from '../actions/type';



import React from 'react'

export const TabReducers = (state=actionTypes.ALL_TODOS,action) => {
  switch (action.type){
    case actionTypes.TOGGLE_TABS:
        return action.activeTab
        default :
        return state;
  }
}

