
import DormCheap from '../components/DormCheap'
import Footter from '../components/Footter'
import Navbar from '../components/Navbar'
import RecommendDorm from '../components/RecommendDorm'
import SearchDorm from '../components/SearchDorm'
const Home = () => {
  return (
    <>
    <div className="flex flex-col bg-[#F0F0F0] ">
    <Navbar/>
    <div className="flex flex-col m-6 ">
    <SearchDorm/>
    <div className="flex flex-col mt-8">
    <DormCheap/>
    <RecommendDorm/>
        
</div>   
    </div>
    <Footter/>
    </div>

    </>
  )
}

export default Home