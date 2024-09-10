import Link from "next/link";

interface IEvent {
  title: string;
}

const CardEvent: React.FC<IEvent> = ({ title }) => {
  return (
    <div className="card bg-base-100 w-full md:w-80 lg:w-92 lg:h-[35rem] shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
            <Link href={`/event/${title}`}>
                <button className="btn btn-primary">Buy Now</button>
            </Link>
          
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
