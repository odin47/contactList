import {render, screen, cleanup, within} from '@testing-library/react';
import {GlobalContext} from 'App';
import Menu from './Menu';

const contextData = {
	selected: 'a',
	list: {},
	currentContact: {}
}

afterEach(() => {
	cleanup()
})

const list = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
test('Should render Menu Component', () => {
	render(	
		<GlobalContext.Provider value={contextData}>
			<Menu list={list} />
		</GlobalContext.Provider>
	);
	const menuElement = screen.getByTestId("menu-id");
	expect(menuElement).toBeInTheDocument();
});

test('Should display Menu length', () => {
	render(	
		<GlobalContext.Provider value={contextData}>
			<Menu list={list} />
		</GlobalContext.Provider>
	);
	const menuElement = screen.getByTestId("menu-id");
	const buttonElement = within(menuElement).getAllByTestId("button-id");
	expect(buttonElement).toHaveLength(26);
});