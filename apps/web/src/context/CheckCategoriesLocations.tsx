
export async function CheckCategoriesLocations(categories: any, locations: any, fetchCategoriesLocations: any) {
    if (
        (categories == null ||
          categories == undefined ||
          categories.length < 1) &&
        (locations == null || 
          locations == undefined || 
          locations.length < 1)
      ) {
        // console.log("Home, global state not there");
  
        fetchCategoriesLocations();
      }
}