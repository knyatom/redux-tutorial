import React from 'react'
import {connect} from 'react-redux'

const Display = (props) => {
    return (
        <div className="items">
            <p> 구독자수 :{props.count} </p>
        </div>
    )
}
const mapStateToProps=({subscribers})=>{
  //  console.log(subscribers.count,'state');
    return{ count:subscribers.count}
}

export default connect(mapStateToProps)(Display)

