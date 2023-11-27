import ImageCard from './ImageCard.jsx'
import { Helmet } from "react-helmet";

function Home() {
    return (
      <>
        <Helmet>
            <title>Glass | Home</title>
        </Helmet>
         <ImageCard src="placeholder.png" title="Placeholder" desc="This is a placeholder image."></ImageCard>
      </>
    )
  }

export default Home