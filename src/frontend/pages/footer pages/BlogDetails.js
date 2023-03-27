import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { blogCardData } from './blogCardData';
import phillips from '../../images/philipp-pilz-iQRKBNKyRpo-unsplash.jpg'
import kevin from '../../images/kevin-mueller-aeNg4YA41P8-unsplash.jpg'


const BlogDetails = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const itemsPerPage = 3;
    // eslint-disable-next-line
    const handlePageClick = ({ selected: selectedPage }) => {
        setPageNumber(selectedPage);
    };

    const blogsToDisplay = blogCardData.slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage);

  return (
    <div>
          <div className="bg-dark-gray">
        <div className="mx-auto max-w-5xl text-white py-28 px-2">
            <div className="space-y-4 px-4">
                <h1 className="text-4xl md:text-5xl xl:text-6xl text-center font-bold text-syellow py-4 mx-auto">Blog Post</h1>
                <p className="text-sm mx-auto md:text-base text-center tracking-wide w-[65%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi cumque iure placeat repellendus saepe, iusto libero odio pariatur culpa vel magnam..</p>
            </div>
            <div className="space-y-3 px-4 py-12">
                <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-syellow">6 things to do during March in Uganda</h1>
                <div className="text-xs md:text-sm font-light">
                    <ul className="list-none flex space-x-12">
                        <li><i className="fa-regular fa-calendar-days w-6"></i> 12 June </li>
                        <li><i className="fa-regular fa-user w-6"></i> By Admin </li>
                        <li><i className="fa-regular fa-comment-dots w-6"></i> 12 </li>
                    </ul>
                </div>
            </div>
            <div className="px-1">
                <div className="w-full max-h-96 flex justify-center items-center rounded-2xl overflow-hidden mx-auto">
                    <img src={phillips} alt="jackboat" className="" />
                </div>
            </div>
            <div className="px-4">
            <p className="text-sm py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, optio natus explicabo, sit praesentium accusamus, libero ullam impedit dolore quidem rem quasi nulla nostrum magni eligendi tempora quis dolorem. Aut.</p>
            <p className="text-sm py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, optio natus explicabo, sit praesentium accusamus, libero ullam impedit dolore quidem rem quasi nulla nostrum magni eligendi tempora quis dolorem. Aut. amet consectetur adipisicing elit. Nobis, optio natus explicabo, sit praesentium accusamus, libero ullam impedit dolore quidem rem quasi nulla nostrum magni eligendi tempora quis dolorem. Aut.</p>
            </div>
            <div className="px-1">
                <p className="text-sm py-6 bg-syellow text-black px-6 rounded-md"><span className="font-extrabold">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, optio natus explicabo, sit praesentium accusamus, libero ullam impedit dolore quidem rem quasi nulla nostrum magni eligendi tempora quis dolorem. Aut.<span className="font-extrabold">"</span> <br /> <span className="font-extrabold tracking-wider">-Sam Alabama</span></p>
            </div>
            <div className="px-4">
                <p className="text-sm py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, optio natus explicabo, sit praesentium accusamus, libero ullam impedit dolore quidem rem quasi nulla nostrum magni eligendi tempora quis dolorem. Aut.</p>
                <p className="text-sm py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, optio natus explicabo, sit praesentium accusamus, libero ullam impedit dolore quidem rem quasi nulla nostrum magni eligendi tempora quis dolorem. Aut. amet consectetur adipisicing elit. Nobis, optio natus explicabo, sit praesentium accusamus, libero ullam impedit dolore quidem rem quasi nulla nostrum magni eligendi tempora quis dolorem. Aut.</p>
            </div>
            <div className="px-1"> 
                <div className="px-2 border rounded-md py-4 flex justify-between">
                    <ul className="list-none flex space-x-3">
                        <li className="font-semibold tracking-wider">Tags</li>
                        <li>Tips,</li>
                        <li>Blogs,</li>
                    </ul>
                    <ul className="list-none flex space-x-3">
                        <li className="font-semibold tracking-wider">Shar</li>
                        <li><i className="fa-brands fa-square-facebook"></i></li>
                        <li><i className="fa-brands fa-square-twitter"></i></li>
                        <li><i className="fa-solid fa-share-nodes"></i></li>
                    </ul>
                </div>
            </div>
            <div className="px-2 ">
                <h1 className="text-syellow text-xl font-semibold">Related Post</h1>
                <div className="w-full">
                <ul id="paginated-list" className="cards grid sm:grid-cols-2 md:grid-cols-3 py-4">
                            {blogsToDisplay.map((card, index) => (
                                <Link className="li" key={index}>
                                    <div
                                        className="card my-4 mx-1 sm:mx-4 sm:max-w-[300px] h-[400px] rounded-xl overflow-hidden bg-cover bg-center"
                                        style={{ backgroundImage: `url(${card.image})` }}
                                    >
                                        <div className="h-full flex items-end">
                                            <div className="bg-white text-black space-y-6 px-4 py-3 w-full text-center">
                                                <h1 className="text-base font-bold">{card.title}</h1>
                                                <p className="text-sm font-medium">{card.author} - {card.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </ul>
                </div>
            </div>
        
            <h1 className="text-syellow text-2xl font-bold tracking-wider py-4">Comments</h1>
            <div className="comments px-2">
                <div className="flex flex-col space-y-3 py-4 px-1">
                    <div>
                        <div className="flex items-center space-x-6">
                            <div className="w-20 h-20 flex justify-center items-center rounded-md overflow-hidden">
                                <img src={kevin} alt="kevin-mueller-aeNg4YA41P8-unsplash" />
                            </div>
                            <div className="flex flex-col h-16 justify-between">
                                <h1 className="text-lg text-syellow font-bold tracking-wider">Samanth</h1>
                                <p className="text-base font-light">1 Month</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, velit iusto at voluptatibus voluptates obcaecati culpa a quam accusamus alias quas nisi nesciunt tempora repellat iste error quaerat labore molestiae.</p>
                </div>
            </div>
            <h1 className="text-syellow text-2xl font-bold tracking-wider py-4">Leave a Comment</h1>
            <div className="space-y-2 px-2">
                <p className="text-syellow">Comment</p>
                <textarea name="" id="" cols="" rows="4" className="w-full rounded-none border-2 border-gray-500 focus:ring-0 focus:outline-none focus:border-syellow bg-transparent p-4 resize-none"></textarea>
            </div>
            <div className=" md:flex md:space-x-4">
                <div className="space-y-2 px-2 md:w-[50%]">
                    <p className="text-syellow">Name</p>
                    <input type="text" className="w-full rounded-none border-2 border-gray-500 focus:ring-0 focus:outline-none focus:border-syellow bg-transparent px-4 py-2" />
                </div><div className="space-y-2 px-2 md:w-[50%]">
                    <p className="text-syellow">Email</p>
                    <input type="email" className="w-full rounded-none border-2 border-gray-500 focus:ring-0 focus:outline-none focus:border-syellow bg-transparent px-4 py-2" />
                </div>
            </div>
            <div className="p-2 flex justify-end">
                <button className="py-2 px-12 uppercase text-black font-bold tracking-wider bg-syellow hover:bg-yellow-400 w-fit ">Submit</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default BlogDetails
