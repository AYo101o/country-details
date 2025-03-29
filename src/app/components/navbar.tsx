import { SunMoon, Search } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex flex-col text-white">
      <nav className="flex justify-between mb-5">
        <h1>Nation Pulse</h1>
        <SunMoon />
      </nav>
        <input type="text" className="rounded-md border border-white p-3 m-3" placeholder="Search Countries ..."/>
    </div>
  );
}
