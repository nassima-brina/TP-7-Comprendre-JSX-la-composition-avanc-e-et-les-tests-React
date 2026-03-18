import React from 'react';

function JSXExample() {
  const jsxElement = <h2 className="title">Salut JSX </h2>;

  const jsElement = React.createElement(
    'h2',
    { className: 'title' },
    'Salut JavaScript pur'
  );

  return (
    <section>
      {jsxElement}
      {jsElement}
    </section>
  );
}

export default JSXExample;