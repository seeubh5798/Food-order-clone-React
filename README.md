



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