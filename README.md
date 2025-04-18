# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Redux Toolkit
Setup:
Store is created using configureStore.
Slice (appSlice) contains:
isMenuOpen (menu open/close state)
toggleMenu reducer to toggle the state.

Hooks You Use:
useDispatch() To dispatch actions like toggleMenu()
useSelector() To read state like state.app.isMenuOpen

Redux Toolkit with a slice to manage isMenuOpen state, and in components, you're using useSelector() to read the state and useDispatch() to toggle it.
