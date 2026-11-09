import useInView from '../hooks/useInView';

/** Wraps children and fades them in when scrolled into view. */
export default function Reveal({ as: Tag = 'div', variant = '', delay = 0, className = '', children, ...rest }) {
  const [ref, inView] = useInView({ threshold: 0.12 });
  return (
    <Tag
      ref={ref}
      className={`reveal ${variant ? `reveal--${variant}` : ''} ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
