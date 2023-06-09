import React from 'react';

function App() {
  return (
        <div className="App">
          <header className="App-header">
            
          <nav
                class="menu">
      <ul>
        <li><a href="#">Главная</a></li>
        <li><a href="#">Достижения</a></li>
        <li><a href="#">Календарь</a></li>
        <li><a href="#">Турнирная таблица</a></li>
        <li><a href="#">Игроки и персонал</a></li>
        <li><a href="#">Контакты</a></li>
      </ul>

            </nav>

      <form>
          <p>
             <input type="search" name="q" placeholder="Поиск ...">
             </input>
          </p>
           {/* <!-- <input type="submit" value="Найти"></p> --> */}
      </form>
        
            </header>
          </div>
  );
}

export default App;
