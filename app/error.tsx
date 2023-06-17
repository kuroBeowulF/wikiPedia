"use client"; // Error components must be Client Components

import { useEffect } from "react";
import cntl from "cntl";

const className = {
  errTitle: cntl`text-orange-800 font-serif text-xl`,
  errBox: cntl`w-1/2 h-48 mt-5 p-2 mx-auto rounded-xl bg-slate-200 flex flex-col items-center`,
  errBut: cntl`p-3 bg-orange-400 rounded-xl mt-4 text-white hover:text-orange-400 hover:bg-white`,
};
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={className.errBox}>
      <h2 className={className.errTitle}>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className={className.errBut}
      >
        Try again
      </button>
    </div>
  );
}
