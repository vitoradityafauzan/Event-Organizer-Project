
export default function Home() {
  return (
    <main className="flex flex-col gap-14">
      {/* Hero Section */}
      <div className="h-[25rem] w-full border-2 text-center align-middle">
        Hero Section
      </div>
      {/* App advantages */}
      <div className="border-2 flex h-[10rem]">
        <div className="basis-1/2 p-3 border-2 border-slate-500">
          bagian kelebihan
        </div>
        <div className="basis-1/2 p-3 border-2 border-slate-500">
          bagian kelebihan
        </div>
      </div>
      {/* Current Events */}
      <div className="flex flex-col border-2">
        <div className="h-[15rem] border-4">
            events
        </div>
        <div className="h-[15rem] border-4">
            events
        </div>
        <div className="h-[15rem] border-4">
            events
        </div>
      </div>
      {/* Getting Here */}
      <div className="flex flex-col border-2 mb-5">
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
      </div>
    </main>
  )
}
