import {render, screen, cleanup} from '@testing-library/react';
import Header from './Header';

afterEach(() => {
	cleanup()
})

test('Should render Header Component', () => {
	render(	<Header />);
	const headerElement = screen.getByTestId("header-id");
	expect(headerElement).toBeInTheDocument();
});

test('Should render Header Text', () => {
	render(	<Header />);
	const headerElement = screen.getByTestId("header-id");
	expect(headerElement).toHaveTextContent("Contact List");
});