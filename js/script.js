        (function ($) {
            'use strict';
            $(document).ready(function () {
                let all = $('*').not('script, meta, link, style, noscript, title'),
                    tooltip = $('#ays_tooltip'),
                    tooltipClass = "mouse";
                if (tooltipClass == "mouse") {
		                                all.on('mousemove', function (e) {
                        let cordinate_x = e.pageX;
                        let cordinate_y = e.pageY;
                        let windowWidth = $(window).width();
                        if (cordinate_y < tooltip.outerHeight()) {
                            tooltip.css({'top': (cordinate_y + 10) + 'px'});
                        } else {
                            tooltip.css({'top': (cordinate_y - tooltip.outerHeight()) + 'px'});
                        }
                        if (cordinate_x > (windowWidth - tooltip.outerWidth())) {
                            tooltip.css({'left': (cordinate_x - tooltip.outerWidth()) + 'px'});
                        } else {
                            tooltip.css({'left': (cordinate_x + 5) + 'px'});
                        }

                    });
		                            } else {
                    tooltip.addClass(tooltipClass);
                }
				                $(document).on('keyup', function (e) {
                    if (!e) e = window.event;
                    if (e.keyCode == 44) {
                        e.preventDefault();
                        show_tooltip(1 );
                        audio_play();
                    }
                    return false;
                });
				

				                $(document).on('contextmenu', function (e) {
                    let t = e || window.event;
                    let n = t.target || t.srcElement;
                    if (n.nodeName !== "A") {
                        show_tooltip( );
                        audio_play(1);
                    }
                    return false;
                });
	            
	                            all.on('touchstart', function (event) {
                    let target = $(event.target);
                    if (target.is("img")) {
                        show_tooltip( );
                        audio_play();
                        event.preventDefault();
                        event.stopPropagation();
                        event.stopImmediatePropagation();
                        return false;
                    }
                });
				
				                $(document).on('dragstart', function () {
                    show_tooltip(1 );
                    audio_play();
                    return false;
                });
				
				
                $(window).on('keydown', function (event) {
                    var isOpera = (BrowserDetect.browser === "Opera");

                    var isFirefox = (BrowserDetect.browser === 'Firefox');

                    var isSafari = (BrowserDetect.browser === 'Safari');

                    var isIE = (BrowserDetect.browser === 'Explorer');

                    var isChrome = (BrowserDetect.browser === 'Chrome');

                    if (BrowserDetect.OS === 'Windows') {
						                        if (isChrome) {
                            if (((event.ctrlKey && event.shiftKey) && (
                                event.keyCode === 73 ||
                                event.keyCode === 74 ||
                                event.keyCode === 67))) {
                                show_tooltip(1);
                                audio_play();
                                return false;
                            }
                        }
                        if (isFirefox) {
                            if (((event.ctrlKey && event.shiftKey) && (
                                event.keyCode === 73 ||
                                event.keyCode === 74 ||
                                event.keyCode === 67 ||
                                event.keyCode === 75 ||
                                event.keyCode === 69)) ||
                                event.keyCode === 118 ||
                                event.keyCode === 116 ||
                                (event.keyCode === 112 && event.shiftKey) ||
                                (event.keyCode === 115 && event.shiftKey) ||
                                (event.keyCode === 118 && event.shiftKey) ||
                                (event.keyCode === 120 && event.shiftKey)) {
                                show_tooltip(1);
                                audio_play();
                                return false;
                            }
                        }
                        if (isOpera) {
                            if (((event.ctrlKey && event.shiftKey) && (
                                event.keyCode === 73 ||
                                event.keyCode === 74 ||
                                event.keyCode === 67 ||
                                event.keyCode === 88 ||
                                event.keyCode === 69))) {
                                show_tooltip(1);
                                audio_play();
                                return false;
                            }
                        }
                        if (isIE) {
                            if ((event.keyCode === 123 && event.shiftKey)) {
                                show_tooltip(1);
                                audio_play();
                                return false;
                            }
                        }
						
						                        if ((event.keyCode === 83 && event.ctrlKey)) {
                            show_tooltip(1);
                            audio_play();
                            return false;
                        }
						
						                        if ((event.keyCode === 65 && event.ctrlKey)) {
                            show_tooltip(1);
                            audio_play();
                            return false;
                        }
						
						                        if (event.keyCode === 67 && event.ctrlKey && !event.shiftKey) {
                            show_tooltip(1);
                            audio_play();
                            return false;
                        }
						
						                        if ((event.keyCode === 86 && event.ctrlKey)) {
                            show_tooltip(1);
                            audio_play();
                            return false;
                        }
						
						                        if ((event.keyCode === 88 && event.ctrlKey)) {
                            show_tooltip(1 );
                            audio_play();
                            return false;
                        }
						
						                        if ((event.keyCode === 85 && event.ctrlKey)) {
                            show_tooltip(1 );
                            audio_play();
                            return false;
                        }
						
						                        if ((event.keyCode === 70 && event.ctrlKey)) {
                            show_tooltip(1 );
                            audio_play();
                            return false;
                        }
						
						                        if (event.keyCode === 123 || (event.keyCode === 123 && event.shiftKey)) {
                            show_tooltip(1);
                            audio_play();
                            return false;
                        }
						                    } else if (BrowserDetect.OS === 'Linux') {
						                        if (isChrome) {
                            if (
                                (
                                    (event.ctrlKey && event.shiftKey) &&
                                    (event.keyCode === 73 ||
                                        event.keyCode === 74 ||
                                        event.keyCode === 67
                                    )
                                ) ||
                                (event.ctrlKey && event.keyCode === 85)
                            ) {
                                show_tooltip(1);
                                audio_play();
                                return false;
                            }
                        }
                        if (isFirefox) {
                            if (((event.ctrlKey && event.shiftKey) && (event.keyCode === 73 || event.keyCode === 74 || event.keyCode === 67 || event.keyCode === 75 || event.keyCode === 69)) || event.keyCode === 118 || event.keyCode === 116 || (event.keyCode === 112 && event.shiftKey) || (event.keyCode === 115 && event.shiftKey) || (event.keyCode === 118 && event.shiftKey) || (event.keyCode === 120 && event.shiftKey) || (event.keyCode === 85 && event.ctrlKey)) {
                                show_tooltip(1);
                                audio_play();
                                return false;
                            }
                        }
                        if (isOpera) {
                            if (((event.ctrlKey && event.shiftKey) && (event.keyCode === 73 || event.keyCode === 74 || event.keyCode === 67 || event.keyCode === 88 || event.keyCode === 69)) || (event.ctrlKey && event.keyCode === 85)) {
                                show_tooltip(1);
                                audio_play();
                                return false;
                            }
                        }
						
						                        if ((event.keyCode === 83 && event.ctrlKey)) {
                            show_tooltip(1);
                            audio_play();
                            return false;
                        }
						
						                        if (event.keyCode === 65 && event.ctrlKey) {
                            show_tooltip(1);
                            audio_play();
                            return false;
                        }
						
						                        if (event.keyCode === 67 && event.ctrlKey && !event.shiftKey) {
                            show_tooltip(1);
                            audio_play();
                            return false;
                        }
						
						                        if ((event.keyCode === 86 && event.ctrlKey)) {
                            show_tooltip(1);
                            audio_play();
                            return false;
                        }
						
						                        if ((event.keyCode === 88 && event.ctrlKey)) {
                            show_tooltip(1);
                            audio_play();
                            return false;
                        }
						
						                        if ((event.keyCode === 85 && event.ctrlKey)) {
                            show_tooltip(1 );
                            audio_play();
                            return false;
                        }
						
						                        if ((event.keyCode === 70 && event.ctrlKey)) {
                            show_tooltip(1 );
                            audio_play();
                            return false;
                        }
						
						                        if (event.keyCode === 123 || (event.keyCode === 123 && event.shiftKey)) {
                            show_tooltip(1);
                            audio_play();
                            return false;
                        }
						                    } else if (BrowserDetect.OS === 'Mac') {
						                        if (isChrome || isSafari || isOpera || isFirefox) {
                            if (event.metaKey && (
                                event.keyCode === 73 ||
                                event.keyCode === 74 ||
                                event.keyCode === 69 ||
                                event.keyCode === 75)) {
                                show_tooltip(1);
                                audio_play();
                                return false;
                            }
                        }
						
						                        if ((event.keyCode === 83 && event.metaKey)) {
                            show_tooltip(1);
                            audio_play();
                            return false;
                        }
						
						                        if ((event.keyCode === 65 && event.metaKey)) {
                            show_tooltip(1);
                            audio_play();
                            return false;
                        }
						
						                        if ((event.keyCode === 67 && event.metaKey)) {
                            show_tooltip(1);
                            audio_play();
                            return false;
                        }
						
						                        if ((event.keyCode === 86 && event.metaKey)) {
                            show_tooltip(1);
                            audio_play();
                            return false;
                        }
						
						                        if ((event.keyCode === 88 && event.metaKey)) {
                            show_tooltip(1);
                            audio_play();
                            return false;
                        }
						
						                        if ((event.keyCode === 85 && event.metaKey)) {
                            show_tooltip(1 );
                            audio_play();
                            return false;
                        }
						
						                        if ((event.keyCode === 70 && event.metaKey)) {
                            show_tooltip(1 );
                            audio_play();
                            return false;
                        }
						
						                        if (event.keyCode === 123) {
                            show_tooltip(1);
                            audio_play();
                            return false;
                        }
						                    }
                });

                function disableSelection(e) {
                    if (typeof e.onselectstart !== "undefined")
                        e.onselectstart = function () {
                            show_tooltip( );
                            audio_play();
                            return false
                        };
                    else if (typeof e.style.MozUserSelect !== "undefined")
                        e.style.MozUserSelect = "none";
                    else e.onmousedown = function () {
                            show_tooltip();
                            audio_play();
                            return false
                        };
                    e.style.cursor = "default"
                }

                function show_tooltip(mess) {
                    if (mess) {
                        tooltip.css({'display': 'table'});
                        setTimeout(function () {
                            $('#ays_tooltip').fadeOut(500);
                        }, 1000);
                    }
                }

                function audio_play(audio) {
                    if (audio) {
                        var audio = document.getElementById("sccp_public_audio");
                        if (audio) {
                            audio.currentTime = 0;
                            audio.play();
                        }

                    }
                }


            });
        })(jQuery);

        var BrowserDetect = {
            init: function () {
                this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
                this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
                this.OS = this.searchString(this.dataOS) || "an unknown OS";
            },
            searchString: function (data) {
                for (var i = 0; i < data.length; i++) {
                    var dataString = data[i].string;
                    var dataProp = data[i].prop;
                    this.versionSearchString = data[i].versionSearch || data[i].identity;
                    if (dataString) {
                        if (dataString.indexOf(data[i].subString) !== -1) return data[i].identity;
                    } else if (dataProp) return data[i].identity;
                }
            },
            searchVersion: function (dataString) {
                var index = dataString.indexOf(this.versionSearchString);
                if (index === -1) return;
                return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
            },
            dataBrowser: [{
                string: navigator.userAgent,
                subString: "Chrome",
                identity: "Chrome"
            }, {
                string: navigator.userAgent,
                subString: "OmniWeb",
                versionSearch: "OmniWeb/",
                identity: "OmniWeb"
            }, {
                string: navigator.vendor,
                subString: "Apple",
                identity: "Safari",
                versionSearch: "Version"
            }, {
                prop: window.opera,
                identity: "Opera",
                versionSearch: "Version"
            }, {
                string: navigator.vendor,
                subString: "iCab",
                identity: "iCab"
            }, {
                string: navigator.vendor,
                subString: "KDE",
                identity: "Konqueror"
            }, {
                string: navigator.userAgent,
                subString: "Firefox",
                identity: "Firefox"
            }, {
                string: navigator.vendor,
                subString: "Camino",
                identity: "Camino"
            }, { // for newer Netscapes (6+)
                string: navigator.userAgent,
                subString: "Netscape",
                identity: "Netscape"
            }, {
                string: navigator.userAgent,
                subString: "MSIE",
                identity: "Explorer",
                versionSearch: "MSIE"
            }, {
                string: navigator.userAgent,
                subString: "Gecko",
                identity: "Mozilla",
                versionSearch: "rv"
            }, { // for older Netscapes (4-)
                string: navigator.userAgent,
                subString: "Mozilla",
                identity: "Netscape",
                versionSearch: "Mozilla"
            }],
            dataOS: [{
                string: navigator.platform,
                subString: "Win",
                identity: "Windows"
            }, {
                string: navigator.platform,
                subString: "Mac",
                identity: "Mac"
            }, {
                string: navigator.userAgent,
                subString: "iPhone",
                identity: "iPhone/iPod"
            }, {
                string: navigator.platform,
                subString: "Linux",
                identity: "Linux"
            }]
        };
        BrowserDetect.init();
