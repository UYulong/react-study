import "./app.css";

const name = "React";

const songs = [
  { id: 1, name: "痴心绝对" },
  { id: 2, name: "像我这样的人" },
  { id: 3, name: "南山南" },
];

const flag = true;

const styleObj = {
  fontWeight: "bold",
};

function App() {
  return (
    <div style={styleObj}>
      hello {name}
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.name}</li>
        ))}
      </ul>
      <p style={{ color: "red", fontSize: "30px" }}>
        {flag ? "hello react" : "hello vue"}
      </p>
      <span className="box">外部样式</span>
    </div>
  );
}

export default App;
