export function filterData(searchInput, restaurants) {
    const filterData = restaurants.filter((rest) =>
      rest?.data?.name?.toLowerCase()?.includes(searchInput?.toLowerCase())
    );
    return filterData;
  }