import Person from "./Person";
import rasmm from "../../public/p1.png"
function Card(){
     return(
          <div className="flex flex-col PatrickHand w-[340px]">
               <img src={rasmm} alt="" className="w-full h-[213px] rounded-2.5 " />
               <div className="flex items-center text-slate-400 text-sm mt-5"><span>INTERNET</span><div className="w-1 h-1 rounded bg-slate-400"></div><span className="">June 28, 2021</span></div>
               <p className="mt-2.5 text-2xl text-white loading-9">How to design a product that can grow itself 10x in year</p>
               <p className="mt-2.5">Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.</p>
               <Person/>
          </div>
     )
}

export default Card;