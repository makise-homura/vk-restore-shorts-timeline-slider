// ==UserScript==
// @name         VK Restore Shorts timeline slider
// @version      0.2
// @description  Restore timeline slider for VK Shorts
// @author       makise-homura
// @match        https://vk.com/*
// @grant        none
// ==/UserScript==

new MutationObserver((m) =>
{
    m.forEach(() =>
    {
        var e = document.querySelector(".videoplayer_timeline_slider")
        if (e !== null)
        {
            e.classList.remove("videoplayer_controls_item_hidden");
        }
    });
}).observe(document.body, {childList: true, subtree: true});
