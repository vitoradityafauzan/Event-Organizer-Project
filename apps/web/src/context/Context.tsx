'use client';
import { createContext, useState, useContext, ReactNode } from 'react';
import {
  createCategoriesLocations,
  deleteCategoriesLocations,
  getCategoriesLocationsHome,
} from '@/lib/server';

// Define the structure for our context value
interface ContextGlobalType {
  categories: any[] | null;
  locations: any[] | null;
  fetchCategoriesLocations: () => Promise<void>;
}

interface IData {
  categoryList: any[] | null;
  locationList: any[] | null;
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
  const [categories, setCategories] = useState<any[] | null>(null);
  const [locations, setLocations] = useState<any[] | null>(null);

  const fetchCategoriesLocations = async () => {
    const data: any = await getCategoriesLocationsHome();    

    console.log('fetchCategoriesLocations start');        

    if (data.categoryList[0] == 'not-found') {

      await createCategoriesLocations();

      const data2: any = await getCategoriesLocationsHome();

      console.log('Cookies Set \n');

      console.log(typeof data2.categoryList, ' => ');
      console.log(data2.categoryList[0]);

      console.log(typeof data2.locationList, ' => ');
      console.log(data2.locationList);

      setCategories(data2.categoryList);
      setLocations(data2.locationList);
    } else {
      console.log('Cookies Detected');

      console.log(typeof data.categoryList, ' => ');
      console.log(data.categoryList[0].name);
      
      console.log(typeof data.locationList, ' => ');
      console.log(data.locationList);

      // await deleteCategoriesLocations();
      // console.log('Cookies Deleted');

      // console.log(data.categoryList[0].idCategory, " - ", data.categoryList[0].name);
      

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
