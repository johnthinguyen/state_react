import React, { Component } from 'react'
import Info from './Info'

export default class Banner extends Component {
  render() {
    let { info, render } = this.props
    return (
      <div>
        <div className="">
          <div className="row d-flex justify-content-between">
            <div className="col-4">
              <div className="card">
                <img src="./img/model.jpg" alt="" width={350} height={550} />
                <img src="./img/v1.png" alt="" className='position-absolute' style={{ width: 200, top: 140, left: 77, opacity: 0.7 }} />
                <div className="card-body">
                  <h3>Name : FENDI F4300 </h3>
                  <h2>Price : 60 $</h2>
                  <p>Description : Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <img src="./img/model.jpg" alt="" width={350} height={550} />
                <img src={info.url} alt="" className='position-absolute ' style={{ width: 200, top: 140, left: 77, opacity: 0.7 }} />
                <div className="card-body  ">
                  <h3> Name:{info.name} </h3>
                  <h2>Price:{info.price} $</h2>
                  <p>Description:{info.desc}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg mt-5 text-center" >
            <h2 className='text-center p-2'>Chọn kính bên dưới</h2>
            {render()}
          </div>
        </div>

      </div>
    )
  }
}
