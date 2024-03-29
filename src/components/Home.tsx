import React from "react";
import listings from "../dayda/listings";
import { Link } from "react-router-dom";




function Home() {
    return (
        <section>
            
            <div className="w-full bg-cover bg-center h-96" style={{backgroundImage: `url("https://www.redfin.com/blog/wp-content/uploads/2021/06/Views-Napa.jpg")` }}>
                <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">
                        <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">Really Scuffed Airbnb Type Website</h1>
                        <form className="max-w-md mx-auto">   
                            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full mt-2 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Names, Places..." required />
                                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <ul className="flex items-centermt mt-1">
                    <li className="block py-2 px-3 hover:bg-gray-300">
                        <button className="hover:bg-gray-300">All Listings</button>
                    </li>
                    <li className="blcok py-2 px-3 hover:bg-gray-300">
                        <button className="hover:bg-gray-300">My Listings</button>
                    </li>
                </ul>
            </div>

            <div className="mx-20">
                <ul className="flex flex-wrap items-center ">
                    {listings.map((listing) => ( 
                    <li className="my-5 mx-2">
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="">
                                <img className="rounded-t-lg" src={listing.images[0]} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{listing.title}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: {listing.location}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Contacts: {listing.contacts}</p>
                                <Link key={listing.id} to={`/listings/${listing.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </Link>
                            </div>
                    </div>
                    </li>
                    ))}
                </ul>
                
            </div>


        </section>
    );
}

export default Home;