import {render, screen, cleanup, within} from '@testing-library/react';
import Layout from './Layout';

afterEach(() => {
	cleanup()
})

test('Should render Layout Component', () => {
	render(	<Layout />);
	const layoutElement = screen.getByTestId("layout-id");
	expect(layoutElement).toBeInTheDocument();
});

test('Should render Layout Components', () => {
	render(	<Layout />);
	const layoutElement = screen.getByTestId("layout-id");
	const headerElement = within(layoutElement).getByTestId("header-id");
	const footerElement = within(layoutElement).getByTestId("footer-id");
	expect(headerElement).toHaveTextContent("Contact List");
	expect(footerElement).toHaveTextContent("Designed and Developed with ❤️ by Deepak Podili Devendra.");
});