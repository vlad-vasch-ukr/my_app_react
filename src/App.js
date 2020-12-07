import React from 'react'
import './helpers/normalize.css'
import ShopingList from './containers/ShopingList/ShopingList'
import Layout from './hoc/Layout/Layout'


class App extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
     <Layout>
        <ShopingList />
     </Layout>
    );
  }
}

export default App;
