import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate}) => {
    
    const pageNumbers =[];

    for(let i=1; i<=Math.ceil(totalPosts/ postsPerPage); i++)
    {
        pageNumbers.push(i);
    }
    
    return (
        <nav>
            <div>
                <div className="ui fluid container">
                    {/* <button className="ui icon button"> */}
                        
                        {pageNumbers.map(number =>(
                            <>
                                {/* <i aria-hidden="true" class="heart icon"></i> */}
                                <button key={number} className="ui black icon button">
                                    <a onClick={() => paginate(number)} href="!#" className='pagelink'>{number}</a>
                                </button>
                            </>
                            ))}
                    {/* </button> */}
                </div>
            </div>
            
        </nav>
    )
}

export default Pagination