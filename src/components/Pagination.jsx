import React from 'react'

const Pagination = ({pageNumber, paginate, next, prev, currentPage, showFilter, lastPage}) => {
  return (
    <nav aria-label="Page navigation example" className={`${showFilter.length > 0 ? "hidden" : "py-1 sm:py-4" }`}>
      <ul className="inline-flex -space-x-px text-[12px] sm:text-xl">
        <li className='cursor-pointer'
          onClick={prev}>
          <a  className={`flex items-center justify-center px-2 sm:px-3 h-6 sm:h-8 ms-0 leading-tight bg-white border border-e-0 border-gray-300 rounded-s-lg ${currentPage === 1 ? "cursor-not-allowed text-gray-300" : "cursor-pointer text-gray500"}`}>Previous</a>
        </li>
        {pageNumber.map((item, dindex) => (
          <li className='cursor-pointer' 
            onClick={()=>paginate(item)}>
            <a className={`${currentPage == dindex + 1 ? "flex items-center justify-center px-2 sm:px-3 h-6 sm:h-8 leading-tight text-white bg-black border border-gray-300" : "flex items-center justify-center px-2 sm:px-3 h-6 sm:h-8 leading-tight text-gray-500 bg-white border border-gray-300" }`}>{item + 1}</a>
          </li>
        ))}
        <li className='cursor-pointer'
          onClick={next}>
          <a className={`flex items-center justify-center px-2 sm:px-3 h-6 sm:h-8 leading-tight bg-white border border-gray-300 rounded-e-lg ${currentPage >= pageNumber.length ? "cursor-not-allowed text-gray-300" : "cursor-pointer text-gray500" }`}>Next</a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination