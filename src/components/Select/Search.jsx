// import Search from '../../../public/search.png'

function Search(){
  return(
    <div className="flex items-center gap-3 w-224px h-40px rounded-[100px] bg-slate-800 box-border px-[18px] py-[9px]">
     
      <img className='w-[14px] h-[14px]' src="../../../public/search.png" alt="" />
     
      <input className="PatrickHand bg-transparent outline-none" type="text" placeholder="Search" />
    
    </div>
  )

}
export default Search;