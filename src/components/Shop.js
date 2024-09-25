import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from './index'
const Shop = () => {
  const dispatch=useDispatch()
  const actions =bindActionCreators(actionCreators,dispatch);
  return (
    <div className="border borderd mx-auto d-flex justify-content-center ">
      

      <label className="btn  ms-5" htmlFor="deposite">DEPOSITE<button id="deposite" className="btn btn-danger ms-5" onClick={()=>(actions.depositMoney(100))}>+</button></label>
      <label className="btn ms-5" htmlFor="withdraw">WITHDRAW<button id="withdraw" className="btn btn-danger ms-5" onClick={()=>(actions.withdrawMoney(100))}>-</button></label>

    </div>
  )
}

export default Shop

