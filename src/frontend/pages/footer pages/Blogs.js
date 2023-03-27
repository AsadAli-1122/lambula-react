import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { blogCardData } from './blogCardData';
import ReactPaginate from 'react-paginate';



const Blogs = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const itemsPerPage = 9;
    const handlePageClick = ({ selected: selectedPage }) => {
        setPageNumber(selectedPage);
    };

    const blogsToDisplay = blogCardData.slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage);

    return (
        <div>
            <div className="bg-dark-gray">
                <div className="mx-auto max-w-5xl text-white py-28 px-2">
                    <div className="space-y-4 px-4">
                        <h1 className="text-4xl md:text-5xl xl:text-6xl text-center font-bold text-syellow py-4 mx-auto">Latest Blog</h1>
                        <p className="text-sm mx-auto md:text-base text-center tracking-wide w-[65%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi cumque iure placeat repellendus saepe, iusto libero odio pariatur culpa vel magnam..</p>
                    </div>
                    <main className="px-1 relative pb-16">
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

                        <ReactPaginate
                            previousLabel={<i class="fa-solid fa-chevron-left"></i>}
                            nextLabel={<i className="fa-solid fa-chevron-right"></i>}
                            pageCount={Math.ceil(blogCardData.length / itemsPerPage)}
                            onPageChange={handlePageClick}
                            containerClassName={'pagination w-full flex justify-center item-center space-x-6'}
                            activeClassName={'active text-syellow font-bold'}
                            previousClassName={'prev'}
                            nextClassName={'next'}
                            pageClassName={'page'}
                            breakClassName={'break-me'}
                            previousLinkClassName={'prev-link px-3 py-1 rounded-lg hover:bg-syellow hover:text-black'}
                            nextLinkClassName={'next-link px-3 py-1 rounded-lg hover:bg-syellow hover:text-black'}
                            pageLinkClassName={'page-link px-3 py-1 rounded-lg hover:bg-syellow hover:text-black'}
                            breakLinkClassName={'break-link px-3 py-1 rounded-lg hover:bg-syellow hover:text-black'}
                        />
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Blogs

