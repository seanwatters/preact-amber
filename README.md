<p align="center">
    <img src="https://camo.githubusercontent.com/cf97a693e2ca4e2736477c7d517a60a9cf1b6038/68747470733a2f2f7365616e776174746572732e696f2f696d616765732f7072656163742d616d6265722e706e67" alt="preact-amber" data-canonical-src="https://seanwatters.io/images/preact-amber.png" height="200">
</p>

<p align="center">
    <a href="https://amberframework.org/"><img src="https://img.shields.io/badge/using-amber_framework-lightgrey.svg" ></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-purple.svg" ></a>
</p>

<p align="center">
    <i>The Speed and Performance of Amber with the lightweight development of Preact</i>
</p>

<br>

# Preact Amber

The goal of the **preact-amber** recipe is to quickly provide a full stack sollution that takes full advantages of the best parts of development using a frontend framework (in the way it was designed to be used), with a powerfull backend API.

The intention is to break away from the traditional Rails-y MVC model, without requiring developers to write completely separate frontend/backend codebases.

<br>

## Creating a Project

To create your project with the **preact-amber** recipe, you will need to run the following command:

```
amber new <your app name> -r seanwatters/preact-amber
```

You may also want to specify your database (default is Postgres) by adding the `-d` tag:

```
amber new <your app name> -r seanwatters/preact-amber -d <pg | mysql | sqlite>
```

Once your app has been created, you will want to run

```
cd <your app name>
amber w
```

Your application will be running on `localhost:9090`.

<br>

## File Structure

With this recipe, we have modularized the file structure to isolate your React frontend from your Amber API.

```
|- bin
|- config
|- db
|- frontend-react   // Preact file tree structure.
    |- src
        |- assets
        |- components
            |- HelloAmber
                |- index.css
                |- index.js
            |- HelloPreact
                |- index.css
                |- index.js
        |- App.css
        |- App.js
    |- index.css
    |- index.js   // WebPack entry point

|- lib
|- public
|- spec
|- src
    |- controllers
        |- application_controller.cr
        |- roots_controller.cr    // Controller for the primary route.

    |- locales
    |- models
    |- views
        |- layouts
        |- roots
            |- root.slang   // Location of the root #app <div> Vue will render to.

```

<br>

## CLI

The scaffold, controller and model generators are currently a work in progress. The scaffold generator can be used currently but the routes need to be set manually in the `config/routes.cr` file to drop `edit` and `new` views. i.e:

```
resources "<pluralized route name>", <route name>Controller, except: [:edit, :new]
```

The README will be updated as soon as the generators have full functionality.

<br>

## Documentation

For any questions specific to the [Preact](https://preactjs.com/) or [Amber](https://amberframework.org/) frameworks, please feel free to refer to their excellent documentation below:

* [Preact](https://preactjs.com/guide/v10/getting-started)
* [Amber](https://docs.amberframework.org/amber/)

<br>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
