/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect } from "react";

import fetchJokes from "./fetchJokes";
import usePromise from "./usePromise";

export default function UsePromiseHooks() {
  const [{ status, data, error }, setPromise] = usePromise();

  function fetchJokesFromServer() {
    setPromise(() => fetchJokes());
  }

  useEffect(() => {
    fetchJokesFromServer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleNextJokeClick() {
    fetchJokesFromServer();
  }

  return (
    <div>
      {status === "pending" && <p>Loading... 💫</p>}
      {error && <p>Mhm! 🤔 Something went wrong!!!</p>}
      {data && (
        <div className="card">
          <div className="card-body">
            <h3>{data.question}</h3>
            <h3>{data.answer}</h3>
          </div>
        </div>
      )}

      <button className="btn btn-primary mt-2" onClick={handleNextJokeClick}>
        Next Joke Please!!!
      </button>
    </div>
  );
}
