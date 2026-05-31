import "./App.css";

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">🍦 Frosty Bliss</div>
        <button className="btn">Order Now</button>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <span className="tag">✨ Premium Ice Cream</span>

          <h1>
            Scoop Into
            <span> Sweet Happiness</span>
          </h1>

          <p>
            Crafted with fresh ingredients, rich flavors, and a sprinkle of
            magic. Every scoop is a celebration.
          </p>

          <div className="actions">
            <button className="primary">Explore Flavors</button>
            <button className="secondary">Learn More</button>
          </div>
        </div>

        <div className="hero-image">
          <div className="icecream">🍨</div>
        </div>
      </section>

      <section className="flavors">
        <h2>Popular Flavors</h2>

        <div className="cards">
          <div className="card">
            <h3>🍓 Strawberry Dream</h3>
            <p>Fresh strawberries blended into creamy perfection.</p>
          </div>

          <div className="card">
            <h3>🍫 Choco Heaven</h3>
            <p>Rich chocolate indulgence for true chocolate lovers.</p>
          </div>

          <div className="card">
            <h3>🥭 Mango Splash</h3>
            <p>Tropical mango goodness in every bite.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;