import { ActionTypes } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectBill, selectPercentage, selectSplit } from '../store/selectors';

export const TipInput = () => {
  const bill = useSelector(selectBill);
  const percentage = useSelector(selectPercentage);
  const split = useSelector(selectSplit);

  const dispatch = useDispatch();

  return (
    <div className='mb-2 p-4 w-full shadow-lg border rounded-lg uppercase bg-gray-800'>
      <div>
        <div className='text-white'>Bill</div>
        <input
          className='bg-gray-800 w-full text-white text-2xl'
          type='text'
          value={bill}
          onChange={(e) => {
            !Number.isNaN(Number(e.target.value)) && dispatch({
              type: ActionTypes.BillChange,
              payload: e.target.value,
            })
          }}
        />
      </div>

      <div>
        <div className='text-white'>Tip %</div>
        <input
          className='bg-gray-800 w-full text-white text-2xl'
          type='text'
          value={percentage}
          onChange={(e) => {
            !Number.isNaN(Number(e.target.value)) && dispatch({
              type: ActionTypes.PercentageChange,
              payload: e.target.value,
            })
          }}
        />
      </div>

      <div>
        <div className='text-center text-white'>Split</div>
        <div className='flex justify-between items-center'>
          <button
            className='w-1/3 bg-indigo-400 rounded text-2xl text-gray-800'
            onClick={() => {
              dispatch({
                type: ActionTypes.SplitIncrement
              })
            }}
          >+</button>
          <span className='text-white'>{split}</span>
          <button
            className='w-1/3 bg-indigo-400 rounded text-2xl text-gray-800'
            onClick={() => {
              dispatch({
                type: ActionTypes.SplitDecrement
              })
            }}
          >-</button>
        </div>
      </div>
    </div>
  );
};
