/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function Room() {
  return (
    <button type="button">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT656wVo_5Guk0GJVe9OlT8TOoXUI85i7U09g&usqp=CAU" />
    </button>
  );
}

export default function InitializeRoom() {
  return (
    <section>
      <Room />
    </section>
  );
}
