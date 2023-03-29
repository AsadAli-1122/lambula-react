import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { blogCardData } from './blogCardData';
import kevin from '../../images/kevin-mueller-aeNg4YA41P8-unsplash.jpg'


const BlogDetails = () => {
    const { id } = useParams();
    const blog = blogCardData.find((item) => item.id === id);

    const [pageNumber, setPageNumber] = useState(0);
    const itemsPerPage = 3;
    // eslint-disable-next-line
    const handlePageClick = ({ selected: selectedPage }) => {
        setPageNumber(selectedPage);
    };

    const blogsToDisplay = blogCardData.slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage);

    const leaveComment = (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');

        if (token) {
            const formData = new FormData(e.target);
            formData.append('token', token);

            // Send form data to server using fetch or Axios
            // ...

            const errorMessage = document.getElementById('comment-error-message');
            errorMessage.style.display = 'none';
            
            e.target.reset();
            window.alert('Comment submitted!');
        } else {
            const errorMessage = document.getElementById('comment-error-message');
            errorMessage.textContent = 'You need to log in before commenting.';
            errorMessage.style.display = 'block';
        }
    }



    return (
        <div>
            <div className="bg-dark-gray">
                <div className="mx-auto max-w-5xl text-white py-28 px-2">
                    <div className="space-y-4 px-4">
                        <h1 className="text-4xl md:text-5xl xl:text-6xl text-center font-bold text-syellow py-4 mx-auto">Blog Post</h1>
                        <p className="text-sm mx-auto md:text-base text-center tracking-wide w-[65%]">{blog.topP}</p>
                    </div>
                    <div className="space-y-3 px-4 py-12">
                        <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-syellow">{blog.title}</h1>
                        <div className="text-xs md:text-sm font-light">
                            <ul className="list-none flex space-x-12">
                                <li><i className="fa-regular fa-calendar-days w-6"></i> {blog.date} </li>
                                <li><i className="fa-regular fa-user w-6"></i> By {blog.author} </li>
                                <li><i className="fa-regular fa-comment-dots w-6"></i> 12 </li>
                            </ul>
                        </div>
                    </div>
                    <div className="px-1">
                        <div className="w-full max-h-96 flex justify-center items-center rounded-2xl overflow-hidden mx-auto">
                            <img src={blog.image} alt="/" className="" />
                        </div>
                    </div>
                    <div className="px-4">
                        <p className="text-sm py-6">{blog.p1}</p>
                        <p className="text-sm py-6">{blog.p2}</p>
                    </div>
                    <div className="px-1">
                        <p className="text-sm py-6 bg-syellow text-black px-6 rounded-md">
                            <q className='font-semibold'>{blog.mainP}</q>
                            <br />
                            <span className="font-extrabold tracking-wider">-{blog.guide}</span></p>
                    </div>
                    <div className="px-4">
                        <p className="text-sm py-6">{blog.p3}</p>
                        <p className="text-sm py-6">{blog.p4}</p>
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
                                    <Link to={`/blogs/blog-details/${card.id}`} className="li" key={index}>
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
                    <form onSubmit={leaveComment} >

                        <div className="space-y-2 px-2">
                            <p className="text-syellow">Comment</p>
                            <textarea name="" id="" cols="" rows="4" className="w-full rounded-none border-2 border-gray-500 focus:ring-0 focus:outline-none focus:border-syellow bg-transparent p-4 resize-none"></textarea>
                        </div>
                        <div id="comment-error-message" className="text-red-500 text-sm mb-2 px-4" style={{ display: 'none' }}>Error message</div>
                        <div className="p-2 flex justify-end">
                            <button type='submit' className="py-2 px-12 uppercase text-black font-bold tracking-wider bg-syellow hover:bg-yellow-400 w-fit ">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails
