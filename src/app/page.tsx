"use client";

import { useEffect, useState } from "react";
import { getRedirectUrl } from "@/utils/constants";
import TopHeader from "@/components/homePage/topHeader";
import TopMain from "@/components/homePage/topMain";
import FlickitIsHelpful from "@/components/homePage/flickitIsHelpful";
import BottomMain from "@/components/homePage/bottomMain";
import CarouselComponent from "@/components/homePage/carouselComponent";
import Footer from "@/components/homePage/footer";
import FaqComponents from "@/components/homePage/faqComponents";


export default function Home() {
  const [redirectUrl, setRedirectUrl] = useState('');

  useEffect(() => {
    setRedirectUrl(getRedirectUrl());
  }, []);

return (
    <>
      <TopHeader redirectUrl={redirectUrl}/>
      <TopMain/>
      <FlickitIsHelpful/>
      <BottomMain redirectUrl={redirectUrl}/>
      <CarouselComponent/>
      {/*<FaqComponents/>*/}
      <Footer redirectUrl={redirectUrl}/>
    </>
  );
}
