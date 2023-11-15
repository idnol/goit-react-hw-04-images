import { Component, useEffect, useState } from 'react';
import { getImages } from '../api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { LoadButton } from './LoadButton/LoadButton';
import { ErrorMessage } from 'formik';
import { Blocks } from 'react-loader-spinner';
import { AppElement, Inner } from './App.styled';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const imagesArr = await getImages();
        setImages(imagesArr.hits);
        setLoader(true);
        setPages(Math.ceil(imagesArr.totalHits / 12));
      } catch (e) {
        this.setState({
          error: true
        })
      } finally {
        setLoader(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const search = query.split('--');
      try {
        const imagesArr = await getImages(search[1], page);
        setImages(prevImages => [...prevImages, ...imagesArr.hits]);
        setPages(Math.ceil(imagesArr.totalHits / 12));
      } catch (e) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    fetchData();
  }, [query, page])

  const handleSubmit = async query => {
    setQuery(`${Date.now()}--${query.query}`);
    setPages(1);
    setImages([]);
    setLoader(true);
  };

  const handleLoadMore = () => { setPage(page + 1) };

  return (
    <AppElement>
      <Searchbar submit={handleSubmit} />

      <div className='container'>

        {error && <ErrorMessage />}

        {loader && <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
        />}

        <ImageGallery gallery={images} />

        {page < pages && <Inner><LoadButton click={handleLoadMore} /></Inner>}

      </div>

    </AppElement>
  );

}
