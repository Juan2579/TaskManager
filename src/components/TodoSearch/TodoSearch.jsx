import { useState, useContext } from "react";
import { TaskContext } from "../../todoContext";

export const TodoSearch = () => {

  const {searchValue, setSearchValue} = useContext(TaskContext)
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value)
  }
  return (
    <section className="pb-10">
        <input className="w-56 h-10 pl-4 rounded-2xl shadow-lg outline-2 outline-[#90D2DD] lg:w-80 lg:h-12" type="text" placeholder="Search task..."
        value={searchValue}
        onChange={onSearchValueChange} />
    </section>
  )
}
