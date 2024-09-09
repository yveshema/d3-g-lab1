function App() {
  return (
    <div className="app">
      <section id="content">
        <header>
          <div>
            <h1>Shop Mart</h1>
            <div>
              <button className="icon-btn">
                <span>&#129293;</span>
                <span className="badge">3</span>
              </button>
              <button className="icon-btn">
                <span>&#128722;</span>
                <span className="badge">1</span>
              </button>
            </div>
          </div>

          <div>
            <nav>
              <button>Home</button>
              <button>Catalog</button>
              <button>All products</button>
              <button>Wishlist</button>
            </nav>
            <form>
              <input type="search" placeholder="search" />
              <button type="button">Go</button>
            </form>
          </div>
        </header>
        <main>

          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Asics_Gel-Cumulus_22.jpg" alt="shoes" />
            <p className="pr-name">Awesome shoes</p>
            <p className="pr-price">$25</p>
          </div>

          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Shirt%2C_men%27s_%28AM_2015.44.1-1%29.jpg" alt="shirt" />
            <p className="pr-name">stylish shirt</p>
            <p className="pr-price">$28</p>
          </div>

          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Windbreaker_Jacket%2C_Hood_Outside.jpg" alt="windbreaker" />
            <p className="pr-name">Windbreaker jacket</p>
            <p className="pr-price">$45</p>
          </div>

          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Jeans.jpg" alt="jeans" />
            <p className="pr-name">Men's jeans</p>
            <p className="pr-price">$18</p>
          </div>

          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/IPhone_13_Pro_with_Airpods_Max.jpg" alt="iphone 13" />
            <p className="pr-name">iphone 13</p>
            <p className="pr-price">$999</p>
          </div>

          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/06/ElectricBlender.jpg" alt="blender" />
            <p className="pr-name">blender</p>
            <p className="pr-price">$12</p>
          </div>

        </main>
      </section>
      <footer>
        <div>
          <h3>Who we are</h3>
          <ul>
            <li><a href="">About us</a></li>
            <li><a href="">Contact us</a></li>
            <li><a href="">Sell with us</a></li>
          </ul>
        </div>

        <div>
          <h3>Our policies</h3>
          <ul>
            <li><a href="">Return policies</a></li>
            <li><a href="">Shipping policy</a></li>
            <li><a href="">Terms of service</a></li>
          </ul>
        </div>

        <div>
          <h3>Our products</h3>
          <ul>
            <li><a href="">Home page</a></li>
            <li><a href="">Search</a></li>
            <li><a href="">Catalog</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App
