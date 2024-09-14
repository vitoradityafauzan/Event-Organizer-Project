// components/SearchModal.tsx
'use client';

import { useContextGlobal } from '@/context/Context';
import React, { useEffect, useState } from 'react';

const SearchModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const { categories, locations, fetchCategoriesLocations } =
    useContextGlobal();

  useEffect(() => {
    if (
      (categories === null ||
        categories == undefined ||
        categories.length < 1) &&
      (locations === null || locations == undefined || locations.length < 1)
    ) {
      fetchCategoriesLocations();
    }
  }, [categories, locations, fetchCategoriesLocations]);

  return (
    <>
      <button className="btn btn-ghost btn-circle" onClick={openModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      {/* isOpen &&  */}
      {isOpen && (
        <>
          {(categories === null || categories == undefined) &&
          (locations === null || locations == undefined) ? (
            <div className="fixed inset-0 w-screen h-screen flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
              <div className="bg-white w-11/12 h-[80%] p-8 rounded shadow-lg relative overflow-y-auto">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-4 rou text-gray-600 hover:text-gray-900 text-lg"
                  aria-label="Close"
                >
                  &times;
                </button>

                <input
                  type="text"
                  placeholder="Type here"
                  className="input w-full mb-0"
                />
                <div className="w-full rounded-lg border-b-2 border-black mb-5"></div>

                <div className="flex flex-col h-full gap-6 mb-8">
                  <span className="loading loading-bars loading-lg"></span>
                </div>
              </div>
            </div>
          ) : (
            <div className="fixed inset-0 w-screen h-screen flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
              <div className="bg-white flex flex-col gap-4 w-11/12 h-[80%] p-8 rounded shadow-lg relative overflow-y-auto">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-4 rou text-gray-600 hover:text-gray-900 text-lg"
                  aria-label="Close"
                >
                  &times;
                </button>

                <input
                  type="text"
                  placeholder="Type here"
                  className="input w-full mb-0 p-5"
                />
                <div className="w-full rounded-lg border-b-2 border-black mb-5"></div>

                <div className="w-fit h-fit mx-auto flex gap-5 p-4 border-4">
                  <div>
                    <select className="select w-full max-w-xs border-2">
                      <option disabled selected>
                        What is the best TV show?
                      </option>
                      {categories.map((cat: any) => (
                        <option key={cat.idCategory}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select className="select w-full max-w-xs border-2">
                      <option disabled selected>
                        What is the best Movies?
                      </option>
                      {locations.map((lot: any) => (
                        <option key={lot.idLocation}>{lot.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col h-full gap-6 mb-8">
                  <div className="border-b-2 border-black flex flex-col gap-2">
                    <h2 className="text-3xl">Modal Title</h2>
                    <p className="text-lg">This is a client-side modal.</p>
                    <h3 className="text-sm">01-01-1999</h3>
                  </div>
                  <div className="border-b-2 border-black flex flex-col gap-2">
                    <h2 className="text-3xl">Modal Title</h2>
                    <p className="text-lg">This is a client-side modal.</p>
                    <h3 className="text-sm">01-01-1999</h3>
                  </div>
                  <div className="border-b-2 border-black flex flex-col gap-2">
                    <h2 className="text-3xl">Modal Title</h2>
                    <p className="text-lg">This is a client-side modal.</p>
                    <h3 className="text-sm">01-01-1999</h3>
                  </div>
                  <div className="border-b-2 border-black flex flex-col gap-2">
                    <h2 className="text-3xl">Modal Title</h2>
                    <p className="text-lg">This is a client-side modal.</p>
                    <h3 className="text-sm">01-01-1999</h3>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default SearchModal;
