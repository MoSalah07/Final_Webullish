'use client';
import React, {useState} from 'react';
// Components
import CreateLive from '@/app/components/live/CreateLive';

function Live() {
  const [isCreated, setIsCreated] = useState(false);
  return (
    <div>
      <CreateLive setIsCreated={setIsCreated} />
    </div>
  )
}

export default Live;