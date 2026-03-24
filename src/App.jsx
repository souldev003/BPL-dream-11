import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-2xl bg-red-400">Hello</h1>

      <div className="avatar">
        <div className="mask mask-heart w-24">
          <img src="https://img.daisyui.com/images/profile/demo/distracted3@192.webp" />
        </div>
      </div>
      <div className="avatar">
        <div className="mask mask-squircle w-24">
          <img src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp" />
        </div>
      </div>
      <div className="avatar">
        <div className="mask mask-hexagon-2 w-24">
          <img src="https://img.daisyui.com/images/profile/demo/distracted2@192.webp" />
        </div>
      </div>
    </>
  );
}

export default App;
