import { EventCreate } from "@/type/event"

const base_url = process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:8000/api/"

export const postEvent = async (data: EventCreate) => {
    const res = await fetch(`${base_url}/event/`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const result = await res.json();

    return {result, ok: res.ok}
}

export const getLocationAndCategory = async () => {
    const res = await fetch(`${base_url}/event/category-location`);

    const result = await res.json();

    return {result, locations: result.location, categories: result.category, ok: res.ok}
}