"use client";

export default function FilterError({ error }) {
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>{error.message}</p>
    </div>
  );
}
