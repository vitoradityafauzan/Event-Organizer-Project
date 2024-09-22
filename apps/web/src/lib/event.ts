import { EventPost, FormEventCreate } from '@/type/event';

const base_url =
  process.env.BASE_URL_API || 'http://localhost:8000/api/';

// export const postEvent = async (data: FormEventCreate) => {
//   const postData: EventPost = {
//     name: data.name,
//     slug: data.slug,
//     desc: data.desc,
//     image: data.image,
//     price: data.price,
//     amount: data.amount,
//     categoryId: data.categoryId,
//     locationId: data.locationId,
//     startDate: `${data.startDate}, ${data.startTime}:00`,
//     endDate: `${data.endDate}, ${data.endTime}:00`
//   }

//   const res = await fetch(`${base_url}event`, {
//     method: 'POST',
//     body: JSON.stringify(postData),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   const result = await res.json();

//   return { result };
// };

export const postEvent = async (data: FormEventCreate) => {
  const postData = new FormData();
  postData.append('name', data.name);
  postData.append('slug', data.slug);
  postData.append('desc', data.desc);
  if (data.image instanceof File) {
    postData.append('image', data.image);
  } else {
    postData.append('image', new File([data.image], "default.png"));
  }
  postData.append('price', data.price.toString());
  postData.append('amount', data.amount.toString());
  postData.append('locationId', data.locationId.toString());
  postData.append('categoryId', data.categoryId.toString());
  postData.append('startDate', `${data.startDate}, ${data.startTime}:00`);
  postData.append('endDate', `${data.endDate}, ${data.endTime}:00`);

  const res = await fetch(`${base_url}event`, {
    method: 'POST',
    body: postData, // Send formData here
  });

  const result = await res.json();

  return { result };
};


export const getEventList = async /*(search: string)*/ (search: string, category: string, location: string) => {
  console.log('event lib, fetching event list start');

  console.log('search query-',search,', category query-',category, ', location-',location);

  // const res = await fetch(`${base_url}event`);
  const res = await fetch(`${base_url}event?search=${search}&category=${category}&location=${location}`);
  // const res = await fetch(`${base_url}event?search=${search}`);
  const result = await res.json();
  // let events: (string | number)[] = [];

  if (result.status != 'ok') {
    console.log('fetching failed');
    
    throw new Error('Failed to fetch events');
  } else {
    console.log('fetching success');

    return {events: [...result.events]}
    
    // events = [...result.events];

    // console.log(events);
    
    // return events;
  }

  // return { ok: result.ok, events: result.events };
};

export const getEventSneakPeak = async () => {
  const res = await fetch(`${base_url}event`);
  const result = await res.json();
  const events: (string | number)[] = [];

  // console.log(result);

  if (result.status != 'ok') {
    throw new Error('Failed to fetch events');
  }

  // console.log('Event Sneak Peak');

  // console.log('event data, ', result.events);

  for (let i = 0; i <= 2; i++) {
    if (result.events[i] == null || result.events[i] == undefined) break;
    // console.log('loop,',i);
    // console.log('status,',result.ok);

    events.push(result.events[i]);
  }

  // console.log('loop result,', events);

  return events;
};

export const getLocationAndCategory = async () => {
  const res = await fetch(`${base_url}/event/category-location`);
  console.log('Fetching Categories and Locations, Lib Server');

  const result = await res.json();

  console.log(result);

  return {
    result,
    locations: result.location,
    categories: result.category,
    ok: res.ok,
  };
};
