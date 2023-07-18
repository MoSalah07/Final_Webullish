import React from 'react';
import BtnCreate from '../buttons/BtnCreate';

function DynamicToolBar({setIsCreated, title}) {
  return (
    <div className='flex items-center justify-between min-h-[8vh] capitalize mb-8'>
                <div>
        <h3 className='font-semibold text-base sm:text-lg text-primary-text'>{title}</h3>
          </div>
          <div>
        <BtnCreate setIsCreated={setIsCreated} />
          </div>
    </div>
  )
}

export default DynamicToolBar;