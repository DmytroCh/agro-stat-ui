import Header from './components/Header'
import Content from './components/Content'
import './i18n'
import { useTranslation } from 'react-i18next';

function App() {
  return (
    <div className="app">
      <Header t={ useTranslation().t }/>
      <Content/>
    </div>
  );
}

export default App;
