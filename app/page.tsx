import { Button } from '@/components/ui/button'
import Image from 'next/image'
import  Header  from './Header'
import ClientHero from '@/components/ClientHero'
import Footer from '@/components/Footer'



export default function Home() {
  return (
   <>
 <Header />
 <ClientHero />
 <Footer />
   </>
  )
}
