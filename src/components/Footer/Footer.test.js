import {render, screen, cleanup} from '@testing-library/react';
import Footer from './Footer';

afterEach(() => {
	cleanup()
})

test('Should render Footer Component', () => {
	render(	<Footer />);
	const footerElement = screen.getByTestId("footer-id");
	expect(footerElement).toBeInTheDocument();
});

test('Should render Footer Text', () => {
	render(	<Footer />);
	const footerElement = screen.getByTestId("footer-id");
	expect(footerElement).toHaveTextContent("Designed and Developed with ❤️ by Deepak Podili Devendra.");
});