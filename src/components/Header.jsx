import Link from 'next/link'

const Header = () => {
  return (
    <div>
        <nav className='flex justify-between items-center bg-orange-600 px-8 py-4'>
            <Link className='text-white font-bold text-2xl' href={"/"}>NextCrud</Link>
            <Link className='bg-slate-700 p-2 text-white font-bold' href={"/addItem"}>Add Item</Link>
        </nav>
    </div>
  )
}

export default Header