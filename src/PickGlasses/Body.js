import React, { Component } from "react";
import Data from "../Data/dataGlasses.json";
export default class Body extends Component {
  state = {
    glassesCurrent: {
      "id": 1,
      "price": 30,
      "name": "GUCCI G8850U",
      "url": "./glassesImage/v1.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
  }
  changingGlasses = newGlasses => {
    this.setState({
      glassesCurrent: newGlasses
    })
  }
  renderGlasses = () => {
   return Data.map((product,index) => {
    return (
      <img onClick={() => {this.changingGlasses(product)}} style={{width:'125px',padding:'10px',cursor:'pointer'}} className="border border-width-1 p-4" key={index} src={product.url} alt={product.id}/>
    )
   })
  };


  render() {
    const backGroundColor = {
      backgroundColor: "rgb(255, 255, 255)",
      width: "1000px",
      height: "300px",
      margin: "auto",
      marginTop: "50px",
      zIndex: "1",
    };
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-6">
            <div className="position-relative">
            <img
              className="position-absolute"src="https://media.istockphoto.com/id/1189894004/photo/beautiful-woman.jpg?b=1&s=170667a&w=0&k=20&c=HsinIRm78I3MBog1SxgtPfcaol21iT-zlZhxelIhHc8="
              alt="hinh-anh-model"style={{width:'400px',marginLeft:'-93px'}}
            />
              <img style={{width:'150px',top:'40px',right:'333px',opacity:'0.8'}} className="position-absolute" src={this.state.glassesCurrent.url}alt="hinh-glasses" />
              <div style={{top:'170px',left:'368px'}} className="position-relative">
                <div style={{backgroundColor:'rgba(255,127,0,0.5)',width:'400px',height:'97px'}} className="position-relative">
                  <div style={{left:'10px'}} className="position-absolute">
                  <p>{this.state.glassesCurrent.name}</p>
                  <p>{this.state.glassesCurrent.desc}</p>
                  </div>
                </div>
              </div>
            </div>
        
            
          </div>
          <div className="col-6">
            <img
              src="https://media.istockphoto.com/id/1189894004/photo/beautiful-woman.jpg?b=1&s=170667a&w=0&k=20&c=HsinIRm78I3MBog1SxgtPfcaol21iT-zlZhxelIhHc8="
              alt="hinh-anh-model"style={{width:'400px',marginRight:'210px'}}
            />
          </div>
        </div>
        <div className="row">
          <div className="container bg-light text-center mt-5 d-flex justify-content-center">
            {/* <ul>
              <li>Xin chao</li>
              <li>Testing</li>
            </ul> */}
            {this.renderGlasses()}
          </div>
        </div>
      </div>
    );
  }
}
