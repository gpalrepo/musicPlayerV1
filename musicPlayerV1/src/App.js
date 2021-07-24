import MusicPlayer from "./MusicPlayer";

let chapters = [
  {
    time: 10,
    caption: "Lorem ipsum dorem",
  },
  {
    time: 30,
    caption: "Kara ipsum dorem",
  },
  {
    time: 50,
    caption: "Dara ipsum dorem",
  },
  {
    time: 70,
    caption: "Para ipsum dorem",
  },

  {
    time: 120,
    caption: "Para ipsum dorem",
  },

  {
    time: 190,
    caption: "Para ipsum dorem",
  },
];

function App() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-300">
      <MusicPlayer chapters={chapters} />
    </div>
  );
}

export default App;
