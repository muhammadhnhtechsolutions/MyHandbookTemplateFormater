
import { Suspense } from 'react'
import  Sigin from '../../componants/LoginComponants/SiginIN'

 const page = () => {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <Sigin/>
        </Suspense>
  )
}
export default page
