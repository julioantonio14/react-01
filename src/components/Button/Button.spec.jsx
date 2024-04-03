import { fireEvent, render, screen } from "@testing-library/react"
import { Button } from "."

describe('<Button />', () =>{
    it('should render the button with the text', () =>{
        render(<Button text="Load More"/>);

        const button = screen.getByRole('button', {name: /load more/i});
        expect(button).toBeInTheDocument();
    })
    it('should call function on button click', () =>{
        const fn = jest.fn();
        render(<Button text="Load More" onclick={fn}/>);

        const button = screen.getByRole('button', {name: /load more/i});
        fireEvent.click(button); 
        //userEvent.click(button);
        expect(fn).toHaveBeenCalled();
        //expect(button).toBeInTheDocument();
    })
    it('should be disabled when disabled is true', () =>{
        const fn = jest.fn();
        render(<Button text="Load More" onclick={fn} disabled={true}/>);

        const button = screen.getByRole('button', {name: /load more/i});
        expect(button).toBeDisabled();
    })
    it('should match snapshot', () =>{
        const fn = jest.fn();
        const {container} = render(<Button text="Load More" onclick={fn} disabled={true}/>);

        expect(container.firstchild).toMatchSnapshot();
    })
})