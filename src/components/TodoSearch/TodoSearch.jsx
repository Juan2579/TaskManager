import { useState } from "react";

export const TodoSearch = ({searchValue, setSearchValue}) => {

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value)
  }
  return (
    <section className="pb-14">
        <input className="w-56 h-10 pl-4 outline-none rounded-2xl shadow-lg" type="text" placeholder="Search task..."
        value={searchValue}
        onChange={onSearchValueChange} />
    </section>
  )
}
