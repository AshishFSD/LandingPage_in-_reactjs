
import React from 'react';
import './dog.css';

export class Dog extends React.Component{

// Lets create state 

 constructor(props){
     super(props);
     this.state={
            color:'#9C9EFE',
            colorCode:"will be visibel here",
     }

     this.handlClik =this.handlClik.bind(this);
 }

 // click handler function for ==Pick Color== Button 
  handlClik(){
      const colorData= ['#FF6633', '#FFB399', '#FF33FF' ,'#FFFF99', '#00B3E6', 
      '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
      '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
      '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
      '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
      '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
      '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
      '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
      '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
      '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
    let count =Math.floor(Math.random()*colorData.length);

     console.log(count);
      this.setState({
           color:colorData[count],
           colorCode:colorData[count]
      })

  }


    render(){

        return(
             <div className='main' style={{background:this.state.color}}>
                  <h2> <span>Color Code:</span> <span className='codecss'>{this.state.colorCode}</span></h2>
                   

                     <button className='btn' onClick={this.handlClik}>Pick Color</button>
                    
             </div>
        )
    }
} 