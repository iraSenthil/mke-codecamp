/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect, useRef } from "react";
import { tryCancelPromise, isCancelledError } from "./makeCancelable";
import makeCancelable from "./makeCancelable";
import fetchJokes from "./fetchJokes";

export default function Hooks() {
  const [joke, setJoke] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const promiseRef = useRef();

  function fetchJokesFromServer() {
    tryCancelPromise(promiseRef.current);
    const cancelablePromise = makeCancelable(fetchJokes());
    promiseRef.current = cancelablePromise;

    cancelablePromise.promise
      .then(joke => {
        setJoke(joke);
        setLoading(false);
      })
      .catch(error => {
        if (isCancelledError(error)) {
          console.info(`We caught the cancelled promise error`, error);
        } else {
          setError(true);
        }
      });

    setLoading(true);
    setJoke(undefined);
    setError(undefined);
  }

  useEffect(() => {
    fetchJokesFromServer();
    return () => {
      tryCancelPromise(promiseRef.current);
    };
  }, []);

  function handleNextJokeClick() {
    fetchJokesFromServer();
  }

  return (
    <div>
      {loading && <p>Loading... 💫</p>}
      {error && <p>Mhm! 🤔 Something went wrong!!!</p>}
      {joke && (
        <div className="card">
          <div className="card-body">
            <h3>{joke.question}</h3>
            <h3>{joke.answer}</h3>
          </div>
        </div>
      )}

      <button className="btn btn-primary mt-2" onClick={handleNextJokeClick}>
        Next Joke Please!!!
      </button>
    </div>
  );
}
