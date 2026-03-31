import './App.css'

function App() {
  const products = [
    {
      id: 1,
      name: "Fresh Produce Box",
      price: "$24.99",
      description: "A curated mix of fresh fruits and vegetables for weekly distribution.",
    },
    {
      id: 2,
      name: "Bulk Grain Pack",
      price: "$39.99",
      description: "Essential grains for commercial kitchens and food service operations.",
    },
    {
      id: 3,
      name: "Dairy Essentials Bundle",
      price: "$29.99",
      description: "A practical dairy bundle for restaurants and small retailers.",
    },
  ];

  return (
    <div className="app">
      <header className="hero">
        <nav className="navbar">
          <h1>CloudCart</h1>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>

        <div className="hero-content">
          <h2>CloudCart CI/CD Working 🚀</h2>
          <p>
            Frontend prototype for a food distribution platform built with React
            and deployed through AWS services.
          </p>
          <button>Shop Now</button>
        </div>
      </header>

      <main>
        <section className="features">
          <h2>Platform Highlights</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Fast Frontend Delivery</h3>
              <p>
                Designed for static hosting and CDN delivery through Amazon S3
                and CloudFront.
              </p>
            </div>
            <div className="feature-card">
              <h3>Scalable Architecture</h3>
              <p>
                Supports a cloud-based deployment model aligned with modern
                e-commerce workloads.
              </p>
            </div>
            <div className="feature-card">
              <h3>CI/CD Ready</h3>
              <p>
                Prepared for automated build and deployment workflows using
                GitHub Actions.
              </p>
            </div>
          </div>
        </section>

        <section className="products">
          <h2>Featured Products</h2>
          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <strong>{product.price}</strong>
                <button>Add to Cart</button>
              </div>
            ))}
          </div>
        </section>

        <section className="about">
          <h2>About This Project</h2>
          <p>
            This project was recreated as a portfolio-ready frontend based on my
            cloud computing capstone work, where I was responsible for frontend
            development and deployment planning using AWS S3, CloudFront, and
            GitHub Actions.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 CloudCart | AWS Capstone Frontend Portfolio Project</p>
      </footer>
    </div>
  );
}

export default App;
