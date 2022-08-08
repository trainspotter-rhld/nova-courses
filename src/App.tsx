import React from 'react';
import { Card } from './components/PolyUI';
function App() {
  return (
    <div className='bg-sky-200 w-full h-full'>
  <div className='bg-blue-400 text-white py-4 pl-4 m-1 rounded-md sticky top-0'>
    <h1 className='font-bold font-mono text-xl'>Nova Courses</h1>
  </div>
  <div className='text-center p-12'>

  <h1 className=' text-3xl font-thin font-mono'>Learn.<span className='font-extrabold text-blue-400'>Coding.</span>Now<span className='text-green-600'>();</span></h1>
  <p>Learn Coding in 5-Minute Courses</p>
  <button className='bg-blue-700 p-2 px-7 text-white rounded-full hover:bg-sky-400 hover:text-black'>Start Now</button>
  </div>
  <div className="grid grid-rows-2 grid-cols-2 px-9">
  <Card title='Simple To Use' text='Nova Courses is a very simple way to learn coding'/>
  <Card title='Fullstack Guaranteed' text='whith Nova Courses you can learn to make a Full-stack App!'/>
  <Card title='100% Free*' text='Nova Social Is 100% Free for now!'/>
  <Card title='Try Now' text='Try now and learn coding!'/>
  </div>
  <footer>
    <h1>© 2022 Nova Systems Inc.</h1>
    <h1 className='text-right'>ToS</h1>
  </footer>
  </div>
  );
}

export default App;
