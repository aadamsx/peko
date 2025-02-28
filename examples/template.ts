import { CustomTag } from "../lib/types.ts"

export default (HTML: string, customTags?: Record<string, CustomTag>) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="/assets/favicon.ico">
        
        ${customTags && customTags.title}
        <meta name="description" content="The Featherweight Deno SSR Library">

        <script modulepreload="true" type="text/plain" src="https://npm.reversehttp.com/preact,preact/hooks,htm/preact,preact-render-to-string"></script>
        ${customTags && customTags.modulepreload}

        <style>
            html, body {
                height: 100%;
                width: 100%;
                margin: 0;
                font-family: helvetica, sans-serif;
                line-height: 1.5rem;
            }

            img { max-width: 100%; }
            li { margin: 10px 0; }
            a { color: royalblue; }
            a:visited { color: hotpink; }
            .container { max-width: 900px; margin: auto; }
            .row { display: flex; }
            .justify-around { justify-content: space-around; }

            .btn-lg-primary {
                border: solid 1px limegreen;
                background-color: turquoise;
                padding: 0.5rem;
                font-size: 1rem;
            }

            .btn-lg-secondary {
                border: solid 1px red;
                background-color: orange;
                padding: 0.5rem;
                font-size: 1rem;
            }
        </style>
    </head>
    <body>
        <div id="root">
            ${HTML}
        </div>

        ${customTags && customTags.hydrationScript}
    </body>
    </html>
`