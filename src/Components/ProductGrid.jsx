import { useState } from 'react';

export const ProductGrid = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const products = [
    { id: 1, name: 'Classic Beige Trenchcoat', price: '$189.00', tag: 'BESTSELLER', img: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=500&auto=format&fit=crop&q=60' },
    { id: 2, name: 'Minimalist Cotton Jacket', price: '$120.00', tag: 'NEW', img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60' },
    { id: 3, name: 'Premium Leather Boots', price: '$245.00', tag: 'LIMITED', img: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500&auto=format&fit=crop&q=60' },
    { id: 4, name: 'Urban Silk Summer Dress', price: '$155.00', tag: 'SALE', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop&q=60' },
    { id: 5, name: 'Tailored Wool Blazer', price: '$210.00', tag: 'NEW IN', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=60' },
    { id: 6, name: 'Oversized Knit Sweater', price: '$95.00', tag: 'BACK IN STOCK', img: 'https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?w=500&auto=format&fit=crop&q=60' }
  ];

  return (
    <section id="shop" style={styles.section}>
      <h2 style={styles.heading}>Trending Pieces</h2>
      <div style={styles.row}>
        {products.map((item) => (
          <div key={item.id} style={styles.card}>
            <div style={styles.imgBox}>
              <span style={styles.badge}>{item.tag}</span>
              <img src={item.img} alt={item.name} style={styles.img} />
            </div>
            <div style={styles.info}>
              <h3 style={styles.name}>{item.name}</h3>
              <div style={styles.bottomFlex}>
                <span style={styles.price}>{item.price}</span>
                <button 
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{...styles.btn, ...(hoveredId === item.id ? styles.btnHover : {})}}
                >
                  Add to Bag
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: { padding: '60px 40px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' },
  heading: { textAlign: 'center', color: 'black', fontSize: '30px', marginBottom: '40px', fontWeight: '700', fontFamily: 'serif' },
  row: { display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '25px' },
  card: { width: '265px', backgroundColor: '#ffffff', border: '1px solid #f3f4f6', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' },
  imgBox: { position: 'relative', height: '320px', backgroundColor: '#f9f9f9' },
  img: { width: '100%', height: '100%', objectFit: 'cover' },
  badge: { position: 'absolute', top: '12px', left: '12px', backgroundColor: '#111827', color: 'white', fontSize: '10px', fontWeight: 'bold', padding: '4px 8px', borderRadius: '2px' },
  info: { padding: '15px' },
  name: { fontSize: '15px', fontWeight: '600', margin: '0 0 10px 0', color: '#111827' },
  bottomFlex: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  price: { fontSize: '16px', fontWeight: '700', color: '#b45309' },
  btn: { backgroundColor: 'transparent', border: '1px solid #111827', padding: '6px 14px', borderRadius: '4px', cursor: 'pointer', fontSize: '13px', fontWeight: '600', transition: 'all 0.2s' },
  btnHover: { backgroundColor: '#111827', color: 'white' }
};