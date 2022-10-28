import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Footer(){
  return(
<footer className="footer items-center p-4 bg-neutral text-neutral-content">
  <div className="items-center grid-flow-row">
    <Image src="/elden_ring_logo.svg" alt="ELDEN RING LOGO" width={72} height={16} />
    <p>Copyright © 2022 - All right reserved</p>
    <p>Elden Ring Builds is an unlicensed tool for <a href="https://en.bandainamcoent.eu/elden-ring/elden-ring">Namco Bandai&apos;s ELDEN RING</a></p>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a href="https://www.buymeacoffee.com/zombiequinox"> <FontAwesomeIcon icon={faCoffee} />
    </a> 
    
  </div>
</footer>
  )
}