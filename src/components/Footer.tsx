import { NavLink, useNavigate, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home',             path: '/' },
  { label: 'Become an Expert', path: '/become-expert' },
  { label: 'For Business',     path: '/consultants' },
  { label: 'Contact Us',       path: null },
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContact = () => {
    const doScroll = () =>
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    if (location.pathname === '/') {
      doScroll();
    } else {
      navigate('/');
      setTimeout(doScroll, 400);
    }
  };

  return (
    <footer className="w-full" style={{ background: '#284AA3' }}>
      <div
        className="mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
        style={{
          maxWidth: 1152,
          paddingTop: 28,
          paddingBottom: 28,
          paddingLeft: 'clamp(20px, 3vw, 40px)',
          paddingRight: 'clamp(20px, 3vw, 40px)',
        }}
      >
        {/* LEFT — Brand */}
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: '24px',
            color: '#FFFFFF',
            whiteSpace: 'nowrap',
          }}
        >
          Bizpole Consult
        </span>

        {/* CENTER — Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {NAV_LINKS.map((link) =>
            link.path === null ? (
              <button
                key={link.label}
                onClick={scrollToContact}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: '24px',
                  color: 'rgba(255,255,255,0.75)',
                  textDecoration: 'none',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                {link.label}
              </button>
            ) : (
              <NavLink
                key={link.label}
                to={link.path}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: '24px',
                  color: 'rgba(255,255,255,0.75)',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        {/* RIGHT — Copyright */}
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: '16px',
            color: 'rgba(255,255,255,0.65)',
            whiteSpace: 'nowrap',
          }}
        >
          © 2026 Bizpole Consult. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
