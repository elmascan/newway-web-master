# newway-web

frontend for newway web application

- #### TailwindCSS Configuration

    - Add following packages to the devDependencies:
    
        `npm install tailwindcss -D`
 
    - Export tailwind configs to the tailwind.js file:

        `npx tailwind init tailwind.js --full` 

    - Add following packages to the devDependencies:
        
        `npm install postcss-cli autoprefixer -D`

    - Create a new file at project folder:

        `touch postcss.config.js`

    - Add following code snippets to the postcss.config.js:
        ```
        const tailwindcss = require('tailwindcss');
         
         module.exports = {
             plugins: [tailwindcss('./tailwind.js'), require('autoprefixer')]
         };
        ```

    - Change scripts section in package.json file like following:
        ```
        "scripts": {
               "start": "npm run watch:css && react-scripts start",
               "build": "npm run build:css && react-scripts build",
               "test": "react-scripts test",
               "eject": "react-scripts eject",
               "build:css": "postcss src/styles/tailwind.css -o src/styles/app.css",
               "watch:css": "postcss src/styles/tailwind.css -o src/styles/app.css -w"
             }
        ```

    - Create new stylesheet files inside the src/styles: 

        `touch styles/app.css`

        `touch styles/tailwind.css`

    - Add to tailwind.css following code snippets:
        ```
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```

- #### FontAwesome Configuration

    - Install dependencies: 
    ```
    npm i -S @fortawesome/fontawesome-svg-core \
    @fortawesome/react-fontawesome \
    @fortawesome/free-regular-svg-icons \
    @fortawesome/free-solid-svg-icons \  
    @fortawesome/free-light-svg-icons \   
    @fortawesome/free-brands-svg-icons
    ```

    - Use like following:
    ```
    import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
    import { faRoad} from "@fortawesome/free-solid-svg-icons";
    <FontAwesomeIcon icon={faRoad}/>
    ```
  
- #### Others