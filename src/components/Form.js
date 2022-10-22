import styled from "@emotion/styled";
import { useState } from "react";
import { useAuth } from "../context/auth-context";
import Button from "./Button";
import Input, { Error } from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CustomButton = styled(Button)`
  // @media (min-width: 600px) {
  //   width: fit-content;
  // }
`;


function Form({ product, modal }) {
  const { create, update } = useAuth();
  const [dataForm, setForm] = useState({
    title: product ? product.title : '',
    price: product ? product.price : '',
    description: product ? product.description : '',
    image: product ? product.image : '',
    category: product ? product.category : '',
  });

  const [errors, setErrors] = useState({})

  function validationForm(form) {
    let errors = {}
    if (!form.title.trim()) {
      errors.title = "El campo es requerido";
    }

    if (!form.price.trim()) {
      errors.price = "El campo es requerido";
    }

    if (!form.category.trim()) {
      errors.category = "El campo es requerido";
    }

    if (!form.description.trim()) {
      errors.description = "El campo es requerido";
    }

    return errors;
  }

  function handleFormChange(event) {
    const { type, value, id } = event.target;
    if (type === 'file') {
      const reader = new FileReader();
      console.log(reader)
      reader.onload = () => {
        if (reader.readyState === 2) {
          setForm({ ...dataForm, [id]: reader.result })
        }
      }
      reader.readAsDataURL(event.target.files[0])
    } else {
      setForm({ ...dataForm, [id]: value });
    }
  }


  function handleBlur(event) {
    handleFormChange(event);
    setErrors(validationForm(dataForm))
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(product.id)
    console.log(dataForm)
    product ? update(product.id, dataForm) : create(dataForm)
    modal(false)
  }

  console.log(product)
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <Select
          id="category"
          value={dataForm.category}
          onChange={handleFormChange}
        />
        <Input
          placeholder="Name of product"
          id="title"
          data={product}
          value={dataForm.title}
          onChange={handleFormChange}
          onBlur={handleBlur}
          error={errors.title}
        />
        <Input
          type="number"
          placeholder="Price"
          id="price"
          value={dataForm.price}
          onChange={handleFormChange}
          onBlur={handleBlur}
          error={errors.price}
        />
        <Textarea
          placeholder="Description"
          id="description"
          value={dataForm.description}
          onChange={handleFormChange}
          onBlur={handleBlur}
          error={errors.description}
        />
        <Input
          type="file"
          accept="image/*"
          label="File upload"
          placeholder="Image"
          id="image"
          file={dataForm.image}
          onChange={handleFormChange}
          onBlur={handleBlur}
          error={errors.image}
        />
        {errors && <Error>{errors.form}</Error>}
        <CustomButton isFullWidth>{product ? 'Update' : 'Add'}</CustomButton>
      </StyledForm>
    </>
  )
}

export default Form;