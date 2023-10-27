import React from 'react'
import { Link } from 'react-router-dom'
import { VictoryPie } from "victory-pie";

const myData = [
    { x: "Positive", y: 900 },
    { x: "Negative", y: 400 },
    { x: "Neutral", y: 300 },
  ];

export default function Dashboard() {
  return (
    <div className='w-full flex flex-col sm:flex-row justify-between space-y-120 sm:space-y-0'>
        <div className='border-b-2 w-full h-11 sm:h-16'>
            <div className='flex flex-row justify-between items-center mx-2 sm:mx-10 my-2 sm:my-4'>
                <div>
                    <h1 className='capitalize sm:text-xl font-bold'>dashboard</h1>
                </div>
                <div>
                    <ul className='flex flex-row justify-between space-x-2 sm:space-x-8 capitalize text-sm font-semibold text-gray-500'>
                        <li className='hover:underline'><Link to={""}>reader</Link></li>
                        <li className='hover:underline'><Link to={""}>analyst</Link></li>
                        <li className='hover:underline'><Link to={""}>category</Link></li>
                    </ul>
                </div>
            </div>
            <div className='border-b-2 w-full h-56 sm:h-16 capitalize'>
                <ul className='flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 sm:px-10 sm:py-5 pt-4 text-sm text-center font-semibold text-gray-500'>
                    <li className='hover:underline'><Link to={""}>beta: automated sentiment</Link></li>
                    <li className='hover:underline'><Link to={""}>sources</Link></li>
                    <li className='hover:underline'><Link to={""}>influencers</Link></li>
                    <li className='hover:underline'><Link to={""}>sentiments</Link></li>
                    <li className='hover:underline'><Link to={""}>mentions</Link></li>
                    <li className='hover:underline'><Link to={""}>topics</Link></li>
                    <li className='hover:underline'><Link to={""}>tags</Link></li>
                </ul>
            </div>
            <div className='flex flex-col sm:flex-row justify-between border-b-2 w-full sm:h-20 items-center sm:px-10 sm:py-5 capitalize bg-slate-300 space-y-4 sm:space-y-0 py-4'>
                <div className='sm:text-xl font-semibold'>
                    <h2>total number of mentions: <span className='text-blue-800'>0</span></h2>
                </div>
                <div className='flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-5 w-1/2'>
                    <div className='w-full'>
                        <select className='border-2 w-full py-1 rounded'>
                            <option disabled selected value="">Activities</option>
                            <option>positive</option>
                            <option>negative</option>
                            <option>neutral</option>
                        </select>
                    </div>
                    <div className='bg-green-700 hover:bg-green-600 py-2 text-center w-full rounded text-white transition duration-300 ease-in-out'>
                        <Link>
                            <p className='capitalize text-sm font-semibold w-full'><i>icon</i> compare</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='border-b-2 w-full h-12 sm:px-10 sm:py-3 capitalize'>
                <div className='font-semibold'>
                    <p className='capitalize text-sm text-gray-500 text-center py-3 sm:py-0'><i>icon</i> automated sentiment distribution</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className=''>
                    <VictoryPie 
                        data={myData}
                        colorScale={["#64BAA8", "#DB705F", "#777677"]}
                        radius={170}
                        width={500}
                    />
                </div>
            </div>
        </div>
        <div className='sm:border-l-2 sm:w-1/3 h-screen sm:py-4 sm:px-4 mx-4 sm:mx-0 py-28'>
            <div className='border-b-2 sm:h-12 text-center py-2'>
                <p><span className='font-semibold'>0</span> Mentions in the selected time</p>
            </div>
            <div className='border-b-2 pb-4'>
                <div className='my-4'>
                    <h2 className='uppercase font-semibold mb-4'>set date range</h2>
                    <div className='flex flex-col sm:flex-row justify-between items-center'>
                        <div className='border-2 border-black rounded'>
                            <input 
                                type="date" 
                                className='px-2 py-1'
                            />
                        </div>
                        -
                        <div className='border-2 border-black rounded'>
                            <input 
                                type="date" 
                                className='px-2 py-1'
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className='uppercase font-semibold mb-2'>sort by</h2>
                    </div>
                    <div className='capitalize'>
                        <ul>
                            <li><input type='checkbox' className='mr-2'/>time</li>
                            <li><input type='checkbox' className='mr-2'/>reach</li>
                            <li><input type='checkbox' className='mr-2'/>virality</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='my-4 border-b-2 pb-2'>
                <div>
                    <h2 className='uppercase font-semibold mb-2'>show only</h2>
                </div>
                <div className='capitalize'>
                    <ul>
                        <li><input type='checkbox' className='mr-2'/>web</li>
                        <li><input type='checkbox' className='mr-2'/>facebook</li>
                        <li><input type='checkbox' className='mr-2'/>twitter</li>
                    </ul>
                </div>
                <div className='my-4'>
                    <Link className='font-semibold mb-2 text-gray-400 text-sm'>Show more</Link>
                </div>
            </div>
            <div className='my-4'>
                <div>
                    <h2 className='uppercase font-semibold mb-2'>options</h2>
                </div>
                <div className='flex flex-col justify-start space-y-2'>
                    <Link to={""} className='w-44'>Group similar mentions</Link>
                    <Link to={""} className='w-24'>Show images</Link>
                </div>
            </div>

        </div>
    </div>
  )
}
