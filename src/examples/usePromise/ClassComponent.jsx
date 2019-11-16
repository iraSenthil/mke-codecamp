/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from "react";
import fetchJokes from "./fetchJokes";
import { tryCancelPromise, isCancelledError } from "./makeCancelable";
import makeCancelable from "./makeCancelable";

export default class ClassComponent extends Component {
  promiseRef = undefined;
  state = {
    loading: true,
    joke: undefined,
    error: undefined
  };

  fetchJokesFromServer = () => {
    tryCancelPromise(this.promiseRef);
    const cancelablePromise = makeCancelable(fetchJokes());
    this.promiseRef = cancelablePromise;

    cancelablePromise.promise
      .then(joke => {
        this.setState({ joke, loading: false });
      })
      .catch(error => {
        if (isCancelledError(error)) {
          console.info(`We caught the cancelled promise error`, error);
        } else {
          this.setState({ error: true });
        }
      });

    this.setState({ loading: true, error: undefined, joke: undefined });
  };

  componentDidMount() {
    this.fetchJokesFromServer();
  }

  componentWillUnmount() {
    tryCancelPromise(this.promiseRef);
  }

  handleNextJokeClick = () => {
    this.fetchJokesFromServer();
  };

  render() {
    const { loading, joke, error } = this.state;

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

        <button
          className="btn btn-primary mt-2"
          onClick={this.handleNextJokeClick}
        >
          Next Joke Please!!!
        </button>
      </div>
    );
  }
}
