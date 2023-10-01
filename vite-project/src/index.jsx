import React from "react";
import ReactDOM from "react-dom";

function Page() {
  return (
    <div>
      <header>
        <nav>
          <img
            src="src\images\react-logo.png"width="40px"
          />
        </nav>
      </header>

      <h1>Fun Facts About React</h1>

      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>

      <footer>
        <small>© 2023 Segels development. All rights reserved.</small>
      </footer>
    </div>
  );
}

ReactDOM.render( <Page />, document.getElementById("root"));

//using a function in jsx(lesson 16 custom components note at 3:57)

// import React from "react";
// import ReactDOM from "react-dom";

// function CustomComponent() {
//   return (
//     <div>

//       <header>
//         <nav>
//           <img src="./images/react-logo.png" width="40px" />
//         </nav>
//       </header>

//       <h1>reasons why i love react</h1>

//       <ol>
//         <li>it's easy to use</li>
//         <li>it's fun</li>
//       </ol>

//       <footer>
//         <small>© 2023 Segels development. All rights reserved.</small>
//       </footer>

//     </div>
//   );
// }

// ReactDOM.render(<CustomComponent />, document.getElementById("root"));
