import React from 'react';
function App() {
  return (
    <div className='bg-sky-200 w-full h-full'>
  <div className='bg-blue-400 text-white py-4 pl-4 m-1 rounded-md sticky top-0'>
    <h1 className='font-bold font-mono text-xl'>Nova Courses</h1>
  </div>
  <div className='text-center p-12'>

  <h1 className=' text-3xl font-thin font-mono'>Learn. <span className='font-extrabold text-blue-400'>Coding.</span> Now.</h1>
  <p>Learn Coding in 5-Minute Courses</p>
  <button className='bg-blue-700 p-2 px-7 text-white rounded-full hover:bg-sky-400 hover:text-black'>Start Now</button>
  </div>
    </div>
  );
}

export default App;
