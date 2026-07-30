import { useParams } from "react-router-dom";

function Shop() {
  const { category } = useParams();

  const products = {
    travel: [
      {
        name: "Private Uber",
        price: "R899",
        image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg",
      },
      {
        name: "Sidebag",
        price: "R399",
        image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
      },
      {
        name: "Seamstress",
        price: "R299",
        image: "https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg",
      },
      {
        name: "Portable Earbuds",
        price: "R599",
        image: "https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg",
      },
    ],

    essentials: [
      {
        name: "Luxury Bed Linen",
        price: "R1 199",
        image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg",
      },
      {
        name: "Premium Towels",
        price: "R499",
        image: "https://images.pexels.com/photos/545012/pexels-photo-545012.jpeg",
      },
      {
        name: "Coffee Maker",
        price: "R1 499",
        image: "https://images.pexels.com/photos/585753/pexels-photo-585753.jpeg",
      },
      {
        name: "Modern Table Lamp",
        price: "R799",
        image: "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg",
      },
    ],

    host: [
      {
        name: "Decorative Cushions",
        price: "R399",
        image: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg",
      },
      {
        name: "Indoor Plant",
        price: "R349",
        image: "https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg",
      },
      {
        name: "Chandelier",
        price: "R899",
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      },
      {
        name: "Dining Table Set",
        price: "R3 999",
        image: "https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg",
      },
    ],
  };

  const selectedProducts = products[category] || [];

  return (
    <div className="shop-page">
      <h1>
        {category
          ? category.charAt(0).toUpperCase() + category.slice(1)
          : "Shop"} Collection
      </h1>

      <div className="shop-grid">
        {selectedProducts.length > 0 ? (
          selectedProducts.map((product, index) => (
            <div className="shop-card" key={index}>
              <img src={product.image} alt={product.name} />

              <div className="shop-content">
                <h3>{product.name}</h3>

                <p>{product.price}</p>

                <button
                  onClick={() =>
                    alert(
                      `${product.name}\n\nThis is a demo shopping feature.\nOnline purchasing is not available in this application.`
                    )
                  }
                >
                  View Product
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default Shop;