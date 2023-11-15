import { Formik } from 'formik';
import { SearchButton, Field, Form, SearchStyled } from './Search.styled';
import { IconContext } from "react-icons";
import { IoSearch } from 'react-icons/io5';

export const Searchbar = ({submit}) => {
  return <Formik
    initialValues = {{
      query: '',
    }}
    onSubmit={(values, actions) => {
      actions.resetForm();
      submit(values);
    }}>
    <SearchStyled className="searchbar">
      <Form className="form">
        <SearchButton type="submit" className="button">

          <span className="button-label">
            <IconContext.Provider value={{ color: "blue", size: '24' }}>
              <IoSearch />
            </IconContext.Provider>
          </span>
        </SearchButton>
          <Field
            name="query"
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
      </Form>
    </SearchStyled>
  </Formik>

}
