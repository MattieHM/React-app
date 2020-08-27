import React from 'react';
import {Button, DatePicker} from 'antd';
import './App.css';
import "./index.css";
import 'moment/locale/ru';
import locale from 'antd/es/date-picker/locale/ru_RU';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Coronavirus Worldwide graph </h1>
            <div className='row'>
                <DatePicker size='Large' locale={locale}/>
                <Button type="primary" size='Large' style ={{margin:10}}> Поиск</Button>

            </div>


      </header>
        <div className="author">designed by <a href="https://www.facebook.com/kultyshevmikhail"> me</a></div>
    </div>

  );
}

export default App;
