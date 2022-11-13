// ==UserScript==
// @name         Instagram - Auto Like Posts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Like many instagram posts automatically. (CTRL+F8 to enable)
// @author       mopsfl
// @match        *://*.instagram.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instagram.com
// @grant        none
// ==/UserScript==

var interval = 1000; //default recommended (1000)

!(function () {
  'use strict'
  var e = false
  const t = () => {
    setInterval(function () {
      const t = document.querySelector('span._aamw>._abl-'),
        o =
          document.querySelectorAll('._aaqh>._abl-')[1] ||
          document.querySelector('._aaqh>._abl-')
      e &&
        (0 ==
        (() => {
          if (document.querySelector('span._aamw>._abl- > div > span > svg')) {
            return (
              '#ed4956' ==
                document
                  .querySelector('span._aamw>._abl- > div > span > svg')
                  .getAttribute('color') && console.log('skip post')
            )
          }
          console.log('unable to check state. no post open?')
        })()
          ? (t && t.click(),
            setTimeout(function () {
              o && o.click()
            }, interval))
          : o && o.click())
    }, interval)
  }
  document.onkeyup = async function (o) {
    if (o.ctrlKey && 119 == o.which) {
      if (e) {
        return
      }
      return 1 ==
        confirm(
          'Instagram Auto Like Posts - made by mopsfl\nDo you want to start?'
        )
        ? await (async () => {
            if (
              !document.querySelector('span._aamw>button') ||
              !document.querySelector('._aaqh>._abl-')
            ) {
              return alert('No post found. Be sure you are watching a post!')
            }
            e || ((e = true), t())
          })()
        : 0 == (await e)
    }
  }
  console.log(
    '%c '.concat('Auto Like script loaded successfully'),
    [
      'background: #2e333e',
      'border: 3px solid rgb(251 208 7)',
      'border-radius: 5px',
      'padding : 5px 50px',
      'color: white',
      'display: block',
      'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)',
      'line-height: 12px',
      'text-align: center',
      'font-size: 15px',
      'font-family: Arial, Helvetica, sans-serif;',
    ].join(';')
  )
})()
