import React, { Component } from 'react'

import {connect} from 'react-redux'

 class Detail extends Component {
    render() {
        return (
            <div>
                详情页
                {this.props.num}
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return state
    // return {
    //     prop: state.prop
    // }
}
export default connect(mapStateToProps)(Detail)