import styled from "@emotion/styled";
import { useState } from "react";
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
  @media (min-width: 600px) {
    width: fit-content;
  }
`

function Form({ options, product, onCreate, onUpdate }) {
  const [dataForm, setForm] = useState({
    title: product ? product.title : '',
    price: product ? product.price : '',
    description: product ? product.description : '',
    image: product ? product.image : '',
    category: product ? product.category : '',
  });

  const [errors, setErrors] = useState({})

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
    //setErrors(validationForm(dataForm))
  }

  function handleSubmit(event) {
    event.preventDefault();
    product ? onUpdate(product.id, dataForm) : onCreate(dataForm)
  }

  console.log(product)
  console.log(dataForm)

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <Select
          id="category"
          value={dataForm.category}
          onChange={handleFormChange}
          options={options}
        />
        <Input
          placeholder="Name of product"
          id="title"
          data={product}
          value={dataForm.title}
          onChange={handleFormChange}
          onBlur={handleBlur}
          error={errors.celular}
        />
        <Input
          type="number"
          placeholder="Price"
          id="price"
          value={dataForm.price}
          onChange={handleFormChange}
          onBlur={handleBlur}
          error={errors.placa}
        />
        <Textarea
          placeholder="Description"
          id="description"
          value={dataForm.description}
          onChange={handleFormChange}
          onBlur={handleBlur}
          error={errors.placa}
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
          error={errors.placa}
        />
        {errors && <Error>{errors.form}</Error>}
        <CustomButton isFullWidth>{product ? 'Update' : 'Add'}</CustomButton>
      </StyledForm>
    </>
  )
}

export default Form;