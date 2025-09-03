import React, { useRef } from "react";
import { useGSAP } from '@gsap/react' 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const Agency = () => {

  const sectionRef = useRef(null);
  const imageRef = useRef(null);


  gsap.registerPlugin(ScrollTrigger);

  
  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_640X960-640x960.jpg",
    "https://k72.ca/uploads/teamMembers/Isa_640X960-640x960.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg"
  ]
   
  useGSAP(function(){
    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 27%",
        end: "top -120%",

        pin: true,
        onUpdate:(elem)=>{
          let imageIndex;
          if (elem.progress === 1) {
            imageIndex = imageArray.length - 1;
          } else { 
            imageIndex = Math.floor(elem.progress * imageArray.length);
          }
          imageRef.current.src = imageArray[imageIndex];
        }
      }
    });
  })

  return (
    <div>
      <div className="SECTION1">
        <div ref={sectionRef} className="  IMAGE  h-75 w-55 absolute top-55 left-[30vw] rounded-2xl  overflow-hidden">
          <img
            ref={imageRef}
            className="object-cover w-full h-full"
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg "
            alt=""
          />
        </div>
        <div className="TEXTS relative">
          <div className="HEROTEXT mt-[55vh]">
            <h1 className="font-[font2] text-center uppercase text-[20vw] leading-[17.5vw]">
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className="PARA pl-[40vw]">
            <p className=" font-[font2] text-[4vw] leading-[4vw] ">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C’est pour ça qu’on s’engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="SECTION 2 m-[9vw] ml-[13vw] flex gap-20 font-[font1] text-[1.5vw]">
        <div className="upper flex flex-col justify-between">
          <p>Expertise</p>
          <p>
            Nos projets_ naissent dans l’humilité, grandissent dans la curiosité
            et vivent grâce à la créativité sous toutes ses formes.
          </p>
        </div>
        <div className="lower flex flex-col gap-20 ">
          <p className="flex flex-col">
            <span>Stratégie</span> <span>Publicité</span> <span>Branding</span>{" "}
            <span>Design</span> <span>Contenu</span>
          </p>
          <p className="">
            Notre création_ bouillonne dans un environnement où le talent a le
            goût d’exploser. Où on se sent libre d’être la meilleure version de
            soi-même.
          </p>
        </div>
        <div className=" third flex items-end">
          <p>
            Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage
            participe à bâtir une agence dont on est fiers.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Agency;
