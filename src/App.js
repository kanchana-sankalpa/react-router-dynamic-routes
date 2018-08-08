import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home2 from './Home';
import NewArticle from './NewArticle';
import OldFruit from './OldFruit';
import FruitsList from './FruitsList';




var fruites: [
     {'id':1, 'value':'Apple','url': 'test_1','old':true ,'cat':'fruit'},
     {'id':2, 'value':'Banana','url': 'test_2','old':true,'cat':'fruit'},
     {'id':3, 'value':'Orange','url': 'test_3','old':true,'cat':'fruit'},
     {'id':4, 'value':'New_Article','url': '','old':false,'cat':'article'},
     {'id':5, 'value':'Car','url': '','old':false,'cat':'vehicle'}
   ];

const App = () =>
  [
    <Navigation />,
    <Content />,
    <p>Found in <a href="https://roadtoreact.com/">the Road to learn React</a></p>,
  ]

const Navigation = () =>
  <ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/articles'>Articles</Link></li>
    <li><Link to='/fruits'>Fruits</Link></li>
    <li><Link to='/about'>About</Link></li>
  </ul>

const Content = () =>
  <Switch>
    <Route exact path='/' component={Home2} />
    <Route path='/articles' component={Articles} />
    <Route path='/fruits' component={Fruits} />
    <Route path='/about' component={About} />
    <Route path='/:olditem' component={OldFruit}/>
  </Switch>

/*var Home = () =>  [
  <h1>My Home Page</h1>,
]  */

const About = () =>
  <h1>My About Page</h1>

const Articles = () =>
  [
    <h1>Article Middle Page (Note: Middle routing)</h1>,
    <Switch>
      <Route exact path='/articles' component={ArticleList}/>
      <Route path='/articles/:id' component={NewArticle}/>
    </Switch>,
  ]


const ArticleList = () =>
  [
    <h2>All Articles</h2>,
    <p>Back to <Link to='/'>Home</Link></p>,
  ]

  const Fruits = () =>
    [
      <h1>Fruits Middle Page (Note: Middle routing)</h1>,
      <Switch>
        <Route exact path='/fruits' component={FruitsList}/>
        <Route path='/fruits/:id' component={NewArticle}/>
      </Switch>,
    ]


  /*const FruitsList = (fruites) =>
    [
      <h2>All Fruits</h2>,
      <ul>
      {Object.keys(fruites).map(key =>
          <li key={key}>
           Go to individual article route:<Link to={fruites[key]['url']}>{fruites[key]['url']}</Link>
          </li>
        )}
     </ul>,
      <p>Back to <Link to='/'>Home</Link></p>,
    ]  */


// ArticleItem has access to the router props and thus to the id of the article in the url

/*const ArticleItem = (props) =>
  [
    <h2>{ARTICLES[props.match.params.id].value}</h2>,
    <p>Go to <a href={ARTICLES[props.match.params.id].url}>Article</a></p>,
    <p>Back to <Link to='/articles'>Articles</Link></p>,
  ]  */

export default App;
