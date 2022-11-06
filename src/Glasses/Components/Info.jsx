import React, { Component } from 'react'

export default class Info extends Component {
    render() {
        const { prod, infoDetail } = this.props;
        return (
            <button onClick={() => {
                infoDetail(prod)
            }} >
                <img src={prod.url} width={100} height={100} alt="" className='m-2' />
            </button>
        )
    }
}
