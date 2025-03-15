import React from "react";
import "./App.css"; // Import the CSS file

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Page Header</h1>
      </header>

      <div className="content-area">
        <aside className="sidebar">
          <p>Page Sidebar</p>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </aside>

        <main className="main-content">
          <p>Page Content</p>
        </main>
      </div>

      <footer className="footer">
        <p>Page Footer</p>
      </footer>
    </div>
  );
}

export default App;
