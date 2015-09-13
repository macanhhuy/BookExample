'use strict';
/*global jQuery:false */
angular.module('core').directive('ngCarousel', [
    function () {
        return {
            restrict: 'A',
            link: function (scope, elm, attrs) {
                
                if (!scope.myCarousel){
                    jQuery(elm).hide();
                    setTimeout(function(){

                        scope.myCarousel = jQuery(elm).carouFredSel({
                            circular: true,            // Determines whether the carousel should be circular.
                            infinite: true,            // Determines whether the carousel should be infinite. Note: It is possible to create a non-circular, infinite carousel, but it is not possible to create a circular, non-infinite carousel.
                            responsive: false,        // Determines whether the carousel should be responsive. If true, the items will be resized to fill the carousel.
                            direction: 'left',
                            padding     : 0,

                            align: 'right',        // Whether and how to align the items inside a fixed width/height. Possible values: "center", "left", "right" or false.
                            items       : {

                                visible     : 5,

                                width       : 180
                            },

                            auto: false,
                            scroll : {
                                items            : 5,
                                easing            : 'swing',
                                duration        : 1000,
                                pauseOnHover    : true
                            },
                            prev : {
                                button : '#nav-left',
                                key : 'left'
                            },

                            next : {
                                button : '#nav-right',
                                key : 'right'
                            }
                        });

                    }, 500);
                    jQuery(elm).show();

                }
                else {
                    jQuery('#levels').trigger('insertItem', jQuery(elm));
                }
            }

        };

    }
]);
