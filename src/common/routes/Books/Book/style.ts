import styled from 'styled-components';

export const StyledSelector = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  width: 500px;
  display:flex;

.book-image {
  // background: #262c26
}

.book-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.book-title {
  margin-top: 5px;
}

.book-page-count {
  font-size: 12px;
  margin-bottom: 5px;
}

.book-author {
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;
}

.book-description {
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  line-height: 1.5em;
  height: 3em;
  overflow: hidden;
  margin: 20px;
  margin-top: 20px;
}`;
