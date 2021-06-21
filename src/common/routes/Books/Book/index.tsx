import React, { FC } from 'react';
import { IBooks } from '@books/store/types';

import { StyledSelector } from './style';

interface IProps {
    book: IBooks;
}

const Book: FC<IProps> = ({book}): JSX.Element => {

    const {thumbnailUrl, title, shortDescription, longDescription, pageCount, authors} = book;

    return (
      <StyledSelector>
        <div className='book-image'>
          <img src={thumbnailUrl} height='200' alt='Book thumbnail' />
        </div>
        <div className='book-details'>
          <b className='book-title'>{title}</b>
          <p className='book-description'>{shortDescription || longDescription}</p>
          <p className='book-page-count'>Total pages: {pageCount}</p>
          <p className='book-author'>By: {authors}</p>
        </div>
        <style>
          {
            `
              .edit-button i {
                color: white;
              }

              .delete-button i {
                color: white;
              }

              .button-groups {
                display: flex;
              }
            `
          }
        </style>
      </StyledSelector>
    );
};

export default Book;
