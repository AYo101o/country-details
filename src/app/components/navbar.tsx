import { SunMoon, Globe, ListFilter } from "lucide-react";


export default function Navbar() {

  const language = "EN";

  return (
    <div className="flex flex-col text-white">
      <nav className="flex justify-between mb-5">
        <h1>Nation Pulse</h1>
        <SunMoon />
      </nav>
        <input type="text" className="rounded-md border border-white p-3 m-3" placeholder="Search Countries ..."/>
        <div className="flex justify-between m-5">
          <button className="flex bg-gray-900 p-3 rounded-3xl"><span className="mr-3"><Globe/></span> {language}</button>
          <button className="flex bg-gray-900 p-3 rounded-3xl"><span className="mr-3"><ListFilter/></span> Filter</button>
        </div>
    </div>
  );
}
