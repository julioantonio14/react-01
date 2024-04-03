import { fireEvent,render,screen } from "@testing-library/react"
import {Posts} from '.';

const props = {
    posts:[{
        id:1,
        title: 'Titulo 1',
        body:'corpo 1',
        cover: 'img/img1.png'   
    },{
        id:2,
        title: 'Titulo 2',
        body:'corpo 2',
        cover: 'img/img2.png'   
    },{
        id:3,
        title: 'Titulo 3',
        body:'corpo 3',
        cover: 'img/img3.png'   
    },]
}

describe('<Posts />', ()=>{
    it('should render posts', ()=>{ 
        render(<Posts {...props}/>)
        expect(screen.getAllByRole('heading', {name: /Titulo/i})).toHaveLength(3)
        expect(screen.getAllByRole('img', {name: /Titulo/i})).toHaveLength(3)
        expect(screen.getAllByText(/corpo/i)).toHaveLength(3)
        expect(screen.getByRole('img', {name: /Titulo 3/i})).toHaveAttribute('src', 'img/img3.png')
    })
    it('should not render posts', ()=>{ 
        render(<Posts/>);
        expect(screen.queryAllByRole('heading', {name: /Titulo/i})).toHaveLength(0)
    })
    it('should match snapshot', ()=>{ 
        const {container} = render(<Posts {...props}/>);
        expect(container.firstChild).toMatchSnapshot();
    })
})