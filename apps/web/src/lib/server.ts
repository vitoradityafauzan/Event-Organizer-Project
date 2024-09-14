'use server';
import { cookies } from 'next/headers';

// Set Base Url Of API
const base_url =
  process.env.NEXT_PUBLIC_BASE_API_URL || 'http://localhost:8000/api/';

// Setting Cookies
const cookiesStore = cookies();

// START Cookies For Categories And Locations
export async function createCategoriesLocations() {
  // Fetch Category and Location List
  const response = await fetch(`${base_url}event/category-location`);
  const data = await response.json();
  
  const oneDay = 24 * 60 * 60 * 1000;

  cookiesStore.set('categories', data.category, {
    expires: Date.now() + oneDay,
  });

  cookiesStore.set('locations', data.location, {
    expires: Date.now() + oneDay,
  });
}

export async function getCategoriesLocationsHome() {
  if (cookiesStore.has('categories') && cookiesStore.has('locations')) {
    const dataCategory = cookiesStore.get('categories')?.value;
    const dataLocation = cookiesStore.get('locations')?.value;

    return { categoryList: dataCategory, locationList: dataLocation };

  } else {
    return 'not-found';

  }
}

export async function deleteCategoriesLocations() {
    cookiesStore.delete('categories');
    cookiesStore.delete('locations');
}