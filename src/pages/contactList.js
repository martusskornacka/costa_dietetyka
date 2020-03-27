// import React from "react";
// import Home from "../pages/Home";

// export const App = () => {
//     return (
//         <div>
//             <Home />
//             <main className="ui main text container">
//                 <ContactList weathers={[]} />
//             </main>
//         </div>
//     )
// }

// export class ContactList extends React.Component {
//     contactToContactItem = weather => {

//         const { main, description, icon } = pogoda.weather;
//         const pogoda = `${main} ${description} ${icon}`.trim();
//         const temperature = weather.temp;
//         return <ContactItem pogoda={pogoda} temperature={temperature} />
//     };
//     render() {
//         return (
//             <div>
//                 {this.props.weathers.map(this.contactToContactItem)}
//             </div>
//         );
//     }
// }
// export const ContactItem = ({ pogoda, temperature }) => {
//     return (
//         <li className="item">

//             <div className="content">
//                 <h4 className="header">{pogoda}</h4>
//                 <div className="description">{temperature}</div>
//             </div>
//         </li>
//     );
// };
// export default ContactList;