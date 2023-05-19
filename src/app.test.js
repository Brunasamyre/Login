import React from 'react'
import { render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import Login from './pages/Login/Index';

describe('LoginForm', () => {
  it('should render the Login form', () => {
    const { getByLabelText, getByText } = render(<Login />);
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument();
    //expect(getByText('Login')).toBeInTheDocument();
  });

  it('should disable the Login button when the form is empty', () => {
     render(<Login />);
    const usernameInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getAllByPlaceholderText('Senha');
    const loginButton = screen.getByRole('button');

    expect(loginButton).toBeDisabled();

    fireEvent.change(usernameInput, { target: { value: 'testemail' } });
    expect(loginButton).not.toBeDisabled();

    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    expect(loginButton).not.toBeDisabled();
  });
});
