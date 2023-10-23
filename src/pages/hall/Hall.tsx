/* eslint-disable global-require */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function Hall() {
  return (
    <button type="button">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Rectangle_%28plain%29.svg/640px-Rectangle_%28plain%29.svg.png"
        alt=""
      />
    </button>
  );
}

export default function InitializeHall() {
  return (
    <section>
      <Hall />
    </section>
  );
}
