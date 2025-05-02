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

A VideoContainer component that:

Fetches popular videos from the YouTube Data API

Stores the result in React state

Maps over the data and renders each video with a VideoCart (card) component

VideoContainer

Fetches video data using fetch() inside useEffect

Uses useState to store videos

Uses .map() to render multiple <VideoCart /> components

Receives a single video object (info) as a prop

Extracts details like title, channel, thumbnail, and views

Displays video card UI

useSearchParams() is a React Router hook used to read query parameters from the URL.

use Link from react-router-dom to navigate to a specific video page
Wraps the video thumbnail and allows navigation to the WatchPage via a URL like:
video ID from the query string using useSearchParams()
Dispatches a closeMenu action when the component mounts
In appSlice.js, you manage UI state like showing/hiding a sidebar menu:
WatchPage loads, the sidebar menu closes for distraction-free video viewing.

Full Flow Recap
define routes with createBrowserRouter

provide those routes using <RouterProvider>

Use path & element to map URLs to components

Use children to nest routes

Use <Outlet /> in the parent to show child components

Implements a debounced input field for search suggestions from the YouTube API.
Shows suggestions typing
Hides suggestions when the input loses focus.

Debouncing with setTimeout + clearTimeout:
Prevents excessive API calls by delaying the request until the user stops typing.

API Call to Get Suggestions:
Fetches suggestions from YOUTUBE_SEARCH_API + searchQuery.
Updates the suggestions state with the result.

Controlled Input:
searchQuery is stored in state.
On change, it updates the state, which triggers the debounced API call.

Suggestion Display Control:
Suggestions appear when the input is focused.

Hidden on onBlur.
