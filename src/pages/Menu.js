// function Menu() {
//     const menuItems = [
//       {
//         id: 1,
//         name: 'Greek Salad',
//         price: '$12.99',
//         description: 'Refreshing salad, made with tomato, lettuce, feta cheese, and olives.',
//         category: 'Appetizers'
//       },
//       {
//         id: 2,
//         name: 'Bruschetta',
//         price: '$16.99',
//         description: 'Toasted bread, topped with tomato, prosciutto, and cheese.',
//         category: 'Appetizers'
//       },
//       {
//         id: 3,
//         name: 'Lemon Dessert',
//         price: '$8.50',
//         description: 'Fresh baked lemon bread coated in salt and sugar.',
//         category: 'Desserts'
//       }
//     ];
  
//     return (
//       <main>
//         <section className="menu-page">
//           <h1>Our Menu</h1>
//           <div className="menu-items">
//             {menuItems.map((item) => (
//               <article key={item.id} className="menu-item">
//                 <h3>{item.name}</h3>
//                 <p className="category">{item.category}</p>
//                 <p>{item.description}</p>
//                 <p className="price">{item.price}</p>
//               </article>
//             ))}
//           </div>
//         </section>
//       </main>
//     );
//   }
  
//   export default Menu;

import Specials from "../components/Specials";
function Menu() {
    return (
      <main>
        <section className="menu-page">
          <h1>Our Menu</h1>
          <Specials />
        </section>
      </main>
    );
  }
  
  export default Menu;