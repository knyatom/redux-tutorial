import React from 'react'
import {connect} from 'react-redux'
//import { addSubscriber } from '../redux/subscribers/actions'
//import { addSubscriber } from '../redux/index'
import { addSubscriber } from '../redux'

const Subscribers = ({count,addSubscriber}) => {
    return (
        <div className="items">
            <h2>구독자 수 : {count}</h2>
            <button onClick={()=>addSubscriber()}>구독하기!</button>
        </div>
    )
}

const mapStateToProps=({subscribers})=>{
  //  console.log(subscribers.count,'state');
    return{ count:subscribers.count}
}

const mapDispatchToProps = {
    addSubscriber
}
export default connect(mapStateToProps,mapDispatchToProps)(Subscribers)
