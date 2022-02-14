import React, { useEffect, useMemo, useRef, useState } from "react";
import faker from "@faker-js/faker";
import debounce from "lodash.debounce";

const Debounce = () => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  let names = fakeNames;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  if (query) {
    names = fakeNames.filter((name) =>
      name.toLocaleLowerCase().includes(query.toLowerCase())
    );
  }

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 300),
    []
  );

  return (
    <div>
      <input ref={inputRef} type="text" onChange={debouncedChangeHandler} />
      <hr />
      {names.map((name) => (
        <div key={"key" + name}>{name}</div>
      ))}
    </div>
  );
};

const fakeNames = Array.from(Array(400), () => {
  return faker.name.findName();
});

export default Debounce;
