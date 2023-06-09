import useNumberStore from "./store/createStore";
import "./App.css";

function App() {
	const count = useNumberStore((state) => state.count);

	const incrementHandler = useNumberStore((state) => state.increase);

	const decrementHandler = useNumberStore((state) => state.decrease);

	const setCount = useNumberStore((state) => state.setCount);

	return (
		<>
			<div className="App">
				<h1>Count: {count}</h1>

				<button onClick={incrementHandler}>Increment +</button>
				<br />
				<button onClick={decrementHandler}>Decrement -</button>
				<br />

				<input
					type="number"
					onChange={(e) => setCount(e.target.value)}
				/>
			</div>
		</>
	);
}

export default App;
