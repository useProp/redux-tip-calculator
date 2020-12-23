import { useSelector } from 'react-redux';
import { selectPerPerson, selectSplit, selectTip, selectTotal } from '../store/selectors';

export const TipResult = () => {
  const total = useSelector(selectTotal);
  const tip = useSelector(selectTip);
  const perPerson = useSelector(selectPerPerson);
  const split = useSelector(selectSplit);

  return (
    <div className='mt-2 p-4 shadow-lg border text-indigo-800 w-full rounded-lg'>
      <div className='flex justify-between'>
        <span>Tip</span>
        <span>{tip}</span>
      </div>

      <div className='flex justify-between'>
        <span>Total</span>
        <span>{total}</span>
      </div>

      {
       split > 1
       &&
       <div className='flex justify-between'>
          <span>Per Person</span>
          <span>{perPerson}</span>
        </div>
      }
    </div>
  );
};
