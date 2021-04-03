import React,{Component} from "react";
import reactDOM from "react-dom";
import "tachyons";
import "./Avtar.css";
import Avtarlist from "./Avtarlist";


  
  class Avtar extends Component {
    constructor (){
      super();
      this.state = {
        name: "Welcome to Avtaar World"
      }
    }
    namechange(){
      this.setState({
        name:" successfully subscribed .Lot's of love from Suraj Vatsya"
      })
    }
    render(){
      const avtarlistarray = [
        {
          id: 1,
          name: "Suraj",
          job: "web development",
        },
        {
          id: 2,
          name: "Vatsya",
          job: "Python",
        },
        {
          id: 3,
          name: "Dhirendra",
          job: "Graphic Designer",
        },
        {
          id: 4,
          name: "Mishra",
          job: "Web Designer",
        }
      ];
    
     const arrayavtaarcard = avtarlistarray.map((avtarcard,i)=>{
       return <Avtarlist id={avtarlistarray[i].id}  name={avtarlistarray[i].name} job={avtarlistarray[i].job}/>
     })
    
      return (
        <div>
          <h1 className="tc" >{this.state.name}</h1>
          {arrayavtaarcard}
          <button onClick={() =>this.namechange()}>Subscribe</button>
        </div>
      )
    }
    
  }

  
 // returning array of component


  


export default Avtar;
