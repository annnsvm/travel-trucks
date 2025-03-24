export const selectAllTrucks = state => state.trucks.trucks || [];
export const selectTruck = state => state.trucks.truck
export const selectTotal = state => state.trucks.total
export const selectDisplayedTrucks = state => state.trucks.displayedTrucks || []
export const selectCurrentPage = state => state.trucks.currentPage
export const selectItemsPerPage = state => state.trucks.itemsPerPage
export const selectFilteredTrucks = state => state.trucks.filteredTrucks
export const selectEmptyFilter = state => state.trucks.emptyFilter
export const selectLoader = state => state.trucks.loading
export const selectFavoritesTrucks = state => state.trucks.favoritesTrucks