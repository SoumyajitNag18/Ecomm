import HeroWithSorting from '../Components/MiniComps/HeroWithSorting.jsx'
import NewCollections from '../Components/NewCollections/NewCollections.jsx'

const LatestCollection = ({ banner }) => {
  return (
    <div>
        <HeroWithSorting banner={banner}/>
        <NewCollections/>
    </div>
  )
}

export default LatestCollection
