import { Helmet } from "react-helmet-async"
import Categories from "../../components/Categories/Categories"
import Rooms from "../../components/Room/Rooms"

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>
      <h1>Welcome to StayVista</h1>
      <Categories></Categories>
      <Rooms></Rooms>

    </div>
  )
}

export default Home
