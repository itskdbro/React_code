import "./App.css";
import Testimonial from "./Testimonial";

function App() {
  
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col gap-8 justify-center items-center ">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold">Our Testimonial</h2>
        <div className="w-20 h-1 bg-sky-500"></div>
      </div>
      <div>
        <Testimonial />
      </div>
    </div>
  );
}

export default App;
