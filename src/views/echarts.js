import React, { Component } from 'react';
import {render} from 'react-dom';


const chartsConfigObj = {
    basicData: {
      wrapEleId: 'canvas',
      width: 860,
      height: 400
    },
    axisData: {
      basic: {
        axislineWidth: 1,
        axisColor: '#999',
        axisTextColor: '#000',
        axisTextFont: '12px PingFangSC-Regular',
      },
      axisX: {
        axisXStart: 26,
        axisXWidth: 850,
      },
      axisY: {
        axisYStart: 365,
        axisYWidth: 190,
        axisYIntervalNum: 20,
        axisYTextDistance: 2,
        axisYMaxNum: 100
      }
    },
    columnData: {
      eachColumnWidth: 14,
      spaceDistance: 30,
      columnMaxHeight: 156,
      columnColor: '#f00',
      firstColumnStartX: 50,
      firstColumnStartY: 365
    },
    enhancementAttr: {
      isColumnNeedRadius: true,
      columnGradientData: {
        gradientStartColor: '#35E1A0',
        gradientEndColor: '#29CDC0'
      },
      horizontalLineObj: {
        horizontalLineColor: '#999',
        horizontalLineDistance: 5
      },
      isRemoveAxisArrow: true
    },
    graphs: [
      {
      'x': '2011',
      'y': '100'
      }, {
      'x': '2012',
      'y': '90'
      }, {
      'x': '2013',
      'y': '60'
      }, {
      'x': '2014',
      'y': '90'
      }, {
      'x': '2015',
      'y': '70'
      }, {
      'x': '2016',
      'y': '10'
      }, {
      'x': '2011',
      'y': '100'
      }, {
      'x': '2012',
      'y': '90'
      }, {
      'x': '2013',
      'y': '60'
      }, {
      'x': '2014',
      'y': '90'
      }, {
      'x': '2015',
      'y': '70'
      }, {
      'x': '2016',
      'y': '10'
      }, {
      'x': '2011',
      'y': '100'
      }, {
      'x': '2012',
      'y': '90'
      }, {
      'x': '2013',
      'y': '60'
      }, {
      'x': '2014',
      'y': '30'
      }, {
      'x': '2015',
      'y': '10'
      }, {
      'x': '2016',
      'y': '95'
      }
    ]
  };





