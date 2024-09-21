import { format, parseISO } from "date-fns";
import Link from "next/link";

interface IEvent {
  name: string;
  desc: string;
  image?: string;
  startDate?: string | null;
  loopKey: number;
}

const CardEvent: React.FC<IEvent> = ({ name, desc, image, startDate, loopKey }) => {
  const fromIso = parseISO(`${startDate}`);
  const newStart = format(fromIso, 'dd MMMM yyyy')

  return (
    <div className="card bg-base-100 w-full md:w-80 lg:w-92 lg:h-[35rem] shadow-xl" key={loopKey}>
      <figure>
        {/* <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        /> */}
        <img
          src={image}
          alt={name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h3>{newStart}</h3>
        <p>{desc}</p>
        <div className="card-actions justify-end">
            <Link href={`/event/${name}`}>
                <button className="btn btn-primary">Buy Now</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
