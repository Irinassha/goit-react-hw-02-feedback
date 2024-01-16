import s from './Section.module.css';

export const Section = ({ title, children }) => (
 <section className={s.section}>
    {title && <h2>{title}</h2>}
    {children}
  </section>
);
