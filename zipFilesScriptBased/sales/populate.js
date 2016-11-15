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

    function toCurrency(n) {
        return n.toString().replace(/(\d)(?=(\d{3})+)/g, '$1,');
    }
    $.each(json.sales, function () {
        var $tr = $("<tr>")
                    .appendTo(".sales tbody");
        $("<td>")
            .text(this.salesperson)
            .appendTo($tr);

        $.each(this["2015"], function () {
            $("<td>")
                .text("$" + toCurrency(this))
                .appendTo($tr);
        });
    });
});
