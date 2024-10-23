

export default function Header() {
  return (
    <>
      <header className=" p-5 flex text-slate-50 bg-black text-center content-center items-center justify-around">
        <span className="text-center font font-medium text-3xl">SpaceOS </span>
        <nav className="flex  ">
          <ul className=" w-96  hidden md:flex text-center text-lg content-center px-3  justify-between ">
            <li className="hover:text-orange-600 hover:text-xl">
              <a href="/home">Home</a>
            </li>
            <li className="hover:text-orange-600 hover:text-xl">
              <a href="/about">About</a>
            </li>
            <li className="hover:text-orange-600 hover:text-xl">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <button className=" h-10 px-4 bg-orange-800 hover:bg-orange-600">
          Contact Me
        </button>
      </header>
      <div className="h-1 bg-gray-900"></div>
      <nav>
        <ul className=" flex md:hidden text-center text-lg content-center p-3 bg-black justify-evenly ">
          <li className="hover:text-orange-600 hover:text-xl">
            <a href="/home">Home</a>
          </li>
          <li className="hover:text-orange-600 hover:text-xl">
            <a href="/about">About</a>
          </li>
          <li className="hover:text-orange-600 hover:text-xl">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
