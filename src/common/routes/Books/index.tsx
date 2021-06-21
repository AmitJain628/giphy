import React, { useEffect } from 'react';
import { IBooks } from '@books/store/types';
import { Link, RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Book from '@books/Book';

import { mapDispatchToProps, mapStateToProps } from './container';
import { StyledSelector } from './style';

export interface IProps extends RouteComponentProps {
    books: IBooks[];
    fetchBooks(): void;
}

const Books: React.FC<IProps> = ({ books, fetchBooks }): JSX.Element => {
    useEffect(() => {
        getBooks();
      }, []);

    const getBooks = async () => {
        // tslint:disable-next-line
        fetchBooks();
    };

    return (
         <>
         <StyledSelector>
          <Link to='/add' className='menu-item'><span className='menu-text'>Add</span></Link>
          </StyledSelector>
         <div className='books-container'>
           {books.map(book => <Book key={book.id} book={book} />)}
            <style>
        {
          `
            .books-container {
              text-align: center;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-evenly;
              align-items: center;
              padding: 10px;
            }

            .form-search {
              display: flex;
              justify-content: center;
              margin-bottom: 40px;
            }

            .form-search input {
              height: 45px;
              border-radius: 50px;
              border: 1px solid #f2f2f2;
            }

            .form-search input[type="search"] {
              box-sizing: border-box;
              padding-left: 20px;
              box-shadow: 3px -3px 15px -6px #ccc;
            }

            .form-search input:outline {
              focus: none;
            }
          `
        }
      </style>
         </div>
         </>
   );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Books)
);
