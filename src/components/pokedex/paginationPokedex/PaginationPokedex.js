import React, { useState } from 'react'
import Pagination from 'react-paginating'
import './paginationPokedexStyle.css'

const PaginationPokedex = ({ setOffset, limit, pageCount, pokeStore, total }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    setOffset(((page - 1) * limit))
  }

  return (
    <Pagination
      className='myPag'
      total={total}
      limit={limit}
      pageCount={pageCount}
      currentPage={currentPage}
    >
      {({
        pages,
        currentPage,
        hasNextPage,
        hasPreviousPage,
        previousPage,
        nextPage,
        totalPages,
        getPageItemProps
      }) => (
        <div>
          <button
            className='pagBtn'
            {...getPageItemProps({
              pageValue: 1,
              onPageChange: handlePageChange
            })}
          >
            First
          </button>
          {hasPreviousPage && (
            <button
              className='pagBtn'
              {...getPageItemProps({
                pageValue: previousPage,
                onPageChange: handlePageChange
              })}
            >
              {'<'}
            </button>
          )}
          {pages.map(page => {
            return (
              <button
                className='pagBtn'
                {...getPageItemProps({
                  pageValue: page,
                  key: page,
                  style: currentPage === page ? { backgroundColor: '#FFC107', color: '#000' } : null,
                  onPageChange: handlePageChange
                })}
              >
                {page}
              </button>
            )
          })}
          {hasNextPage && (
            <button
              className='pagBtn'
              {...getPageItemProps({
                pageValue: nextPage,
                onPageChange: handlePageChange
              })}
            >
              {'>'}
            </button>
          )}
          <button
            className='pagBtn'
            {...getPageItemProps({
              pageValue: totalPages,
              onPageChange: handlePageChange
            })}
          >
            Last
          </button>
        </div>
      )}
    </Pagination>
  )
}

export default PaginationPokedex
