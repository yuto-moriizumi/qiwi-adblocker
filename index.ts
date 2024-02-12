// ==UserScript==
// @name         qiwi-adblocker
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Blocks annoying ads on qiwi.gg
// @author       You
// @match        https://qiwi.gg/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mozilla.org
// @grant        none
// ==/UserScript==

const IDs = [994201, 996970, 1020439];

function main() {
  const unixTimestamp = Date.now().toString();
  IDs.forEach((id) => {
    sessionStorage.setItem(`zigi_tag_id_${id}_d`, unixTimestamp + "_1");
    sessionStorage.setItem(`zigi_tag_id_${id}_ts`, unixTimestamp);
  });
}
setTimeout(main, 1000);
