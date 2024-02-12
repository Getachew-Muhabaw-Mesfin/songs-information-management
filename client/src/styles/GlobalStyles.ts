import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
 
  --color-brand-600: #4f46e5;
  
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;


}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
}
.form-control{
  font-size: 1.8rem;
}
a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}
.card {
  width: 30rem;
  box-shadow: 20px 20px 20px 20px rgba(36, 206, 200, 0.253) !important;
}
card-body {
  padding: 3rem 0 !important;
}
.card-text {
  padding: 0.7rem 1.9rem;
}
.overflow {
  overflow: hidden;
}
.card-img-top {
  transform: scale(1.1);
  transition: transform 0.5s ease;
}
.card-img-top:hover {
  transform: scale(1.8);
}

`;

export default GlobalStyles;
