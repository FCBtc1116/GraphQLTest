import { Popover, Menu, Transition } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useState, Fragment } from 'react';

export default function PersonComponent({
  fullName,
  birthYear,
  gender,
  eyeColor,
  hairColor,
  name,
  population,
  diameter,
}) {
  let [referenceElement, setReferenceElement] = useState();
  let [popperElement, setPopperElement] = useState();
  let { styles, attributes } = usePopper(referenceElement, popperElement);
  return (
    <div
      className='max-w-sm rounded overflow-hidden shadow-lg text-center'
      style={{ height: '300px' }}
    >
      <div className='font-bold text-xl mb-2 py-4 mt-3'>{fullName}</div>
      <div className='flex justify-center'>
        <p className='font-bold'>Birth Year : </p>
        {birthYear}
      </div>
      <div className='flex justify-center'>
        <p className='font-bold'>Gender : </p>
        {gender}
      </div>
      <div className='flex justify-center'>
        <p className='font-bold'>Eye Color : </p>
        {eyeColor}
      </div>
      <div className='flex justify-center'>
        <p className='font-bold'>Hair Color : </p>
        {hairColor}
      </div>
      <Popover className='relative'>
        <Popover.Button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          style={{ marginTop: '10px' }}
        >
          Solutions
        </Popover.Button>

        <Popover.Panel
          className='z-10'
          style={{
            background: 'white',
          }}
          {...attributes.popper}
        >
          <div className='flex justify-center'>
            <p className='font-bold'>Name : </p>
            {name}
          </div>
          <div className='flex justify-center'>
            <p className='font-bold'>Population : </p>
            {population}
          </div>
          <div className='flex justify-center'>
            <p className='font-bold'>Diameter : </p>
            {diameter}
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  );
}
