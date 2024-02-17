"use client";
import React from 'react'
import ZigzagHeader from "../components/zigzagHeader";
import Image from "next/image";
import ReactPlayer from "react-player";
import Section from "@/app/common/Section"; 
import { PLUR } from "@/app/assets/images/PLUR";
import DetailSection from "../components/detailSection";
import { FancyButton } from "@/app/common/FancyButton";

const voyager = () => {
  const redirectToFinalWebsite = () => {
    window.location.href = 'https://www.whereistheplur.com/';
  };
  return (
    <div className="w-full text-white">
      <ZigzagHeader
        title= "Voyager"
        description="Interactive gamefied website, branding, and album art for voyager record label"
        extendedDescription="Artwork, album layouts, and an interactive website for a label called Voyager. Currently, the website is a simple tour announcement website with plans to build out a gamefied universe for users to navigate through 3D space. Planets will be added when musical releases come out. As users navigate to each planet, they can experience the released music, merch, etc."
        time="2022 // Freelance"
        role="Web Development, Designs, 3D Models"
        tools={["HTML","CSS","JavaScript","Next.js","Three.js","p5.js","Blender","TouchDesigner","Figma","Photoshop","Illustrator",]}
      />
      <Section>
        <div className="w-full text-center">
          <FancyButton
            className="uppercase mt-28 font-sprat  p-1 hover:text-white"
            size="medium"
            onClick={redirectToFinalWebsite}
          >
            FINAL WEBSITE
          </FancyButton>
        </div>
      </Section>

      <div className="flex justify-center items-center h-screen">
        <ReactPlayer
            url="https://youtu.be/JksvVszrUDM"
            width="90%" 
            height="90%"
            controls
        />
      </div>
        <DetailSection
            className="px-5 md:px-10"
            title="PROCESS"
            description={`For their Voyager series, Fantastic Voyage Records commisioned me to create a new brand identity inspired by retro space aesthetics.`}
            widthFull
            left
          />
          <p className="px-5 md:px-10">First, I created a mood board with various sources of inspiration. This included radar, weather graphics, 80s video games, futurism, heads up displays, terminal screens, and airline cockpits</p>
          <Image src={PLUR.INSPO} alt="inspo" className="w-full h-full px-5 mt-4 md:px-10" />
          <p className="px-5 md:px-10 mt-5">The team setteld on the idea of using wireframes of 3D space objects as a place to start. I created some concepts in Blender and overlayed some heads up display elements. I created a feedback texture in TouchDesigner to mimic old vhs distortion</p>
          <Image src={PLUR.PROCESS2} alt="process2" className="w-full h-full px-5 mt-4 md:px-10" />
          <p className="px-5 md:px-10 mt-5">Final vinyl artwork + shirt design for the first release:</p>
          <Image src={PLUR.VINYL} alt="vinyl" className="w-full h-full px-5 mt-2 md:px-10" />
          <Image src={PLUR.LABEL} alt="vinyl" className="w-full h-full px-5 mt-2 md:px-10" />
          <Image src={PLUR.SHIRT} alt="vinyl" className="w-full h-full px-5 mt-2 md:px-10" />
          <p className="px-5 md:px-10 mt-5">After this was finalized, I took the concepts into figma to create various ideas for the first version of the website which would be centered around a tour announcement.</p>
          <Image src={PLUR.PROCESS} alt="vinyl" className="w-full h-full px-5 mt-2 md:px-10" />
          <p className="px-5 md:px-10 mt-5">I worked on a team with one other to help turn around a finished product in time for the deadline. The HUD elements were created using p5.js, the 3D objects were integrated using three.js and we used an API from bandsintown to pull tour date information.</p>
          <p className="px-5 md:px-10 mt-5">We will continue to integrate more 3D objects to build out the website as more music releases come out.</p>
          <DetailSection
            className="px-5 md:px-10"
            title="TOUR VISUALS PACKAGE"
            description={`Lastly, for the lead artist on the label (Justin Jay), I created a cohesive visual package that combined Voyager aesthetics with thematic elements from his most recent album. The 3D objects were created in Blender and animated/iterated upon in TouchDesigner. In the future, we have plans to implement live video manipulation to compliment his musical performance.`}
            widthFull
            left
          />
          {/* <video autoplay="" muted="" loop="" id="VisualsBG">
          <source src="/Vids/jjvisualpost.mp4" type="video/mp4">
  </video> */}
    </div>
  )
}

export default voyager