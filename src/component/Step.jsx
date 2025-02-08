// import React from "react";
// import WhatIdo from "../WhatIdo";

// const Step = () => {
//   return (
//     <div>
//       <WhatIdo />
//       <section className="text-gray-600  body-font">
//         <div className="container px-5 mx-auto flex flex-wrap">
//           <div className="flex relative pt-4 pb-4 sm:items-center md:w-2/3 mx-auto">
//             <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
//               <div className="h-full w-1 bg-gray-200 pointer-events-none" />
//             </div>
//             <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-500 text-white relative z-10 title-font font-medium text-sm">
//               1
//             </div>
//             <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
//               <div
//                 className="flex-shrink-0 w-24 h-24 bg-indigo-100 rounded-full inline-flex items-center justify-center"
//                 style={{ color: "#f06529" }}
//               >
//                 <i className="fa-brands fa-html5 text-6xl"></i>
//               </div>
//               <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
//                 <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
//                   HTML
//                 </h2>
//                 <p className="leading-relaxed">
//                   Proficient in HTML for structuring web pages.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="flex relative pb-4 sm:items-center md:w-2/3 mx-auto">
//             <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
//               <div className="h-full w-1 bg-gray-200 pointer-events-none" />
//             </div>
//             <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-500 text-white relative z-10 title-font font-medium text-sm">
//               2
//             </div>
//             <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
//               <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
//                 <i
//                   className="fa-brands fa-css3-alt text-6xl"
//                   style={{ color: "#2965f1" }}
//                 ></i>
//               </div>
//               <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
//                 <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
//                   CSS
//                 </h2>
//                 <p className="leading-relaxed">
//                   Skilled in CSS for styling and layout design.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="flex relative pb-4 sm:items-center md:w-2/3 mx-auto">
//             <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
//               <div className="h-full w-1 bg-gray-200 pointer-events-none" />
//             </div>
//             <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-500 text-white relative z-10 title-font font-medium text-sm">
//               3
//             </div>
//             <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
//               <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
//                 <i
//                   className="fa-brands fa-js text-6xl"
//                   style={{ color: "#f0db4f" }}
//                 ></i>
//               </div>
//               <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
//                 <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
//                   Java Script
//                 </h2>
//                 <p className="leading-relaxed">
//                   Proficient in JavaScript for dynamic and interactive web
//                   experiences.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="flex relative pb-4 sm:items-center md:w-2/3 mx-auto">
//             <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
//               <div className="h-full w-1 bg-gray-200 pointer-events-none" />
//             </div>
//             <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-500 text-white relative z-10 title-font font-medium text-sm">
//               4
//             </div>
//             <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
//               <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
//                 <i className="fa-brands fa-react text-6xl"></i>
//               </div>
//               <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
//                 <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
//                   React Js
//                 </h2>
//                 <p className="leading-relaxed">
//                   Experienced in React.js for building reusable UI components.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="flex relative pb-4 sm:items-center md:w-2/3 mx-auto">
//             <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
//               <div className="h-full w-1 bg-gray-200 pointer-events-none" />
//             </div>
//             <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-500 text-white relative z-10 title-font font-medium text-sm">
//               5
//             </div>
//             <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
//               <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
//                 <box-icon type="logo" name="redux"></box-icon>
//               </div>
//               <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
//                 <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
//                   Redux
//                 </h2>
//                 <p className="leading-relaxed">
//                   Skilled in Redux for managing application state effectively.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="flex relative pb-4 sm:items-center md:w-2/3 mx-auto">
//             <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
//               <div className="h-full w-1 bg-gray-200 pointer-events-none" />
//             </div>
//             <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-500 text-white relative z-10 title-font font-medium text-sm">
//               6
//             </div>
//             <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
//               <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
//                 <i
//                   className="fa-brands fa-bootstrap text-6xl"
//                   style={{ color: "#563d7c" }}
//                 ></i>
//               </div>

//               <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
//                 <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
//                   Bootstrap
//                 </h2>
//                 <p className="leading-relaxed">
//                   Experienced in Bootstrap for rapid development of responsive
//                   websites.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="flex relative pb-4 sm:items-center md:w-2/3 mx-auto">
//             <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
//               <div className="h-full w-1 bg-gray-200 pointer-events-none" />
//             </div>
//             <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-500 text-white relative z-10 title-font font-medium text-sm">
//               7
//             </div>
//             <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
//               <div className="flex-shrink-0 w-24 h-24 bg-indigo-100  text-indigo-500  rounded-full inline-flex items-center justify-center">
//                 <box-icon
//                   type="logo"
//                   name="tailwind-css"
//                   style={{ color: "#3490dc" }}
//                 ></box-icon>
//               </div>
//               <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
//                 <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
//                   Tailwind
//                 </h2>
//                 <p className="leading-relaxed">
//                   Experienced in Tailwind CSS for rapid prototyping and styling.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Step;
import React from "react";
import WhatIdo from "../WhatIdo";

const steps = [
  {
    id: 1,
    title: "HTML",
    icon: "fa-html5",
    color: "#f06529",
    desc: "Proficient in HTML for structuring web pages.",
  },
  {
    id: 2,
    title: "CSS",
    icon: "fa-css3-alt",
    color: "#2965f1",
    desc: "Skilled in CSS for styling and layout design.",
  },
  {
    id: 3,
    title: "JavaScript",
    icon: "fa-js",
    color: "#f0db4f",
    desc: "Proficient in JavaScript for interactive experiences.",
  },
  {
    id: 4,
    title: "React.js",
    icon: "fa-react",
    color: "#61DBFB",
    desc: "Experienced in React.js for building reusable UI components.",
  },
  {
    id: 5,
    title: "Redux",
    icon: "redux", // Updated to use box-icon
    color: "#764ABC",
    desc: "Skilled in Redux for managing application state effectively.",
    isBoxIcon: true,
  },
  {
    id: 6,
    title: "Bootstrap",
    icon: "fa-bootstrap",
    color: "#563d7c",
    desc: "Experienced in Bootstrap for rapid responsive development.",
  },
  {
    id: 7,
    title: "Tailwind CSS",
    icon: "tailwind-css", // Updated to use box-icon
    color: "#3490dc",
    desc: "Experienced in Tailwind CSS for styling and prototyping.",
    isBoxIcon: true,
  },
];

const Step = () => {
  return (
    <div>
      <WhatIdo />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap flex-col items-center px-5">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex relative pt-4 pb-4 sm:items-center w-full md:w-2/3"
            >
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 flex items-center justify-center bg-slate-500 text-white text-sm font-medium relative z-10">
                {step.id}
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div
                  className="flex-shrink-0 w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center"
                  style={{ color: step.color }}
                >
                  {step.isBoxIcon ? (
                    <box-icon type="logo" name={step.icon}></box-icon>
                  ) : (
                    <i className={`fa-brands ${step.icon} text-6xl`}></i>
                  )}
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium text-gray-900 mb-1 text-xl">
                    {step.title}
                  </h2>
                  <p className="leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Step;
