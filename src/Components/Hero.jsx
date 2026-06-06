import {useState} from 'react';
export const Hero = () => {
    const [hovered, setHovered] = useState(false);

return (
    <header id="home" style={styles.container}>
    <div style={styles.contentLeft}>
        <span style={styles.tag}>SUMMER COLLECTION 2026</span>
        <h1 style={styles.title}>Define Your <br /><span style={styles.italic}>Signature Style</span></h1>
        <p style={styles.subtitle}>Discover minimalist aesthetics, premium organic fabrics, and luxury tailoring designed for modern comfort.</p>
        <button 
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{...styles.btn, ...(hovered ? styles.btnHover : {})}}
        >
        Explore Lookbook →
        </button>
        </div>
        <div style={styles.contentRight}>
        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&auto=format&fit=crop&q=80" alt="Fashion Banner" style={styles.image} />
        </div>
    </header>
    );
};

const styles = {
container: { display: 'flex', flexWrap: 'wrap', alignItems: 'center', backgroundColor: '#f9f5f0', padding: '60px', minHeight: '65vh', fontFamily: 'sans-serif', gap: '40px' },
contentLeft: { flex: '1.2', minWidth: '320px' },
tag: { fontSize: '12px', fontWeight: '700', letterSpacing: '2px', color: '#b45309' },
title: { fontSize: '52px', fontWeight: '800', color: '#111827', margin: '15px 0', lineHeight: '1.1', fontFamily: 'serif' },
italic: { fontStyle: 'italic', color: '#b45309', fontWeight: '400' },
subtitle: { fontSize: '16px', color: '#6b7280', margin: '0 0 30px 0', lineHeight: '1.6', maxWidth: '500px' },
btn: { backgroundColor: '#111827', color: 'white', border: 'none', padding: '15px 35px', fontSize: '15px', fontWeight: '600', letterSpacing: '1px', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.3s ease' },
btnHover: { backgroundColor: '#b45309', transform: 'translateY(-2px)' },
contentRight: { flex: '1', minWidth: '320px', display: 'flex', justifyContent: 'center' },
image: { width: '100%', maxWidth: '440px', borderRadius: '8px', boxShadow: '0 15px 30px rgba(0,0,0,0.08)' }
};