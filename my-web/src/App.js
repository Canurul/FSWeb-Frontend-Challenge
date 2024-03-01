import ModeSwitch from "./components/ModeSwitch";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="site-container mx-auto max-w-screen-lg mt-5">
      <header className="w-full">
        <ModeSwitch/>
      </header>
      <hr className="border-t border-gray-300 my-8" />
      <main className="mx-auto mt-20 w-full">
        <Introduction/>
      </main>
      <hr className="border-t border-gray-300 my-8" />
      <Skills/>
      <hr className="border-t border-gray-300 my-8" />
      <footer></footer>
    </div>
  );
}