## A fork of [nsfw-filter](https://github.com/nsfw-filter/nsfw-filter) which reenables firefox builds.

A browser extension that blocks NSFW images from the web pages that you load using TensorFlowJS.

*This extension **does NOT** collect/send any user data. All the operations on the images are done locally on the browser. No user data is being sent to a server for processing.*

# Usage

After adding the extension to your browser, it will light-up every time you load a compatible website.

When a page is loaded, the extension would hide all the images in the page and only show images that have been classified as **NOT NSFW**.

Open the popup window to change NSFW Filter settings.


# Development

Clone this repository and navigate inside the project folder and install the dependencies by running:

```sh
npm ci
```
Run the tensorflow fix script (see [this issue](https://github.com/nsfw-filter/nsfw-filter/issues/170#issuecomment-796461853) for more information on why this fix is needed)
```sh
chmod +x tensorflow-fix
./tensorflow-fix
```

After installing the dependencies, build the project by executing:

```sh
npm run build
```

Run the tests

```sh
npm run test
```


### Adding to Firefox
To run development version in clean environment use command:

```sh
npm run dev:firefox
```

Or open Firefox and open the Debug Add-ons page by navigating to ```about:debugging#/runtime/this-firefox``` or by selecting it from Settings dropdown in the add-ons page.

Click Load Temporary Add-on and select the ```manifest.json``` file from the ```.../dist``` directory.

That's it! The extension is now ready to be used in Firefox!

