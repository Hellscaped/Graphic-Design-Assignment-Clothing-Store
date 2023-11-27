import ImageCard from './ImageCard.jsx'
import { Helmet } from "react-helmet";

function Home() {
    return (
      <>
        <Helmet>
            <title>Glass | Home</title>
        </Helmet>
         <ImageCard src="shirts.png" desc="Our shirts are of top notch quality."></ImageCard>
        <ImageCard src="delivery-drone-concept.jpg" desc="We deliver our products with the fastest drones in the world."></ImageCard>
        <a href="https://www.freepik.com/free-photo/delivery-drone-concept_17573701.htm#query=shipping%20drone&position=0&from_view=keyword&track=ais&uuid=c0b5367b-5b11-492d-9b30-c3d0629ab7c7">Above image by user6702303</a> on Freepik
      </>
    )
}

export default Home