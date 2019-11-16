class PromiseCancelledError extends Error {
  constructor(data) {
    super("PromiseCancelled");
    this.isCanceled = true;
    this.data = data;
  }
}

export default function makeCancelable(promise) {
  let hasCanceled = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      val =>
        hasCanceled
          ? reject({ isCanceled: true, error: new PromiseCancelledError(val) })
          : resolve(val),
      error =>
        hasCanceled
          ? { isCanceled: true, error: new PromiseCancelledError(error) }
          : reject(error)
    );
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled = true;
    }
  };
}

export function tryCancelPromise(cancelablePromise) {
  if (cancelablePromise && cancelablePromise.cancel) {
    cancelablePromise.cancel();
  }
}

export function isCancelledError(error) {
  return error && error.isCanceled;
}
