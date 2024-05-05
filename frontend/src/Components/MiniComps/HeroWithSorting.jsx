import './HeroWithSorting.css'
import dropdown_icon from '../Assets/dropdown_icon.png'
const HeroWithSorting = ({ banner }) => {
  return (
    <>
      <img className='shopcategory-banner' src={banner} alt="Props" />
        <div className="shopcategory-indexSort">
            <p><span>Showing 1-12 </span>out of 36</p>
            <div className="shopcategory-sort">
               Sort by <img src={dropdown_icon} alt="" />
            </div>
        </div>
    </>
  )
}

export default HeroWithSorting
