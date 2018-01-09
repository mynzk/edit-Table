import React, { Component } from 'react';
import {render} from 'react-dom';


class Canvas extends Component{

	constructor(props){
		super(props);
		this.state = {
			indexs: 1,
			Move_index: 0
		}
		this.handleWheel = this.handleWheel.bind(this);
		this.mouseWheel = this.mouseWheel.bind(this);
	}


	handleWheel(event){
		 //判断鼠标滚轮的上下滑动
            let deta = event.deltaY;
            console.log(this.getPosition.scrollTop,'sssssssssssssssssss')
            if(deta > 0){
	            this.setState({
	                indexs:1
	            });
         
            }
            if(deta < 0){
                this.setState({
                    indexs:-1
                });
    
            }        
	}

	mouseWheel(){
		let indexs = this.state.indexs;
		let inx = this.state.Move_index;
              indexs = indexs + inx;
            console.log(indexs+"-------indexs");
            if (indexs >= 0 && indexs <= 3){
                this.setState({
                    Move_index:indexs
                });
            }else if (indexs < 0){
                this.setState({
                    Move_index:0
                })
            }else if (indexs > 3){
                this.setState({
                    Move_index:3
                })
            }
              this.position(indexs);
	}


	position(numder){
        console.log(numder+"===========list");
        switch (numder){
            case 0:return this.setState({
                Move_index:0
            });
            case 1:return this.setState({
                Move_index:1
            });
            case 2:return this.setState({
                Move_index:2
            });
            case 3:return this.setState({
                Move_index:3
            });
        }

    }

	
	
	render(){

		return(
			<div className="scroll-wrap"  onWheel={this.handleWheel} onScroll={this.mouseWheel} ref ={(node) => {this.getPosition = node}}>
			   <div className="scroll-content"  >
			      <div className="scroll-item">1</div>
			      <div className="scroll-item">2</div>
			      <div className="scroll-item">3</div>
			   </div>
			</div>
		)
	}
}

export default Canvas;