import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <h1 className="mt-10 text-4xl text-center text-purple-600">
          I'm Shafayat, another Astronaut from Apollo team at Programming Hero.
        </h1>
        <h2 className="mt-5 text-xl text-center">
          This a template for redux with typescript environment.
        </h2>
      </div>
      <div className="mt-20 flex justify-center items-center">
        <div className="space-x-10 border-2 border-purple-600 rounded-md p-5 bg-slate-400">
          <button
            onClick={() => dispatch(decrement(1))}
            className="px-3 py-2 text-xl font-semibold bg-red-600 text-white rounded-md"
          >
            decrement
          </button>
          <span className="border rounded-md px-5 py-2 text-2xl font-semibold">
            {count}
          </span>
          <button
            onClick={() => dispatch(increment(1))}
            className="px-3 py-2 text-xl font-semibold bg-green-600 text-white rounded-md"
          >
            increment
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
