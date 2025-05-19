import React from 'react';

const SearchBar = (props: { util: Function }) => {
  return (
    <section className="px-2 py-2 border-1 ease-in-out transition-all duration-200 border-opacity-10 border-sky-900 border-opacity-20 rounded-2xl">
      <input
        className="w-full bg-transparent focus:bg-indigo-900  font-mono text-md placeholder:text-slate-200 text-slate-100  border border-indigo-950 rounded-lg px-3 py-3  transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-500 shadow-sm focus:shadow"
        placeholder="Search for a word...."
        onChange={(word) => {
          if (word.target.value.length > 2) {
            props.util(word.target.value);
          }
        }}
      />
    </section>
  );
};

export default SearchBar;
