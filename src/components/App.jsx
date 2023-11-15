import { Component } from 'react';
import { getImages } from '../api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { LoadButton } from './LoadButton/LoadButton';
import { ErrorMessage } from 'formik';
import { Blocks } from 'react-loader-spinner';
import { AppElement, Inner } from './App.styled';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    error: false,
    loader: false,
    pages: 0
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      const query = this.state.query.split('--');
      try {
        const images = await getImages(query[1], this.state.page);

        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
          pages: Math.ceil(images.totalHits / 12)
        }));
      } catch (e) {
        this.setState({
          error: true
        })
      } finally {
        this.setState({
          loader: false
        })
      }
    }
  }

  async componentDidMount(prevProps, prevState) {
    try {
      const images = await getImages();

      this.setState({
        images: images.hits,
        loader: true,
        pages: Math.ceil(images.totalHits / 12)
      })
    } catch (e) {
      this.setState({
        error: true
      })
    } finally {
      this.setState({
        loader: false
      })
    }
  }

  handleSubmit = async query => {
    this.setState({
      query: `${Date.now()}--${query.query}`,
      page: 1,
      images: [],
      loader: true
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {

    return (
      <AppElement>
        <Searchbar submit={this.handleSubmit} />

        <div className='container'>

          {this.state.error && <ErrorMessage />}

          {this.state.loader && <Blocks
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
          />}

          <ImageGallery gallery={this.state.images} />

          {this.state.page < this.state.pages && <Inner><LoadButton click={this.handleLoadMore} /></Inner>}

        </div>

      </AppElement>
    );
  }
}
