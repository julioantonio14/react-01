import { render,screen } from "@testing-library/react"
import { PostCard } from "."
import { postCardPropsMock } from "./mock"

const mock = postCardPropsMock;
describe('<PostCard />', ()=>{
    it('Should Render PostCard Correctly', ()=>{
        render(<PostCard post={ mock}/>);
        expect(screen.getByRole('img',{name: mock.title})).toBeInTheDocument();
        expect(screen.getByRole('heading',{name: mock.title})).toBeInTheDocument();
    })
    it('Should match snapshot', ()=>{
        const {container} = render(<PostCard post={ mock}/>);
        expect(container.firstChild).toMatchSnapshot();
    })
})