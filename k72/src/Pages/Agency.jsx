import React from "react";

const Agency = () => {
  return (
    <div>
      <div className="HEROTEXT mt-[55vh]">
        <h1 className="font-[font2] text-center uppercase text-[20vw] leading-[17.5vw]">
          Soixan7e <br />
          Douze
        </h1>
      </div>
      <div className="PARA pl-[40vw]">
        <p className=" font-[font2] text-[4vw] leading-[4vw] ">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Notre curiosité nourrit notre créativité. On reste humbles et on dit
          non aux gros egos, même le vôtre. Une marque est vivante. Elle a des
          valeurs, une personnalité, une histoire. Si on oublie ça, on peut
          faire de bons chiffres à court terme, mais on la tue à long terme.
          C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir
          des marques influentes.
        </p>
      </div>
      <div className="CONTAINER PARA m-[9vw] ml-[13vw] flex gap-20 font-[font1] text-[1.5vw]">
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
