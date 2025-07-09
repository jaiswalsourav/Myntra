const popularLinks = [
  { href: "/kurta-pyjama", text: "Kurta Pajama" },
  { href: "/leather-jackets", text: "Leather Jackets" },
  { href: "/sherwani", text: "Sherwani" },
  { href: "/shirts", text: "Shirts" },
  { href: "/tshirts", text: "T-Shirts" },
  { href: "/waistcoat", text: "Waistcoat" },
  { href: "/photo-frames", text: "Photo Frames" },
  { href: "/denim-shirts", text: "Denim shirts" },
  { href: "/blazers", text: "Blazers" },
  { href: "/mirrors", text: "Mirror" },
  { href: "/bags", text: "Bags" },
  { href: "/jackets", text: "Jackets" },
  { href: "/saree-blouse", text: "Blouse Designs" },
  { href: "/crop-tops", text: "Crop Tops" },
  { href: "/mysore-silk-saree", text: "Mysore Silk Saree" },
  { href: "/kids-lehenga-choli", text: "Kids Lehenga" },
  { href: "/salwar-suit", text: "Suit Design" },
  { href: "/lehengas", text: "Lehenga" },
  { href: "/girls-dungarees", text: "Girls Dungarees" },
  { href: "/girls-tops", text: "Top for Girl" },
  { href: "/lingerie", text: "Lingerie" },
  { href: "/gown", text: "Gowns" },
  { href: "/saree", text: "Saree" },
  { href: "/kids-ethnic-wear", text: "Kids Ethnic Wear" },
  { href: "/sweaters", text: "Sweaters" },
  { href: "/boys-games", text: "Boys Games" },
  { href: "/barbie-doll", text: "Barbie Doll" },
  { href: "/men-shoes", text: "Shoes For Men" },
  { href: "/cricket-shoes", text: "Cricket Shoes" },
  { href: "/lipstick", text: "Lipstick" },
  { href: "/makeup-kit", text: "Make Up Kit" },
  { href: "/fastrack-watches", text: "Fastrack Watches" },
  { href: "/casual-shoes", text: "Casual Shoes" },
  { href: "/", text: "Online Shopping" },
  { href: "/dresses", text: "Dresses" },
  { href: "/babydoll", text: "Babydolls" },
  { href: "/eye-makeup", text: "Eye Makeup" },
  { href: "/car-games", text: "Car Games" },
  { href: "/nike-shoes", text: "Nike Shoes" },
  { href: "/puma", text: "Puma" },
  { href: "/united-colors-of-benetton", text: "United Colors of Benetton" },
  { href: "/fastrack", text: "Fastrack" },
  { href: "/watches", text: "Watches" },
  { href: "/backpacks", text: "Backpacks" },
  { href: "/men-kurtas", text: "Men Kurtas" },
  { href: "/titan-watches", text: "Titan Watches" },
];

const PopularSearches = () => {
  return (
    <div className="footer_column popular-searches">
  <h3>POPULAR SEARCHES</h3>
  <div className="popular-links">
    {popularLinks.map((item, index) => (
      <span key={index} className="popular-link-item">
        <a href={item.href}>{item.text}</a>
        {index !== popularLinks.length && <span className="pipe">|</span>}
      </span>
    ))}
  </div>
</div>

  );
};

export default PopularSearches;
