import React, { Component } from 'react';
import ChildComponent from './ChildComponent'
class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: 'Parent'
     }

  }
  greetParent = (childName) =>  {
    const {parentName} = {...this.state}
    alert(`Hello, ${parentName} from ${childName}`);
  }
  render() {
    return ( <div>
      <ChildComponent greet={this.greetParent}/>
    </div> );
  }
}

export default ParentComponent;