import styled from "@emotion/styled";
import { useState } from "react";
import Button from "./Button";
import Input, { Error } from "./Input";
import Select from "./Select";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* min-width: 18.5rem;
  padding: 2.5rem 2rem 3.37rem 2rem;
  gap: 1.5rem;
  @media (min-width: 600px) {
    max-width: 18rem;
    display: flex;
    padding: 3rem 4rem 3rem 0;
    margin-left: auto;
    margin-right: auto; 
  } */
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
`
const FormTitle = styled.h3`
  letter-spacing: -0.2px;
`
const CustomButton = styled(Button)`
  @media (min-width: 600px) {
    width: fit-content;
  }
`

function Form({ options }) {
  const [dataForm, setForm] = useState({
    dni: "",
    celular: "",
    placa: "",
    terminos: true,
  });
  const [errors, setErrors] = useState({})

  function handleFormChange(event) {
    const { type, name, value, id, checked } = event.target;
    if (type === "text") {
      setForm({ ...dataForm, [name]: value });
    }
    if (type === "checkbox") {
      setForm({ ...dataForm, [id]: checked })
    }
  }

  function handleBlur(event) {
    handleFormChange(event);
    //setErrors(validationForm(dataForm))
  }


  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <Select defaultValue="Category" options={options} />
        <Input
          border
          placeholder="Name of product"
          id="title"
          value={dataForm.celular}
          onChange={handleFormChange}
          onBlur={handleBlur}
          error={errors.celular}
        />
        <Input
          border
          placeholder="Price"
          id="price"
          value={dataForm.placa}
          onChange={handleFormChange}
          onBlur={handleBlur}
          error={errors.placa}
        />
        {errors && <Error>{errors.form}</Error>}
        <CustomButton isFullWidth>Add</CustomButton>
      </StyledForm>
    </>
  )
}

export default Form;