import React, { Component } from 'react';
import {render} from 'react-dom';

const dataList = [{
    name: '广东',
    value: 50,
    color: '#afdc32'
},{
    name: '深圳',
    value: 100,
    color: '#a90c32'

},{
    name: '安徽',
    value: 60,
    color: '#bfb0f2'

},{
    name: '江苏',
    value: 90,
    color: '#0fdc32'

},{
    name: '上海',
    value: 80,
    color: '#120c32'

}]


class EchartItem extends Component{

    constructor(props){
        super(props);
        this.state = {
            isShow: true
        };
        this.hideItemData = this.hideItemData.bind(this);
    }


    hideItemData(){
        const { isShow } = this.state;
        this.setState({
            isShow: !isShow
        })
    }

    render(){
        const { itemData } = this.props;
        let activeItemStyle = {
            background: `-webkit-linear-gradient(left, transparent, ${itemData.color})`,
            width: itemData.value,
            boxShadow: `0 0 10px ${itemData.color}`
        }
        let itemStyle = {
            background: `-webkit-linear-gradient(left, transparent, #aaa)`,
            width: itemData.value
        }
        return(
            <div className="echart-item">
                <span className="echart-item-eyes" onClick={this.hideItemData}></span>
                <span className="echart-item-name">{itemData.name}</span>
                <span className="echart-item-content" style={this.state.isShow? activeItemStyle : itemStyle}></span>
            </div>
        )
    }
}

class Echarts extends Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }



    render(){

        return(
            <div className="echarts-wrap">
                {dataList.map(item => {
                    return <EchartItem itemData={item} />
                })}

            </div>
        )
    }
}

export default Echarts;