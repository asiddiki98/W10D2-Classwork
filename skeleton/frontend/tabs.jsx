import React from 'react';

class Tabs extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            selectedTab: 0
        }
    }

    handleclick(num){
        this.setState({selectedTab: num})
    }

    render(){
        let title = this.props.arr[this.state.selectedTab].title
        let content = this.props.arr[this.state.selectedTab].content
        

        return (
            
            <div>
                <h1>
                    tabs
                </h1>
                <Headers 
                handleclick={() => this.handleclick()}
        
                />
                <div>
                    {content}
                </div>
            </div>
        )
    }
}

class Headers extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let selected = this.selectedTab
        return (
            <div>
                <h1 onClick={this.handleclick}>one</h1>
                <h1 onClick={this.handleclick}>two</h1>
                <h1 onClick={this.handleclick}>three</h1>
            </div>
        )
    }


}
export default Tabs