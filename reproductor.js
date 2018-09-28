// Dependencies:
// https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
// https://cdnjs.cloudflare.com/ajax/libs/html5media/1.1.8/html5media.min.js
// https://cdnjs.cloudflare.com/ajax/libs/plyr/3.3.21/plyr.min.js

// Mythium Archive: https://archive.org/details/mythium/


jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        // initialize plyr
        var player = new Plyr('#audio1', {
            controls: [
                'restart',
                'play',
                'progress',
                'current-time',
                'duration',
                'mute',
                'volume'
            ]
        });
        // initialize playlist and controls
        var a = 0;
        var index = 0,
            playing = false,
            mediaPath = '../wp-content/Ekk-audios/',
            extension = '',
            //{
            //    "track": 0,
            //    "name": " ",
            //    "duration": "",
            //    "file": " "
           // },
           
            tracks = [
                
               
               
               
            
             {
                "track": 0,
                "name": "2018-09-09 Marcos 11-12 Néstor",
                "duration": "",
                "file": "2018-09-09 Marcos 11-12 Néstor"
            },
                
                
                
             
             {
                "track": 0,
                "name": "2018-09-09 Levítico 16-20 Jose Antonio",
                "duration": "",
                "file": "2018-09-09 Levítico 16-20 Jose Antonio"
            },  
                
                
                
                
             {
                "track": 0,
                "name": "2018-09-02 Marcos 9-10 Juan Cabeza",
                "duration": "",
                "file": "2018-09-02 Marcos 9-10 Juan Cabeza"
            },      
                
                
                
             {
                "track": 0,
                "name": "2018-09-02 Levitico 11-15 Efrain Morata",
                "duration": "",
                "file": "2018-09-02 Levitico 11-15 Efrain Morata"
            },      
                
                
               {
                "track": 0,
                "name": "2018-08-26 Marcos 7 y 8 Nestor Martinez",
                "duration": "",
                "file": "2018-08-26 Marcos 7 y 8 Nestor Martinez"
            },   
                
                
                
                {
                "track": 0,
                "name": "2018-08-26 Levitico 6-10 Efrain Morata",
                "duration": "",
                "file": "2018-08-26 Levitico 6-10 Efrain Morata"
            },  
                
                {
                "track": 0,
                "name": "2018-08-20 Marcos 5-6 Juan Cabeza",
                "duration": "",
                "file": "2018-08-20 Marcos 5-6 Juan Cabeza"
            },  
            
            
                {
                "track": 0,
                "name": "2018-08-12 Marcos 3-4 Pablo Cruz",
                "duration": "",
                "file": "2018-08-12 Marcos 3-4 Pablo Cruz"
            },  
                
                {
                "track": 0,
                "name": "2018-08-12 Exodo 36-40 Nestor Martinez",
                "duration": "",
                "file": "2018-08-12 Exodo 36-40 Nestor Martinez"
            },  
            
            
             {
                "track": 0,
                "name": "2018-08-05 Marcos 1-2 J.Antonio Mesa",
                "duration": "",
                "file": "2018-08-05 Marcos 1-2 J.Antonio Mesa"
            }, 
            
            
            
            {
                "track": 0,
                "name": "2018-08-05 Exodo 31-35 Juan Barrera",
                "duration": "",
                "file": "2018-08-05 Exodo 31-35 Juan Barrera"
            }, 
            
            
            
            {
                "track": 0,
                "name": "2018-07-22 Mateo 26 J.Antonio Mesa",
                "duration": "",
                "file": "2018-07-22 Mateo 26 J.Antonio Mesa"
            }, 
            
            {
                "track": 0,
                "name": "2018-07-22 Éxodo 21-15 Efraín Morata",
                "duration": "",
                "file": "2018-07-22 Éxodo 21-15 Efraín Morata"
            }, {
                "track": 0,
                "name": "2018-07-15 Mateo 25 Juan Cabeza",
                "duration": "",
                "file": "2018-07-15 Mateo 25 Juan Cabeza"
            },{
                "track": 0,
                "name": "2018-07-15 Éxodo 16-20 Juan Barrera",
                "duration": "",
                "file": "2018-07-15 Éxodo 16-20 Juan Barrera"
            },{
                "track": 0,
                "name": "2018-07-08 Mateo 24 Pablo Cruz",
                "duration": "",
                "file": "2018-07-08 Mateo 24 Pablo Cruz"
            },{
                "track": 0,
                "name": "2018-07-08 Éxodo 11-15 Efraín Morata",
                "duration": "",
                "file": "2018-07-08 Éxodo 11-15 Efraín Morata"
            },{
                "track": 0,
                "name": "2018-06-24 Mateo 23-24 Efraín Morata",
                "duration": "",
                "file": "2018-06-24 Mateo 23-24 Efraín Morata"
            },{
                "track": 0,
                "name": "2018-06-18 La justicia de Dios Efraín Morata",
                "duration": "",
                "file": "2018-06-18 La justicia de Dios Efraín Morata"
            },{
                "track": 0,
                "name": "2018-06-03 Mateo 19-20 J.Antonio Mesa",
                "duration": "",
                "file": "2018-06-03 Mateo 19-20 J.Antonio Mesa"
            },{
                "track": 0,
                "name": "2018-06-03 Génesis 46-50 Efraín Morata",
                "duration": "",
                "file": "2018-06-03 Génesis 46-50 Efraín Morata"
            },{
                "track": 0,
                "name": "2018-05-20 Mateo 17-18 J.Antonio Mesa",
                "duration": "",
                "file": "2018-05-20 Mateo 17-18 J.Antonio Mesa"
            },{
                "track": 0,
                "name": "2018-05-20 Génesis 41-45 Juan Barrera",
                "duration": "",
                "file": "2018-05-20 Génesis 41-45 Juan Barrera"
            }
        ],
            buildPlaylist = $(tracks).each(function(key, value) {
                var trackNumber = a,
                    trackName = value.file,
                    trackDuration = value.duration;
                    a++;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                }
                $('#plList').append('<li> \
                    <div class="plItem"> \
                        <span class="plNum">' + trackNumber + '.</span> \
                        <span class="plTitle">' + trackName + '</span> \
                        <span class="plLength">' + trackDuration + ' <a href="'+mediaPath+trackName+'.mp3" download="'+trackName+'.mp3"><i class="fa fa-download" aria-hidden="true"></i></a> \
                        </span> \
                    </div> \
                </li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').on('play', function () {
                playing = true;
                npAction.text('Reproduciendo...');
            }).on('pausa', function () {
                playing = false;
                npAction.text('Pausado...');
            }).on('finalizado', function () {
                npAction.text('Pausado...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').on('click', function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').on('click', function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').on('click', function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    } else {
        // boo hoo
        $('.column').addClass('hidden');
        var noSupport = $('#audio1').text();
        $('.container').append('<p class="no-support">' + noSupport + '</p>');
    }
});
