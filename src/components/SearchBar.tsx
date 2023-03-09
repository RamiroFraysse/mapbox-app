import { ChangeEvent, useContext, useRef } from "react";
import { PlacesContext } from "../context";
import { SearchResults } from "./SearchResults";

export function SearchBar() {
  const { searchPlacesByTerm } = useContext(PlacesContext);
  //debounce, para que solo emita valores cuando quiero que se disparen
  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      searchPlacesByTerm(event.target.value);
    }, 200);
  };

  return (
    <div className="search-container">
      <input
        type="search"
        className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
        id="exampleSearch"
        placeholder="Buscar Lugar"
        onChange={onQueryChange}
      />{" "}
      <SearchResults />
    </div>
  );
}

export default SearchBar;
