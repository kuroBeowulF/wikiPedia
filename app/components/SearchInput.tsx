"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { FaSpeakap } from "react-icons/fa";
import cntl from "cntl";

const className = {
  form: cntl`flex justify-center mt-2 md:mt-0`,
  input: cntl`pl-2 outline-0 rounded-md`,
  button: cntl`ml-2`,
};

export default function SearchInput() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/${search}/`);
    setSearch("");
  };
  return (
    <form onSubmit={handleSubmit} className={className.form}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className={className.input}
      />
      <button className={className.button}>
        <FaSpeakap
          style={{
            width: "30px",
            height: "30px",
            color: "orange",
          }}
        />
      </button>
    </form>
  );
}
