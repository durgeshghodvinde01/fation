export const Footer = () => {
    return (
    <footer id="about" style={styles.footer}>
    <div style={styles.grid}>
        <div>
        <h3 style={styles.brand}>VOGUEWEAR</h3>
        <p style={styles.text}>Crafting slow fashion pieces with ethical standards and contemporary luxury aesthetics since 2021.</p>
        </div>
        <div>
        <h4>Assistance</h4>
        <p style={styles.text}>Shipping & Returns</p>
        <p style={styles.text}>Track Your Order</p>
        </div>
        <div>
        <h4>Showroom Location</h4>
        <p style={styles.text}>72 Fashion Blvd, New York, NY</p>
        <p style={styles.text}>contact@voguewear.com</p>
        </div>
        </div>
        <div style={styles.bottom}>
        &copy; {new Date().getFullYear()} VogueWear Inc. All rights reserved. Class 10 Assignment Submission.
        </div>
    </footer>
    );
};

const styles = {
footer: { backgroundColor: '#111827', color: '#9ca3af', padding: '50px 40px 20px 40px', marginTop: '60px', fontFamily: 'sans-serif' },
grid: { display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '30px', maxWidth: '1100px', margin: '0 auto' },
brand: { color: 'white', letterSpacing: '2px', fontWeight: '700', fontFamily: 'serif' },
text: { fontSize: '13px', lineHeight: '1.6', margin: '5px 0' },
bottom: { borderTop: '1px solid #1f2937', marginTop: '40px', paddingTop: '20px', textAlign: 'center', fontSize: '12px' }
};