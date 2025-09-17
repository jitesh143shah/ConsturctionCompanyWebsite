
import { Footer, Navbar } from '../../../../component/imports'
import { WorkerClothes } from '../../../../images'

const CommercialConstruction = () => {
  return (
    <>
    <Navbar />
    <div className='container py-10'>
      <div className=''>
        <div>

      <img src={WorkerClothes} alt={WorkerClothes} />
    </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default CommercialConstruction
