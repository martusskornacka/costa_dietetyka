
import React from 'react';
class Contact extends React.Component {
    render() {
        return (
            <form onSubmit={this.submitForm}>
                <label>
                    <input
                        type="file"
                        ref={input => this.fileInput = input}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        );
    }

    submitForm = (e) => {
        e.preventDefault();
        alert(this.fileInput.files[0].name);
    }
}
//     function Contact() {
//     return (
//         <h1>Hello Contact</h1>
//     )
// };
export default Contact;