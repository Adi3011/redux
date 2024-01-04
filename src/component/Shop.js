import React from "react";
import {actionCreators} from "../state/index.js"
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

const Shop = () => {
    const dispatch = useDispatch();
    const balance = useSelector(state=>state.amount)
    const {withDrawMoney,depositMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
      <h2>Deposit/Withdraw Money</h2>
      <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button>
      Update Balance
      <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withDrawMoney(100))}}>-</button>
      {/* <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>
      Update Balance 
      <button className="btn btn-primary mx-2" onClick={()=>{withDrawMoney(100)}}>-</button> */}
    </div>
  );
};

export default Shop;
