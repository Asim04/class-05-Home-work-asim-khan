import Link from "next/link"

const Navbar = () => {
  return (
    <div>
        <header className="flex justify-evenly items-center bg-teal-700 w-full h-14">
            <div><Link href="/"><h1 className="text-2xl px-20">Logo</h1></Link></div>

          
            <div className="flex justify-between items-center text-xl mr-20 gap-4">
                <Link href="/">Home</Link>
                <Link href="about">About-us</Link>
                <Link href="contact">Contact</Link>
                <Link href="product">Product</Link>
            </div>

             {/* Search Input */}
          <div className="relative">
            <input type="text" placeholder="Search..."
             className="pl-10 pr-2 py-1 rounded-md border border-gray-300"/>

            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              🔍 
            </span>
          </div>

          <div>
            <ul className="flex space-x-4">
              <Link href="login"><li>Login</li></Link>
              <Link href="signup"><li>Signup</li></Link>
            </ul>
          </div>
        </header>
      
    </div>
  )
}

export default Navbar
