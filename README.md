



#parcel is  doing
-Dev Build
-Local Server
-HMR(Hot Module Replacement )
-File watching algorithm ( build in CPP)
-Caching - Faster builds (.parcel-cache)
-Image Optimisation
-Minification
-Bundling
-Compress
-Consistent Hashing
-Code splitting
-Diffrential Bundling  - to support older browsers
-Diagnostics 
-Good Error Handling
-HTTPs
-Lazy Dev Builds
-Tree Shaking - remove unused codes
-Different dev and production bundles


dev build - npx parcel index.html (entry point)
prod build - npx parcel build index.html (entry point) - remove main frompackage.json


<!-- parcel is a beast -->

Never ever keep your hard coded data in component file be it array , object, img src url too , don't keep it in component fiule.
keep them in Utils folder.



2 types of export-import
1- default export-import  e.g export default <name of variable>  import <variable> from path
2- named export-import  e.g export const <variable>    import { <variable> } from path - used when we have more than one variable/const to be imported



#   REACT HOOKS:
normal JS functions writeen by meta devs inside the React which we import using npm react.
React reconciliation algorithm - also knaown as react fiberv(after Reect-16)
 React Fiber uses diff algorithm internally - which finds the difference between current virtual DOM and updated virtual DOM and then it updates the DOM.


 Virtual DOM-  it just just a JS Object representation of HTML tags.

 Virtual DOM concept existed boefore react came to the picture.

# React is fast becuz it does efficient dom manupilation - this is the core of React.


# UseEffect HOOK:
    another function given by react , which is called once react renders the element in browser - generally used to make an api call inside the callback to renders the data.

# 2 types of api call - before rendering - do api call and redners in the UI - bad user experience- react do not follow this.

2nd is - first render the basic UI skeleton , do api call , once api gives results - re renders the screen in UI - react follows this and it's a gud user experience



# We generally show Loader screen till gata gets come from API ? Is it good ?

NO - USE SHIMMER UI , INSTEAD OF LOADING