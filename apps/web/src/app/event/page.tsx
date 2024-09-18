import CardEvent from '@/components/Events/CardEvent';
import { Wrapper } from '@/components/Wrapper';

export default function Event() {
    let i = 1;
    const loo = ["Game Expo","Car Expo","Tech Expo","Job Expo","Pet Expo","End Year Expo"]

  return (
    <Wrapper additional='flex-col gap-5 p-3 md:p-10 border-4 justify-center'>
      <h1 className='text-3xl'>Our Events</h1>
      <div className="flex flex-wrap gap-5 justify-around">
        {loo.map((lo) => {
            return (
                <CardEvent loopKey={lo} name={lo} desc="lorem" />
            )
        })}
      </div>
    </Wrapper>
  );
}
