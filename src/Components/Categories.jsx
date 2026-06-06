export const Categories = () => {
const items = [
    { id: 1, title: 'Casual Outfits', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&auto=format&fit=crop&q=60' },
    { id: 2, title: 'Luxury Suits', img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&auto=format&fit=crop&q=60' },
    { id: 3, title: 'Accessories', img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&auto=format&fit=crop&q=60' },
    { id: 4, title: 'Footwear', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&auto=format&fit=crop&q=60' },
    { id: 5, title: 'Activewear', img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&auto=format&fit=crop&q=60' },
    { id: 6, title: 'Winter Wear', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&auto=format&fit=crop&q=60' }

];

    return (
    <section id="collections" style={styles.section}>
    <h2 style={styles.sectionTitle}>Curated Collections</h2>
    <div style={styles.flexRow}>
        {items.map((cat) => (
        <div key={cat.id} style={styles.card}>
            <img src={cat.img} alt={cat.title} style={styles.img} />
            <div style={styles.overlay}>
            <h3 style={styles.cardTitle}>{cat.title}</h3>
            </div>
            </div>
        ))}
        </div>
    </section>
    );
};

const styles = {
section: { padding: '60px 40px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'serif' },
sectionTitle: { textAlign: 'center', color: 'black', fontSize: '30px', marginBottom: '30px', fontWeight: '700' },
flexRow: { display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' },
card: { position: 'relative', width: '260px', height: '340px', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer' },
img: { width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' },
overlay: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px', background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', display: 'flex', alignItems: 'flex-end' },
cardTitle: { color: 'white', margin: 0, fontSize: '18px', fontWeight: '600', fontFamily: 'sans-serif' }
};