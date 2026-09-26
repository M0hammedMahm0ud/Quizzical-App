/**
 * GitHub Pages has no SPA rewrite rule, so any deep link
 * (e.g. /Quizzical-App/questions/easy/21/10) returns a 404.
 * Publishing a copy of index.html as 404.html lets GitHub Pages
 * hand the request back to the client-side router instead.
 */
import { copyFileSync } from "node:fs";

copyFileSync("dist/index.html", "dist/404.html");
console.log("Created dist/404.html for SPA deep links");
