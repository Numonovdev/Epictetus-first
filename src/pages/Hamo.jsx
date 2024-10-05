import '../../public/Elip.png'
import React from "react";
import Person from '../components/Person';
import Card from '../components/Card';
function Home(){
     return(
     <div className="flex flex-col w-full mt-[54px] text-white ">
          <div className="flex w-full gap-[31px]">
               <img src="../../public/R4.png" alt="" className="w-[710px] h-[389px] rounded-xl" />
               <div className="PatrickHand">
                    <div className="mt-[17px] flex items-center text-sm text-slate-400 font-normal gap-5"><span>UI DESIGN</span> <div className="bg-slate-400 w-1 h-1 rounded-sm"></div> <span>July 2, 2021</span></div>
                    <p className="text-2xl font-normal leading-9 mt-2.5">Understanding color theory: the color wheel and finding complementary colors</p>
                    <p className="text-base w-[283px] mt-2.5 font-normal text-slate-400 leading-7">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p>
                    <Person/>
               </div>
          </div>
          <div className=' w-full flex flex-wrap mt-[60px] gap-7'> 
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
               </div>
     
     </div>
     )
}
export default Home;