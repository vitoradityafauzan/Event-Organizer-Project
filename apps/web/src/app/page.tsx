'use client'
import { LandingWrap } from "@/components/LandingWrap";
import {Wrapper} from "@/components/Wrapper";
import { useContextGlobal } from "@/context/Context";
import { useEffect } from "react";

const Home: React.FC = () => {
  const {categories, locations, fetchCategoriesLocations} = useContextGlobal();

  useEffect(() => {    
    if ( 
      (categories === null || categories == undefined || categories.length < 1) && 
      (locations === null || locations == undefined || locations.length < 1)
    ) {
      // console.log("Home, global state not there");      
      
      fetchCategoriesLocations();
    }
    
  }, [categories, locations, fetchCategoriesLocations])

  return (
    <Wrapper additional="flex-col gap-9">
      {/* Hero Section */}
      <div className="h-[25rem] w-full border-2 text-center align-middle">
        Hero Section {typeof categories}
      </div>
      {/* App advantages */}
      <LandingWrap additional="gap-9">
        <div className="basis-1/2 p-3 border-2 border-slate-500">
          bagian kelebihan
        </div>
        <div className="basis-1/2 p-3 border-2 border-slate-500">
          bagian kelebihan
        </div>
      </LandingWrap>
      {/* Current Events */}
      <LandingWrap additional="gap-9 border-slate-700">
        
        <div className="h-[15rem] border-4 border-slate-400">
            events
        </div>
        <div className="h-[15rem] border-4 border-slate-400">
            events
        </div>
        <div className="h-[15rem] border-4 border-slate-400">
            events
        </div>
      </LandingWrap>
      {/* Getting Here */}
      <LandingWrap additional="gap-9">
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

export default Home;