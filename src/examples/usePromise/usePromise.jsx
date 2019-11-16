import { useRef, useState, useEffect } from "react";
import { tryCancelPromise, isCancelledError } from "./makeCancelable";
import makeCancelable from "./makeCancelable";

export default function usePromise() {
  const promiseRef = useRef(undefined);
  const [{ status, data, error }, setState] = useState({
    status: undefined,
    data: undefined,
    error: undefined
  });

  function setPromise(funcOrPrmoise) {
    tryCancelPromise(promiseRef.current);

    let cancelablePromise;
    if (typeof funcOrPrmoise === "function") {
      cancelablePromise = makeCancelable(funcOrPrmoise());
    } else if (funcOrPrmoise !== null && funcOrPrmoise !== undefined) {
      cancelablePromise = makeCancelable(funcOrPrmoise);
    }

    if (cancelablePromise) {
      cancelablePromise.promise
        .then(result => {
          const payload = {
            status: "fulfilled",
            data: result,
            error: undefined
          };
          setState(payload);
        })
        .catch(e => {
          if (isCancelledError(e)) {
            console.info(`Caught cancelled promise`, e);
          } else {
            const payload = { status: "rejected", data: undefined, error: e };
            setState(payload);
          }
        });

      promiseRef.current = cancelablePromise;
      setState({ status: "pending", data: undefined, error: undefined });
    }
  }

  useEffect(() => {
    return () => {
      tryCancelPromise(promiseRef.current);
    };
  }, []);

  return [{ status, data, error }, setPromise];
}
