import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../features/counter/counterSlice';

const Home = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  console.dir(dispatch)
  return (
    <div className="mt-12 flex justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 gap-5 items-center flex flex-col">
        <div className="text-6xl font-extrabold text-gray-800">{count}</div>
        <div className='flex gap-3 justify-center items-center'>
          <button
            className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-lg transition"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>

          <button
            className="px-6 py-3 bg-red-700 hover:bg-red-800 text-white rounded-lg text-lg transition"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
