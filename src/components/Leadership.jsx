// import { leadership } from '../data/content';
// import Reveal from './Reveal';
// import Icon from './Icon';
// import './Leadership.css';

// export default function Leadership() {
//   return (
//     <section className="section section--soft leadership" id="leadership">
//       <div className="container">
//         <Reveal className="section-head">
//           <span className="eyebrow">The people behind NYABIX</span>
//           <h2>Leadership</h2>
//         </Reveal>
//         <div className="lead__grid">
//           {leadership.map((p, i) => (
//             <Reveal className="lead__card" key={p.name} delay={i * 150} variant={i ? 'right' : 'left'}>
//               <div className="lead__photo">
//                 {/* Replace with <img src="..." alt={p.name} /> */}
//                 {p.image && (
//                   <img
//                     className="lead__img"
//                     src={p.image}
//                     alt={p.name}
//                     loading="lazy"
//                     onError={(e) => { e.currentTarget.style.display = 'none'; }}
//                   />
//                 )}
//                 <span className="lead__initials">{p.initials}</span>
//                 <div className="lead__social">
//                   <a href="#" aria-label={`${p.name} on LinkedIn`}><Icon name="linkedin" size={18} /></a>
//                 </div>
//               </div>
//               <div className="lead__info">
//                 <h3>{p.name}</h3>
//                 <span className="lead__role">{p.role}</span>
//                 <p>{p.bio}</p>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { leadership } from '../data/content';
import Reveal from './Reveal';
import Icon from './Icon';
import './Leadership.css';

export default function Leadership() {
  return (
    <section className="section section--soft leadership" id="leadership">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">The people behind NYABIX</span>
          <h2>Leadership</h2>
        </Reveal>
        <div className="lead__grid">
          {leadership.map((p, i) => (
            <Reveal 
              className="lead__card lead__card--no-image" 
              key={p.name} 
              delay={i * 150} 
              variant={i % 2 === 0 ? 'left' : 'right'}
            >
              <div className="lead__header">
                <div className="lead__titles">
                  <h3>{p.name}</h3>
                  <span className="lead__role">{p.role}</span>
                </div>
                <div className="lead__social">
                  <a href="#" aria-label={`${p.name} on LinkedIn`}><Icon name="linkedin" size={18} /></a>
                </div>
              </div>
              <div className="lead__info">
                <p>{p.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}