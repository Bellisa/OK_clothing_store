export const PageInfo = ({ info }) => (
  <section className="py-5">
    <div className="container">
      <h1>{info.header}</h1>
      <p className="lead">{info.title || ''}</p>
      <p>{info.body || ''}</p>
    </div>
  </section>
);
