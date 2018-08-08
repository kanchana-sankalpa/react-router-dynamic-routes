import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Home extends Component {

  constructor(props) {
         super(props);
         this.state = {
       inputValue: '',
         fruites: [
            {'id':1, 'name':'Apple','url': 'test_1','old':true ,'cat':'fruit'},
            {'id':2, 'name':'Banana','url': 'test_2','old':true,'cat':'fruit'},
            {'id':3, 'name':'Orange','url': 'test_3','old':true,'cat':'fruit'},
            {'id':4, 'name':'New_Article','url':'','old':false,'cat':'article'}
              ]
           }
          this.renderElement = this.renderElement.bind(this);
  }

  render()      {
  const { fruites, inputValue } = this.state;

    return (<div>  <h1>My Home Page</h1>,
          <List items={fruites} /></div>
    )
  }


  renderElement(articleItem){
  console.log(articleItem['old'] );
     if(articleItem['old'] ===true) {
       return  <li key={articleItem.id}>  Go to individual article route: <Link to={articleItem['url']}>{articleItem.title}</Link> </li>;
     }else {
       return  <li key={articleItem.id}> Go to individual article route: <Link to={`/articles/${articleItem.id}`}>{articleItem.title}</Link></li>;
     }
  }
  
}

const ListItem = ({ itm, onClick }) => (
  itm['old'] ? <li onClick={onClick}> <Link to={`${itm.url}`}>{itm['name']}</Link></li> :
    <li onClick={onClick}> <Link to={`/articles/${itm.name}`}>{itm['name']}
    </Link></li>
);


const List = ({ items, onItemClick }) => (
  <ul>
    {
      items.map((item,index) => <ListItem key={index} itm={item} onClick={onItemClick} />)
    }
  </ul>
);
export default Home;
