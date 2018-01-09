import React, { Component } from 'react';
import {render} from 'react-dom';

function bindMouseWheel (page,element) {
    var  type = 'mousewheel';
    var  deltaY = 0;

    function mouseWheelHandle (event) {
        if (page.isScrolling) {// 加锁部分
            return false;
        }
        var e = event.originalEvent || event;

        deltaY = e.deltaY;
        if (deltaY > 0) {
            page.next();
        } else if (deltaY < 0) {
            page.pre();
        }
    }
    element.on('mousewheel', mouseWheelHandle);
}






class Canvas extends Component{

	constructor(props){
		super(props);
		this.state = {
			
		}
		
	}


    componentDidMount(){
        var $container = $('.container');
        var $scroll = $container.find('.scrollContainer');
        var height = $container.height()/3;
        var len = 3;
        var current = 1;
        var page = {
                isScrolling: false,
                next: function() {
                    if((current + 1) <= len) {
                        current += 1;
                        page.move(current);
                    }
                },
                pre: function() {
                    if(current -1 > 0) {
                        current -= 1;
                        page.move(current);
                    }
                },
                move: function(index) {
                    page.isScrolling = true;
                    var di = -(index-1)*height + 'px';
                    page.start = +new Date();
                    $scroll.css('transform', 'translateY('+di+')');
                    setTimeout(function(){
                        page.isScrolling = false;
                    }, 510);
                }
        };
        $container.find('.slide').css('height', height + 'px');
        $scroll.show();
        bindMouseWheel(page,$container)
    }
	
	
	render(){

		return(
			<div className="container">
                <div className="scrollContainer">
                    <div className="slide slide1">
                    </div>
                    <div className="slide slide2">
                    </div>
                    <div className="slide slide3">
                    </div>
                    <div className="slide slide4">
                    </div>
                    <div className="slide slide5">
                    </div>
                    <div className="slide slide6">
                    </div>
                </div>
            </div>
		)
	}
}

export default Canvas;