import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="max-w-7xl mx-auto md:px-14 px-4 py-6 bg-[#F0E1DC]">
      <div className="flex  justify-between items-center">      
        
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-rose-700">Home</Link>
          <Link href="/products">Products</Link>
         
        </div>

        <Link href="/" className="text-2xl font-bold tracking-wider">
          CAREMORE
        </Link>

        <div className="hidden md:flex space-x-8">
        <Link href="/currentorders">Current Orders</Link>
        <Link href="/profile">My Account</Link>
        </div>
        
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}