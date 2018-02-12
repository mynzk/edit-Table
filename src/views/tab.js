import React from 'react';
import ReactDOM from 'react-dom';


class Tabs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentIndex : this.props.activeKey,
            activedTabs: [this.props.activeKey]
        }
    }



    getActivedTabs(index){
        const { activedTabs } = this.state;
        let getActivedArr = activedTabs.indexOf(index)>-1? activedTabs : [...activedTabs, index];
        this.setState({ currentIndex : index, activedTabs: getActivedArr })
    }

    check_title_index( index ){

        return index === this.state.currentIndex ? "tab-title tab-active" : "tab-title"
    }

    check_item_index( index ){
        return index === this.state.currentIndex ? "tab-item tab-show" : "tab-item"
    }

    render(){
        let activedTabs = this.state.activedTabs;
        return(
            <div className="tab-wrap" >
                <ul className="tab-title-wrap" style={{height:"40px",position:"ralative",zIndex:"10000"}}>
                    {
                        React.Children.map( this.props.children , element => {
                            return(
                                <li
                                key={element.props.tabKey}
                                onClick={ this.getActivedTabs.bind(this,element.props.tabKey) }
                                 className={ this.check_title_index( element.props.tabKey ) }
                                >
                                    <div>{ element.props.tabName }</div>
                                    <span></span>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="tab-item-wrap">
                    {
                        React.Children.map(this.props.children , element =>{
                            return(
                                <div
                                 key={element.props.tabKey}
                                 className={ this.check_item_index( element.props.tabKey ) }
                                >
                                    {activedTabs.indexOf(element.props.tabKey)>-1? element : null}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}


export default Tabs