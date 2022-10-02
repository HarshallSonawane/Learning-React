import React, { Component } from 'react'
class Counter extends Component {
   
    state = { 
        count: 0,
        tags:["tag1", "tag2", "tag3"]
    };

    styles = {
      fontSize: 10,
      fontWeight: "bold"  
    };   

    handleIncremement = () =>{
        console.log("Increment Clicked")
        this.setState({ count:this.state.count + 1 }) //method tells that state is going to change 
    }
    render() { 

               return(
                <div>
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button onClick={this.handleIncremement} className='btn btn-secondary btn-sm'>Increment</button>
                </div>
               );             
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
        }
    
    formatCount(){
        const { count } = this.state
        const x = <p>Zero</p>
        return count === 0 ? x : count;
    }
}
 
export default Counter;

//PLAYING WITH THE BUTTON,CHANGING COLOR OF TEXT ON SOME EVENT ETC...
            {/* <span style={this.styles}>{this.formatCount()}</span>    

                <span style = {{fontSize: 30 ,fontWeight:'bold', color:'red'}}>RED</span>
            */}

            {/*
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className='btn btn-secondary btn-sm'>Increment</button>
            */}    
            
            {/*
             getBadgeClasses() {
            let classes = "badge m-2 badge-";
            classes += (this.state.count === 0) ? "warning" : "primary";
            return classes;
            }

            formatCount(){
            const { count } = this.state
            const x = <p>Zero</p>
            return count === 0 ? x : count;
        }
    */}


/*
// USE OF ARRAY MAP FUNCTION...RENDERING ARRAY ITEMS IN AN UNORDERED LIST
renderTags(){
        if(this.state.tags.length == 0) return <p>This is Empty!!!</p>
        else return  <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)} </ul>
    }

 render() { 

               return(
                <div>
                    {this.renderTags()}
                </div>
                );
*/