function drawHistogram(chartsConfigObj)  {

    let {
      basicData: {
        wrapEleId,
        width,
        height
      },
      axisData: {
        basic: {
          axislineWidth,
          axisColor,
          axisTextColor,
          axisTextFont,
        },
        axisX: {
          axisXStart,
          axisXWidth,
          axisXTextDistance
        },
        axisY: {
          axisYStart,
          axisYWidth,
          axisYIntervalNum,
          axisYTextDistance,
          axisYMaxNum
        }
      },
      columnData: {
        eachColumnWidth,
        spaceDistance,
        columnMaxHeight,
        columnColor,
        firstColumnStartX,
        firstColumnStartY
      },
      graphs
    } = chartsConfigObj;
  
    const {enhancementAttr} = chartsConfigObj;
    
    let {
      isColumnNeedRadius,
      columnGradientData,
      isRemoveAxisArrow,
      horizontalLineObj
    } = enhancementAttr || {};
    
    let {
      gradientStartColor,
      gradientEndColor
    } = columnGradientData || {};
  
    let {
      horizontalLineColor,
      horizontalLineDistance
    } = horizontalLineObj || {};
  
    horizontalLineColor = horizontalLineColor ? horizontalLineColor : '#eee';
    horizontalLineDistance = horizontalLineDistance ? horizontalLineDistance: 5;

    isRemoveAxisArrow = isRemoveAxisArrow ? isRemoveAxisArrow : false;
  
    var canvas = document.getElementById(wrapEleId);
    var context = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    context.beginPath();
  
    //画x轴
    context.beginPath();
    context.moveTo(axisXStart, axisYStart);
    context.lineTo(axisXStart + axisXWidth, axisYStart);
    context.strokeStyle = axisColor;
    context.lineWidth = axislineWidth;
    context.stroke();
    context.beginPath();

    if (!isRemoveAxisArrow) {
      context.moveTo(axisXStart + axisXWidth - 6, axisYStart-6);
      context.lineTo(axisXStart + axisXWidth, axisYStart);
      context.lineTo(axisXStart + axisXWidth - 6, axisYStart+6);
      context.strokeStyle = axisColor;
      context.lineWidth = axislineWidth;
      context.stroke();
    }
  
    //画y轴
    context.beginPath();
    var axisYEnd = height - (height - axisYStart + axisYWidth);
    context.moveTo(axisXStart, axisYStart);
    context.lineTo(axisXStart, axisYEnd);
    context.strokeStyle = axisColor;
    context.lineWidth = axislineWidth;
    context.stroke();
    context.beginPath();
    if (!isRemoveAxisArrow) {
      context.moveTo(axisXStart - 6, axisYEnd + 6);
      context.lineTo(axisXStart, axisYEnd);
      context.lineTo(axisXStart + 6, axisYEnd + 6);
      context.strokeStyle = axisColor;
      context.lineWidth = axislineWidth;
      context.stroke();
    }
  
    //画y轴上的数字
    var axisYNum = axisYMaxNum / axisYIntervalNum;
    var axisYLength = columnMaxHeight / axisYNum;
    for (var j = 0; j <= axisYNum; j++) {
      context.beginPath();
      context.moveTo(axisXStart, axisYStart);
      context.font = axisTextFont;
      context.textAlign = "center";
      context.fillStyle = axisTextColor;
      context.fillText(j*axisYIntervalNum,axisXStart - 15, axisYStart - j * axisYLength + axisYTextDistance);
      
      context.beginPath();
      context.moveTo(axisXStart, axisYStart - j * axisYLength);
      context.lineTo(axisXStart+5, axisYStart - j * axisYLength);
      context.strokeStyle = axisColor;
      context.lineWidth = axislineWidth;
      context.stroke();
  
      if (horizontalLineObj && j !== 0) {
        context.beginPath();
        context.moveTo(axisXStart, axisYStart - j * axisYLength);
        context.lineTo(axisXStart+axisXWidth, axisYStart - j * axisYLength);
        context.setLineDash([horizontalLineObj.space || 10]);
        context.strokeStyle = horizontalLineObj.color || '#eee';
        context.stroke();
      }
    }
    context.beginPath();
  
    //画柱状图
    var columnLength = graphs.length;
    for (var i = 0; i < columnLength; i++) {
      var colData = graphs[i];
      var colStratX = firstColumnStartX+(i*spaceDistance)+(i*eachColumnWidth);
      var colStratY = height - (height - firstColumnStartY + (colData.y/100) * columnMaxHeight);
  
      if(isColumnNeedRadius) {
        const r = eachColumnWidth / 2;
        const w = eachColumnWidth;
        const h = -((colData.y/100) * columnMaxHeight);
        const x = colStratX;
        const y = firstColumnStartY;
        context.beginPath();
        context.moveTo(x + r, y);
        context.arcTo(x + w, y, x + w, y + h, r);
        context.arcTo(x + w, y + h, x, y + h, r);
        context.arcTo(x, y + h, x, y, r);
        context.arcTo(x, y, x + w, y, r);
        context.closePath();
      } else {
        context.beginPath();
        context.moveTo(colStratX, firstColumnStartY);
        context.lineTo(colStratX, colStratY);
        context.lineTo(colStratX+eachColumnWidth, colStratY);
        context.lineTo(colStratX+eachColumnWidth, firstColumnStartY);
        context.closePath();
      }
      
  
      //需要渐变
      if (columnGradientData) {
        var grad  = context.createLinearGradient(0, firstColumnStartY, 0,colStratY);
        grad.addColorStop(0, gradientStartColor); // 绿
        grad.addColorStop(1, gradientEndColor);  // 紫
        context.fillStyle = grad;
      } else {
        context.fillStyle = columnColor;
      }
  
      context.fill();
      context.font = axisTextFont;
      context.textAlign="center";
      context.fillStyle = axisTextColor;
      context.fillText(colData.x, colStratX+eachColumnWidth/2,  firstColumnStartY + axisXTextDistance);
  
    }
    
  }






class Echarts extends Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }


    componentDidMount(){
        drawHistogram(chartsConfigObj);
    }



    render(){

        return(
            <div className="echarts-wrap">
                <canvas id="canvas"></canvas>
            </div>
        )
    }
}

export default Echarts;