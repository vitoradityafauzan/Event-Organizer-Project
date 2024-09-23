'use client';

// import Link from 'next/link';

// Define the Event type
// interface Event {
//   id: number;
//   name: string;
//   description: string;
//   location: string;
//   date: string;
//   time: string;
//   image: string;
//   availableSeats: number;
//   isPaidEvent: string;
//   organizer: {
//     id: number;
//     name: string;
//   };
// }

// const Event = () => {
//   const [events, setEvents] = useState<Event[]>([]);
//   console.log('events:', events);
//   return (
//     <section className="relative w-full h-full flex justify-center items-center py-[78px] px-5">
//       <div className="lg:w-[80%] w-full shadow-lg bg-white rounded-lg p-6">
//         {/* Title */}
//         <h1 className="text-[24px] md:text-[28px] text-black font-semibold pb-4 mb-4 md:mb-6">
//           My Event List
//         </h1>

//         {/* Ticket Table */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   No
//                 </th>
//                 <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Event Name
//                 </th>
//                 <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Location
//                 </th>
//                 <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Date & Time
//                 </th>
//                 <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Seat Capacity
//                 </th>
//                 <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Price Set
//                 </th>
//                 <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Modify
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {/* row 1 */}
//               <tr>
//                 <td className="px-2 md:px-4 py-2 md:py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                   1
//                 </td>
//                 <td className="px-2 md:px-4 py-2 md:py-4 whitespace-nowrap text-sm text-black hover:underline hover:text-blue-500"></td>
//                 <td className="px-2 md:px-4 py-2 md:py-4 whitespace-nowrap text-sm text-gray-900">
//                   Jakarta
//                 </td>
//                 <td className="px-2 md:px-4 py-2 md:py-4 whitespace-nowrap text-sm text-gray-900">
//                   10 September 2024 / 19:00 WIB
//                 </td>
//                 <td className="px-2 md:px-4 py-2 md:py-4 whitespace-nowrap text-sm text-gray-900">
//                   50 / 100
//                 </td>
//                 <td className="px-2 md:px-4 py-2 md:py-4 whitespace-nowrap text-sm text-gray-900">
//                   Rp. 500.000,-
//                 </td>
//                 <td className="px-2 md:px-4 py-2 md:py-4 whitespace-nowrap text-sm font-medium">
//                   <button className="btn btn-ghost btn-xs">
//                     <Link href={'/my-event/details'}>edit</Link>
//                   </button>
//                 </td>
//               </tr>
//               {/* row 2 */}
//               <tr>
//                 <td className="px-2 md:px-4 py-2 md:py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                   2
//                 </td>
//                 <td className="px-2 md:px-4 py-2 md:py-4 whitespace-nowrap text-sm text-black hover:underline hover:text-blue-500">
//                   <Link href={'/my-event/details'}>
//                     Ed Sheeran Live In Bandung
//                   </Link>
//                 </td>
//                 <td className="px-2 md:px-4 py-2 md:py-4 whitespace-nowrap text-sm text-gray-900">
//                   Bandung
//                 </td>
//                 <td className="px-2 md:px-4 py-2 md:py-4 whitespace-nowrap text-sm text-gray-900">
//                   8 December 2024 / 19:00 WIB
//                 </td>
//                 <td className="px-2 md:px-4 py-2 md:py-4 whitespace-nowrap text-sm text-gray-900">
//                   65 / 100
//                 </td>
//                 <td className="px-2 md:px-4 py-2 md:py-4 whitespace-nowrap text-sm text-gray-900">
//                   Rp. 2.500.000,-
//                 </td>
//                 <td className="px-2 md:px-4 py-2 md:py-4 whitespace-nowrap text-sm font-medium">
//                   <button className="btn btn-ghost btn-xs">
//                     <Link href={'/my-event/details'}>edit</Link>
//                   </button>
//                 </td>
//               </tr>
//               {/* row 3 */}
//               <tr>
//                 <td className="px-2 md:px-4 py-2 md:py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                   3
//                 </td>
//                 <td className="px-2 md:px-4 py-2 md:py-4 whitespace-nowrap text-sm text-black hover:underline hover:text-blue-500">
//                   <Link href={'/my-event/details'}>
//                     Rizky Febian Bandung Love Story
//                   </Link>
//                 </td>
//                 <td className="px-2 md:px-4 py-2 md:py-4 whitespace-nowrap text-sm text-gray-900">
//                   Bandung
//                 </td>
//                 <td className="px-2 md:px-4 py-2 md:py-4 whitespace-nowrap text-sm text-gray-900">
//                   10 Oktober 2024 / 17:00 WIB
//                 </td>
//                 <td className="px-2 md:px-4 py-2 md:py-4 whitespace-nowrap text-sm text-gray-900">
//                   120 / 200
//                 </td>
//                 <td className="px-2 md:px-4 py-2 md:py-4 whitespace-nowrap text-sm text-gray-900">
//                   FREE
//                 </td>
//                 <td className="px-2 md:px-4 py-2 md:py-4 whitespace-nowrap text-sm font-medium">
//                   <button className="btn btn-ghost btn-xs">
//                     <Link href={'/my-event/details'}>edit</Link>
//                   </button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         {/* Save Button */}
//         <div className="flex justify-center mt-6 md:mt-10">
//           <Link href={'/event'}>
//             <button
//               type="submit"
//               className="text-white bg-Dark-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 md:px-5 py-2 md:py-2.5 text-center"
//             >
//               Save
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Event;

import React, { useState, useEffect } from 'react';

import { getToken } from '@/lib/server'; // Adjust the import path as needed
import JwtDecode, { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  id: string;
}

interface Event {
  id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
  availableSeats: number;
  isPaidEvent: string;
  price: number;
  discountCode: string;
  amount: number;
  quotaAvailable: number;
  validUntil: string;
}

const base_url = 'http://your-api-url.com'; // Replace with your actual API URL

const MyEventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getToken();
        if (!token) throw new Error('No token found');

        // Decode the token to get user info
        const decodedToken: DecodedToken = jwtDecode<DecodedToken>(token);
        const userId = decodedToken.id;

        if (!userId) throw new Error('User ID not found in token');

        const response = await fetch(`${base_url}/user/${userId}/events`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error('Failed to fetch events');

        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>My Events</h1>
      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <h2>{event.name}</h2>
              <p>
                {event.date} {event.time}
              </p>
              <p>{event.location}</p>
              <p>{event.description}</p>
              <p>Seats: {event.availableSeats}</p>
              <p>Type: {event.isPaidEvent}</p>
              {event.isPaidEvent === 'Paid' && <p>Price: ${event.price}</p>}
              <p>Discount Code: {event.discountCode}</p>
              <p>Amount: {event.amount}</p>
              <p>Quota Available: {event.quotaAvailable}</p>
              <p>Valid Until: {event.validUntil}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyEventsPage;
