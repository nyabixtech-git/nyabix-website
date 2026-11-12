import { useNavigate } from 'react-router-dom';

/**
 * Anchor for "#section" links that works on every page.
 * If the section exists on the current page it scrolls there;
 * otherwise it goes to the home page and scrolls to that section.
 */
export default function SectionLink({ href = '', onClick, children, ...rest }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    onClick?.(e);
    if (!href.startsWith('#') || href.length < 2) return;
    if (!document.getElementById(href.slice(1))) {
      e.preventDefault();
      navigate('/' + href);
    }
  };

  return <a href={href} onClick={handleClick} {...rest}>{children}</a>;
}
