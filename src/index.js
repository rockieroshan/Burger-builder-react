import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import BurgerBuilder from './container/BurgerBuilder';



class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));