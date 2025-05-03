import Link from "next/link"
import Image from "next/image"
function Navbar() {
  return (
    <header>
      <nav className='bg-gray-800 p-4 text-white flex items-center justify-between'>
          <Image
          src={'/avatar.png'}
          alt="avatar "
          width={40}
          height={40}
          />
        <ul className='flex items-center justify-center space-x-4'>
          <Link href={"/"}><li>Home</li></Link>
          <Link href={"/blog"}><li>Blog</li></Link>
          <Link href={"/"}><li>Home</li></Link>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar