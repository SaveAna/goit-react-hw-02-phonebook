import styled from '@emotion/styled';

export const FormContainer = styled.form`
  padding: 12px;
  width: 400px;
  border: 2px solid #000;
  margin: 20px 0px;
`;

export const FormTitle = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const FormBtn = styled.button`
  background-color: transparent;
  text-transform: capitalize;
  border: 1px solid #d3d3d3;
  font-weight: 500;
  border-radius: 5px;
  padding: 2px 5px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  &:active,
  &:hover {
    background: radial-gradient(
      circle,
      rgba(72, 117, 255, 1) 0%,
      rgba(34, 78, 212, 1) 62%,
      rgba(23, 67, 200, 1) 100%
    );
    color: white;
    border-color: transparent;
  }
`;

export const FormInput = styled.input`
  display: block;
  margin-bottom: 20px;
  outline: none;
  border: 1px solid #a1a1a1;
  &:focus {
    outline: none;
    border: transparent;
    -webkit-box-shadow: 0px 0px 5px 2px rgba(80, 148, 217, 1);
    -moz-box-shadow: 0px 0px 5px 2px rgba(80, 148, 217, 1);
    box-shadow: 0px 0px 5px 2px rgba(80, 148, 217, 1);
  }
`;
