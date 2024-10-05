function Person(){
     return(
     <div className="flex gap-5 mt-5 items-center">
          <img className="w-[50px] h-[50px] rounded-[50px] " src="../../public/Elip.png" alt="" />
          <div className="flex flex-col ">
               <p className="text-white text-base leading-7 ">Leslie Alexander</p>
               <p className="text-slate-400 leading-7 text-sm">UI Designer</p>
          </div>
     </div>
     )
}

export default Person;