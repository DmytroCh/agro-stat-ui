import Header from './components/Header/Header'
import Content from './components/Content'
import { useTranslation } from 'react-i18next';

function App() {
  return (
    <div className="app">
      <Header i18n={ useTranslation().t }/>
      <Content i18n={ useTranslation().t }/>
    </div>
  );
}

export default App;
