import React, { Component } from 'react';
import {   Link } from 'react-router-dom';

class NewArticle extends Component {

  constructor(props) {
         super(props);
         this.state = {
         fruites: [
           {'id':1, 'name':'Apple','url': 'test_1','old':true ,'cat':'fruit'},
           {'id':2, 'name':'Banana','url': 'test_2','old':true,'cat':'fruit'},
           {'id':3, 'name':'Orange','url': 'test_3','old':true,'cat':'fruit'},
           {'id':4, 'name':'New_Article','url':'','old':false,'cat':'article'}
              ]
           }
  }
  componentDidMount(){
    console.log('componentDidMount this.props  Id:'+this.props.match.params.id);
  }

  render()      {
  const { fruites } = this.state;
    return (<div>
          <h1>New Article Page</h1>
          {Object.keys(this.state.fruites)
              .filter(key => this.state.fruites[key].value === this.props.match.params.id)
              .map((key, index) => {
                return <div key={key}>
                         <h1>{this.state.fruites[key].value}</h1>
                          <p>{this.state.fruites[key].id}</p>
                         <p>Back to <Link to='/articles'>Articles</Link></p>
                       </div>
              })}
          </div>
    )
  }



}
export default NewArticle;
