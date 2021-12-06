import {render, screen, cleanup} from '@testing-library/react';
import Button from './Button';
import {GlobalContext} from 'App';

afterEach(() => {
	cleanup()
})

const dummyValue = {
	selected: 'a',
	list: {},
	currentContact: {}
}

test('Should render Button Component', () => {
	render(<GlobalContext.Provider value={dummyValue}>
			<Button>Test</Button>
		</GlobalContext.Provider>
	);
	const buttonElement = screen.getByTestId("button-id");
	expect(buttonElement).toBeInTheDocument();
});

test('Should render Button Text', () => {
	render(<GlobalContext.Provider value={dummyValue}>
			<Button>Test</Button>
		</GlobalContext.Provider>
	);
	const buttonElement = screen.getByTestId("button-id");
	expect(buttonElement).toHaveTextContent("Test");
})