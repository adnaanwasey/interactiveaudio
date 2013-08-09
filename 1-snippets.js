               // "CODE" PLUGIN: DO SOMETHING BETWEEN TWO POINTS IN THE AUDIO (LIKE SHOW A MESSAGE)
               pop.code({
                    start: 0,
                    end: 3,
                    onStart: function( options ) {
                         $("#results_section1").html("Part 1");
                    },
                    onEnd: function( options ) {
                         $("#results_section1").empty();
                    }
               });

               // "CODE" PLUGIN: DO SOMETHING BETWEEN TWO POINTS IN THE AUDIO (LIKE SHOW A MESSAGE)
               pop.code({
                    start: 4,
                    end: 7,
                    onStart: function( options ) {
                         $("#results_section1").html("Part 2");
                    },
                    onEnd: function( options ) {
                         $("#results_section1").empty();
                    }
               });

               // "IMAGE" PLUGIN: LOAD AN IMAGE BETWEEN TWO POINTS IN THE AUDIO
               pop.image({
                    start: 8,
                    end: 13,
                    href: "http://placekitten.com/",
                    src: "http://placekitten.com/300/200",
                    text: "Kitten",
                    target: "results_section2"
               });


               // "WIKIPEDIA" PLUGIN: LOAD A WIKIPEDIA PAGE BETWEEN TWO POINTS IN THE AUDIO
               pop.wikipedia({
                    start: 14,
                    end: 17,
                    src: "http://en.wikipedia.org/wiki/HTML5",
                    title: "HTML5 (Wikipedia)",
                    target: "results_section1"
               });
               

               // "CUE": DO SOMETHING AT A CERTAIN POINT (LIKE RESTART THE AUDIO)
               pop.cue( 
                    18, 
                    function(){ this.currentTime(0); }
               );

               // "ON": WHEN AN EVENT OCCURS (LIKE "ENDED"), DO SOMETHING (LIKE DISPLAY A MESSAGE)
               pop.on(
                    "ended",
                    function(){ $("#results_section1").html("Thanks for listening!"); }
               );
