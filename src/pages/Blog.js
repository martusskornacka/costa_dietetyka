import React from 'react';
import '../style/Blog.css';
import Survio from '../pages/Survio';
import ToDo from '../pages/Mark';


class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        alert('Dziękujemy, wybrałeś: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <>

                <h1 className="name">Dietetyczne ciekawostki</h1>
                <div className="formularz">
                    <form onSubmit={this.handleSubmit} >
                        <label className="formatka">
                            Wybierz temat miesiąca
                    <select value={this.state.value} onChange={this.handleChange}>
                                <option value='gluten'>Czy dieta bezglutenowa jest dla kazdego?</option>
                                <option value='vitamin'>Witaminy</option>
                                <option value='vege'>Dieta wegańska</option>
                                <option value='change'>Substytuty białka zwierzęcego na diecie wegetariańskiej</option>
                            </select>
                        </label>
                        <input type="submit" value='Submit' className="przycisk" />
                    </form>
                    <hr />
                    <Survio />
                    <ToDo className="col-6" />
                </div>
            </>
        );
    }
}


// function Blog() {
//     return (
//         <h1>Hello Blog</h1>
//     )
// };
export default Blog;