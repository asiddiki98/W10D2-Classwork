import React from 'react';


class Headers extends React.Component {


    render() {
        const selected = this.props.selectedPane;
        const headers = this.props.panes.map((pane, index) => {
            const title = pane.title;
            const klass = index === selected ? 'active' : 'inactive';

            return (
                <li
                    key={index}
                    className={klass}
                    onClick={() => this.props.handleClick(index)}>
                    {title}{' '}
                </li>
            );
        });
        return (
            <ul className="tab-header">
                {headers}
            </ul>
        )
    }


}

class Tabs extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            selectedTab: 0
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(num){
        this.setState({selectedTab: num})
    }

    render(){
        const pane = this.props.arr[this.state.selectedTab]
        
        

        return (
            
            <div>
                <h1 className="tabs-h1">
                    Tabs
                </h1>
                <div className="tabs-div">
                    <Headers 
                    handleClick={this.handleClick}
                    selectedPane={this.state.selectedTab}
                    panes={this.props.arr}
                    />
                    <div className="content">
                        {pane.content}
                    </div>
                </div>
            </div>
        )
    }
}


export default Tabs