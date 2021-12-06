import {render, screen, cleanup} from '@testing-library/react';
import Tile from './Tile';

afterEach(() => {
	cleanup()
})

test('Should render Tile Component', () => {
	render(	<Tile />);
	const tileElement = screen.getByTestId("tile-id");
	expect(tileElement).toBeInTheDocument();
});

test('Should render Tile Text', () => {
	render(	<Tile title={"Deepak PD"} subTitle={"9900932273"} />);
	const tileElement = screen.getByTestId("tile-id");
	expect(tileElement).toHaveTextContent("Deepak PD");
	expect(tileElement).toHaveTextContent("9900932273");
});