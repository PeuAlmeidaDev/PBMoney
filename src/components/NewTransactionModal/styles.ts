import { styled } from "styled-components";
import { transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: #363f5f  ;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  .income-icon {
    font-size: 20px;
  }

  .outcome-icon {
    font-size: 20px;
  }
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33CC95',
  red: '#E52E4D',
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    border: 1px solid #d7d7d7;

    background: ${(props) => props.isActive ? transparentize(0.9, colors[props.activeColor]) : 'transparent'};

    display: flex;
    align-items: center;
    justify-content: space-around;
  
    
  `;
