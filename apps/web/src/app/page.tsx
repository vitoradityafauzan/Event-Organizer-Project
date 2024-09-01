import { LandingWrap } from "@/components/LandingWrap";
import {Wrapper} from "@/components/Wrapper";

export default function Home() {
  return (
    <Wrapper direction="col" gap={12}>
      {/* Hero Section */}
      <div className="h-[25rem] w-full border-2 text-center align-middle">
        Hero Section
      </div>
      {/* App advantages */}
      <LandingWrap direction="row" gap={1} width="[100%]" height="full">
        <div className="basis-1/2 p-3 border-2 border-slate-500">
          bagian kelebihan
        </div>
        <div className="basis-1/2 p-3 border-2 border-slate-500">
          bagian kelebihan
        </div>
      </LandingWrap>
      {/* Current Events */}
      <LandingWrap direction="col" gap={0} width="full" height="full">
        <div className="h-[15rem] border-4">
            events
        </div>
        <div className="h-[15rem] border-4">
            events
        </div>
        <div className="h-[15rem] border-4">
            events
        </div>
      </LandingWrap>
      {/* Getting Here */}
      <LandingWrap direction="col" gap={1} width="full" height="full">
        <h1>Getting Here</h1>
        <div className="flex w-full border-2 gap-9 justify-center">
          <div className="border-4">
            transportaion
          </div>
          <div className="border-4">
            transportaion
          </div>
          <div className="border-4">
            transportaion
          </div>
        </div>
      </LandingWrap>
    </Wrapper>
  )
}
