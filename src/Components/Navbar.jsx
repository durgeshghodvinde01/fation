export const Navbar = () => {
    return (
    <nav style={styles.navbar}>
    <div style={styles.logo}>VOGUE<span style={{ color: '#b45309' }}>WEAR</span></div>
    <div style={styles.navLinks}>
        <a href="#home" style={styles.navLink}>Home</a>
        <a href="#collections" style={styles.navLink}>Collections</a>
        <a href="#shop" style={styles.navLink}>New Arrivals</a>
        <a href="#about" style={styles.navLink}>Our Story</a>
    </div>
    <div style={styles.navRight}>
        <span style={styles.icon}>🔍</span>
        <span style={styles.icon}>👜 <small style={styles.badge}>1</small></span>
    </div>
    </nav>
    );
};

const styles = {
navbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 50px', backgroundColor: '#ffffff', borderBottom: '1px solid #f3f4f6', position: 'sticky', top: 0, zIndex: 100, fontFamily: 'serif' },
logo: { fontSize: '24px', fontWeight: '900', letterSpacing: '2px', color: '#111827' },
navLinks: { display: 'flex', gap: '35px' },
navLink: { textDecoration: 'none', color: '#4b5563', fontWeight: '500', fontSize: '15px', fontFamily: 'sans-serif', transition: 'color 0.2s' },
navRight: { display: 'flex', gap: '20px', fontSize: '18px', cursor: 'pointer' },
badge: { backgroundColor: '#b45309', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '11px', verticalAlign: 'top', marginLeft: '-5px' }
};