import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home',            path: '/' },
  { label: 'About Us',        path: '/about' },
  { label: 'Become Experts',  path: '#become-experts' },
  { label: 'For Businesses',  path: '#for-businesses' },
  { label: 'Contact Us',      path: '#contact' },
];

export default function Footer() {
  return (
    <footer className="w-full" style={{ background: '#284AA3' }}>
      {/* Content — centred at max 1200px */}
      <div
        className="mx-auto relative flex flex-col"
        style={{
          maxWidth: 1200,
          minHeight: 409,
          paddingTop: 54.58,
          paddingBottom: 80,
          paddingLeft: 'clamp(20px, 4vw, 36.39px)',
          paddingRight: 'clamp(20px, 4vw, 36.39px)',
        }}
      >
        {/* Two-column row */}
        <div className="flex flex-col md:flex-row items-start justify-between flex-1 gap-8 md:gap-12">

          {/* LEFT — Heading */}
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(24px, 3.6vw, 43.66px)',
              lineHeight: '1.67',
              letterSpacing: '0px',
              color: '#FFFFFF',
              flex: 1,
            }}
          >
            Manage Your meeting<br />
            with BIZPOLE CONSULT .
          </h2>

          {/* RIGHT — Navigation */}
          <nav
            className="flex flex-row flex-wrap md:flex-col items-start md:items-end"
            style={{ gap: 18, minWidth: 140 }}
          >
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.label}
                to={link.path}
                className="text-white transition-all duration-300 hover:opacity-60"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 14,
                  fontWeight: i === 0 ? 600 : 400,
                  lineHeight: 1.4,
                  letterSpacing: '0px',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom divider */}
        <div
          className="absolute left-0 right-0"
          style={{
            bottom: 36,
            marginLeft: 'clamp(20px, 4vw, 36.39px)',
            marginRight: 'clamp(20px, 4vw, 36.39px)',
            borderTop: '1px solid rgba(255,255,255,0.25)',
          }}
        />
      </div>
    </footer>
  );
}
