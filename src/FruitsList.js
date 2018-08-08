import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';



class FruitsList extends Component {

  constructor(props) {
         super(props);
         this.state = {
         inputValue: '',
         fruites: [
           {'id':1, 'name':'Apple','url': 'test_1','old':true ,'cat':'fruit'},
           {'id':2, 'name':'Banana','url': 'test_2','old':true,'cat':'fruit'},
           {'id':3, 'name':'Orange','url': 'test_3','old':true,'cat':'fruit'},
           {'id':4, 'name':'New_Article','url': '','old':false,'cat':'article'}
              ]
           }
  }


  render() {
  const { fruites, inputValue } = this.state;
    return (<div>  <h1>Fruit Page</h1>,
          <List items={fruites} />
          <p>Back to <Link to='/'>Home</Link></p>
          </div>
    )
  }

}
  const ListItem = ({ itm, onClick }) => (
  itm['old'] ? <li onClick={onClick}> <Link to={`${itm.url}`}>{itm['name']}</Link></li> :
    <li onClick={onClick}> <Link to={`/fruits/${itm.name}`}>{itm['name']}
    </Link></li>
  );


  const List = ({ items, onItemClick }) => (
  <ul>
         {Object.keys(items)
          .filter(key => items[key].cat === 'fruit')
          .map((key, index) => {
            return  <ListItem key={index} itm={items[key]} onClick={onItemClick} />
          })}
  </ul>
  );
export default FruitsList;
