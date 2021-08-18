import React from "react";

export default function userId({ user }) {
  return (
    <div className="center">
      <h2>{user.name}</h2>
      <p>{user.number}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <a rel="noreferrer" target="_blank" href={user.website}>
        {user.website}
      </a>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const userParamsId = params.userId;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userParamsId}`
  );
  const user = await res.json();
  user.number = Math.random().toString(36).substr(2, 7);

  return { props: { user } };
}
