'use client';
import { createContext, useState, useContext, ReactNode } from 'react';
import {
  createCategoriesLocations,
  deleteCategoriesLocations,
  getCategoriesLocationsHome,
} from '@/lib/server';

// Define the structure for our context value
interface ContextGlobalType {
  categories: string[];
  locations: string[];
  fetchCategoriesLocations: () => Promise<void>;
}

// Create the context with a default value
const ContextGlobal = createContext<ContextGlobalType | undefined>(undefined);

// Set Base Url Of API
const base_url =
  process.env.NEXT_PUBLIC_BASE_API_URL || 'http://localhost:8000/api/';

// Provider component to wrap around the application
export const ContextGlobalProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [categories, setCategories] = useState<any[]>([]);
  const [locations, setLocations] = useState<any[]>([]);

  const fetchCategoriesLocations = async () => {
    const data: any = await getCategoriesLocationsHome();    

    if (data == 'not-found') {

      await createCategoriesLocations();

      const data2: any = await getCategoriesLocationsHome();

    //   console.log('Cookies Set \n');

    //   console.log(typeof data2.categoryList, ' => ', data2.categoryList, '\n');
    //   console.log(typeof data2.locationList, ' => ', data2.locationList, '\n');

      setCategories(data.categoryList);
      setLocations(data.locationList);
    } else {
    //   console.log('Cookies Detected');

    //   console.log(typeof data.categoryList, ' => ', data.categoryList, '\n');
    //   console.log(typeof data.locationList, ' => ', data.locationList, '\n');

      //   await deleteCategoriesLocations();

      //   console.log('Cookies Deleted');

    //   console.log(data.categoryList[0].idCategory, " - ", data.categoryList[0].name);
      

      setCategories(data.categoryList);
      setLocations(data.locationList);
      //
    }
  };

  return (
    <ContextGlobal.Provider
      value={{ categories, locations, fetchCategoriesLocations }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

// Custom hook to use the ContextGlobal
export const useContextGlobal = () => {
  const context = useContext(ContextGlobal);
  if (!context) {
    throw new Error(
      'useContextGlobal must be used within a ContextGlobalProvider',
    );
  }
  return context;
};
