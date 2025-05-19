import Cards from './components/func/Cards';
import NavBar from './components/func/NavBar';

export default function Home() {
  return (
    <div className="h-screen w-screen bg-black box-border overflow-auto scroll-smooth">
      <NavBar />
      <Cards />
    </div>
  );
}
