import React, { FC } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';

import useCustomForm from '../../components/CustomForm';
import { IBooks } from '../Books/store/types';

import { mapDispatchToProps, mapStateToProps } from './container';

interface IProps extends RouteComponentProps {
  addBook(book: IBooks): void;
}

const initialValues = {
  title: '',
  shortDescription: '',
  thumbnailUrl: '',
  author: '',
  totalPage: 0
};

const AddBook: FC<IProps>  = ({addBook }): JSX.Element => {
  const {
    values,
    handleChange,
    handleSubmit
  } = useCustomForm({
    initialValues,
    onSubmit: value => onSubmit(value)
  });

  // tslint:disable-next-line:no-any
  const onSubmit = (value: any) => {
    if (Object.keys(value.errors).length === 0) {
         addBook(value.values);
    }
  };

  return (
    <>
      <div className='book-form'>
        <form onSubmit={handleSubmit} method='post'>
          <div className='form-item'>
            <label>Book Name</label>
            <input type='text' name='title'
              onChange={handleChange}
              value={values.name} />
          </div>

          <div className='form-item'>
            <label>Description</label>
            <input type='text' name='shortDescription'
             onChange={handleChange}
             value={values.description} />
          </div>

          <div className='form-item'>
            <label>Cover Image</label>
            <input type='text' name='thumbnailUrl'
             onChange={handleChange}
             value={values.coverImage} />
          </div>

          <div className='form-item'>
            <label>Author</label>
            <input type='text' name='author'
             onChange={handleChange}
             value={values.authorName} />
          </div>

          <div className='form-item'>
            <label>Total pages</label>
            <input type='number' name='totalPage'
             onChange={handleChange}
             value={values.totalPage} />
          </div>

          <div className='form-item-submit'>
            <button type='submit' className='submit-button'>Add</button>
          </div>
        </form>
      </div>
      <style>
        {
          `
            .book-form{
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding: 10px;
            }

            .form-item {
              margin-bottom: 20px;
              flex-direction: column;
              justify-content: center;
            }

            .form-item label {
              display: block;
              width: 98%;
              margin-bottom: 5px;
            }

            .form-item input {
              width: 98%;
              height: 25px;
            }

            .submit-button {
              border: none;
              padding: 10px;
              background: #1ea94b;
              color: white;
              font-size: 18px;
              cursor: pointer;
            }

            .form-item-submit i {
              color: white;
            }
          `
        }
      </style>
    </>
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddBook)
);
