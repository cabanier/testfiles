/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2015 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by all applicable intellectual property laws,
* including trade secret and or copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/

/*jslint devel: true, browser: true, nomen: true */
/*global console, $, json */

$(function () {
    'use strict';

    var output, vars = [], imageData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAABbCAMAAAAx1OklAAAA6lBMVEUAAAAAAACPj48EBAQSEhI+Pj5DQ0Ojo6MNDQ19fX3R0dFubm69vb0JCQkuLi54eHiDg4OKiooGBgYLCwsODg4SEhI7Ozu2trYICAgYGBiTk5O7u7u/v7/CwsIpKSkyMjIXFxdOTk5TU1MtLS0bGxtzc3PJyckQEBAUFBQVFRUfHx9XV1diYmJnZ2cyMjKenp5oaGgHBwdBQUFra2t1dXUaGhomJiYpKSkxMTGGhoaYmJgAAAA3NzcZGRk7OzsPDw9ERERdXV1LS0vMzMwVFRU5OTmvr68YGBhJSUmcnJwGBgYKCgqxsbEAAAAmRlyMAAAATXRSTlMA3zvcmIxGKaVLA1sU1J5RRkDZ0MzFkBrXvDcWEg+mmYx6dGO3VgrHwsGzcWdhWy4kuYlcU7mqal5ENMOVhk+ehWw8Bo9SIIlBMrmvIAe2x2UAAAQhSURBVFjD7ZnpdtowEIXHGLMZSNjMFkIWSCArCVugSRqytWnL+79OIxtzkW15AdPT09PvR07E2FeyNBpJI/oH2cvNlFGrU5AKndZImeX2QtA8aTcz0pxHyjTbJxup7pxB06J9pq4rWlbyUHVQlpXyOqpZiVP5pML+cD9mAysrEJA6Sn+6Z47hVFU6KzYtkOqgIpkf20ymbOZUsimbD1QGvlVT++ZL1TaJaFfNh/ZT/mQ/CosXWhFyI9JaKBc+/MheSoZqF6pC5e7i2Utv2UPjUfmC/HAhG8KH5MGtZHRsnfyRrhov3JIr98ZT9+QfDa94tFbuUxD6hrBCQs4N2V0Kxq6sC58L7bpsPkJBieR1YUF70rpVhqx/arLeIufBruqVrhf+kvqnVoWOKx3RehxJAjd+1w37fFg/TnxJHO8Q4C0DAvv6+7/ISkuf6dxoRGPXRHQdi6LLXSx6VGnZGqBXlyPQe1jG3IcekaclpytYP67IasuutumAwEHEhyXLJIq8rMoqk/cIRNME0l99WE5kuz8VraOZjHH2WNLdAp8o2mZahVa4itMq8SsfFqpYZ90Z6xrOdaMEUHa30BGTOUO5ofcut0zdGI0pleIoe1kopfdwA1Gf1dN0aEVpPi+hLLKAJhPCStNl1dTI0r/G26dG8+5cLKDGPrxrluqslIEVox4/7cQx6kILyLAW1k3nZa1HuA/uv0BhUurqRIF7OMyqbzlXC9hdTFs03rah7R2kzTYd9Nwt4MToUnjZKWxrxDNwCk+LcN0bPP7aOzgC772kcLiEBz+his2pMbEnYwVhXVIOSbfMBstYzYZMl8KC6Q4Re0PVLcJ9Q9XNLP/LhyGJ2L7UlUPT1UPwtvphW+MWvp+l4Gfhzos5mxeYx7VQ5/H24g7iZBggTiKuhwLiOtYhDwbH0ZuoPciL1iGsm66oiec4W96fE6rFIl43Ve8OfrxLmQ569+jVvSq/L3EhFiPwXSiMfYlBCfsoR5JjrjhOkh3so0o4v2Lf50iiwRUbCbKDfR/Os3XsU53IvRHPW45sYJ9aF++reW6tMjlBtgH7av4cIOD1xdquV5e1YldwbrFz4/6L6NyCc1bDWfcnWflBDrzgnCU6F/I8vFgVbP2Ac6HnORZotnHTCAjOscJzN5hY/exxwpdx7h6K8gRrzQvkCd6FeY115jHyGuI8TDt43EEexiVvJDnuhK9W4uRVoLwR8ly1wHG9hjyXW15u4mjsjz+PFGOoggnycq7ZbynkPCLynlrIec/gedr6EHlaX3nlc1+y58gr/+E8OJgGzttPfe5hR8t7hoF4+1M1HxqlyC/tAPcibQqCxt3jqCv3OH3+HucvuXdiypr7PVleK2/jXm9nw3vIrMM9ZBb3kBuQnsy0UbcgS3KhO9JmkzT9xy+/AQopOBhNSrKsAAAAAElFTkSuQmCC";

    $("<div>")
        .text("div that's only visible on print: should appear only with: use_print_stylesheet = true")
        .appendTo("body");

    $("<div>")
        .css(
            {
                "padding": "20px",
                "border": "thin solid black"
            }
        )
        .addClass("printable")
        .text("Printable")
        .appendTo("body");

    $("<div>")
        .text("div with a background image: should appear only with: print_background_images = true")
        .appendTo("body");

    $("<div>")
        .css(
            {
                "min-height": "72px",
                "min-width": "72px",
                "border": "thin solid black",
                "background-image": 'url(' + imageData + ')'
            }
        )
        .appendTo("body");

    $("<div>")
        .text("regular image")
        .appendTo("body");

    $("<img>")
        .css({"min-height": "72px", "min-width": "72px"})
        .css("border", "thin solid black")
        .attr("src", imageData)
        .appendTo("body");

    $("<div>")
        .text("JSON Text:")
        .appendTo("body");

    output = (window.json || {"ERROR": "No json data found."});
    $("<pre>")
        .text(JSON.stringify(output, null, 4))
        .appendTo("body");

    $.each(window, function (v) {
        vars.push(v);
    });
    vars.sort();

    $("<div>")
        .text("Windows variables:")
        .appendTo("body");

    $("<div>")
        .text(vars.join(" "))
        .appendTo("body");
});
