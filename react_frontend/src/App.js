import logo from './logo.svg';
import './App.css';
import Login from './components/Login'; // 导入 Login 组件

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Login/> {/* 使用 Login 组件 */}
      </header>

    </div>
  );
}

export default App;
