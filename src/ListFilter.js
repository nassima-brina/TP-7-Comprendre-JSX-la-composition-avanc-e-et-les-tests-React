
import { useState } from 'react';

function ListFilter({ items, render }) {
  const [search, setSearch] = useState('');

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return render({
    filteredItems,
    searchValue: search,
    setSearchValue: setSearch,
    total: items.length,
    resultsCount: filteredItems.length
  });
}

export default ListFilter;