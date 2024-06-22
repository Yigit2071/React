import { useState } from 'react'
import './App.css'
import 'golden-layout/dist/css/goldenlayout-base.css';
import 'golden-layout/dist/css/themes/goldenlayout-dark-theme.css';
import { GoldenLayout } from 'golden-layout';

function App() {

  var myLayout = new GoldenLayout({
    content: [{
      type: 'row',
      content: [{
        type: 'react-component',
        component: 'test-component',
        props: { label: 'A' }
      }, {
        type: 'column',
        content: [{
          type: 'react-component',
          component: 'test-component',
          props: { label: 'B' }
        }, {
          type: 'react-component',
          component: 'test-component',
          props: { label: 'C' }
        }]
      }]
    }]
  });

  myLayout.root.getItemsById('someId')[0].popout();
  myLayout.root.contentItems[0].addChild({
    type: 'react-component',
    component: 'testComponent',
    props: { label: 'X' }
  });

  var TestComponent = React.createClass({
    render: function () {
      return (<h1>{this.props.label}</h1>)
    }
  });

  myLayout.registerComponent('testComponent', TestComponent);

  //Once all components are registered, call
  myLayout.init();


  return (
    <div>



    </div>

  )
}

export default App
