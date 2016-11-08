
$(function() {
   
    p1wins = []
    p2wins = []



    //page refresh
    $('#btn').click(function() {
        document.location.reload(true);
    })

    //controls p1 movement
    function p1moveright() {
        var left = use + "px";
        if (use < 1193) {
            $(p1).css({
                'margin-left': left
            })
            $(p1).addClass('vr')
            use = use + 20
        }
    }

    function p1moveleft() {
        var right = use + "px"
        if (use >= 0) {
            $(p1).css({
                'margin-left': right
            });
            $(p1).addClass('vb')
            use -= 20;
            var pos = $(p1).offset();

        }
    }

    //controls p2 movement
    function p2moveleft() {
        if (opCnt > 0) {
            var opMov = opCnt + "px"
            $(p2).css({
                'margin-left': opMov
            });
            opCnt -= 20;
            $(p2).addClass('cr');
        }
    }

    function p2moveright() {
        if (opCnt < 1200) {
            var opMov = opCnt + "px";
            $(p2).css({
                'margin-left': opMov
            });
            $(p2).addClass('cb')
            opCnt += 20
        }
    }

    //p1 punch function
    function p1punch() {
        $(p1).addClass('vp');
        $(p2).addClass('ch');
        
    }

    //p1 kick function
    function p1kick() {
        $(p1).addClass("vk");
        $(p2).addClass('ch');
        

    }

    function p1wincondition() {
        if (ohealth > 0 && uhealth > 0) {
            ohealth -= 5;
            $('#opHealth').text(ohealth);
        } else if (ohealth <= 0 && uhealth > 0) {
            $(p2).addClass('cd');
            $('#commentary').append('<p>win for p1<p>')
            alert('Game Over')
            $('*').off('keyup keydown');
            $(p1).addClass('vw')
            p1wins.push(1)
            $('#commentary').css('display', 'block')


        }
    }

    function p2wincondition() {
        if (ohealth > 0 && uhealth > 0) {
            uhealth -= 5;
            $('#urHealth').html(uhealth);
        } else if (ohealth > 0 && uhealth <= 0) {
            $(p1).addClass('vd');
            alert('p2 wins via punch out!!Game Ovah')
            $('*').off('keyup keydown');
            $(p2).addClass('cw')
            $('#commentary').css('display', 'block')
            $('#commentary').append('<p>win for p2</p>');
            p2wins.push(1)


        }
    }


    function p2punch() {
        $(p2).addClass('cp');
        $(p1).addClass('vh');
    }

    function p2kick() {
        $(p2).addClass('ck');
        $(p1).addClass('vh');
    }

    function g_win(){
        $(p2).addClass('ca1').delay(500).removeClass('ca1').addClass('ca2').delay(500)
    }

    //global variables
    var p1 = $('#yourImg')
    var p2 = $('#opsImg')


    var opCnt = 1193;
    var use = 0
    var uhealth = 100;
    var ohealth = 100;
    //end global variables

    //function begins
    function main() {
        $('body').keydown(function(e) {


                if (e.which === 39) {
                    p1moveright();
                } //end of right key


                if (e.which === 37) {
                    p1moveleft();
                } //end of left key

                if (e.which === 74 && opCnt >= 190) {
                    p2moveleft();
                } //end j key


                if (e.which === 76 && opCnt <= 1293) {
                    p2moveright();
                } //end L key

                var dist = opCnt - use;
                if (dist < 170) {
                    use = 600;
                    opCnt = 850;
                }

                if (e.which === 65 && dist <= 313) {
                    p1punch();
                    p1wincondition();


                } //end a


                if (e.which === 68 && dist <= 313) {
                    p1kick();
                    p1wincondition();

                } //end d


                //2nd player controls
                if (e.which === 79 && dist <= 233) {
                    //o key 2nd player punch
                    p2punch();
                    p2wincondition();

                }

                if (e.which === 73 && dist <= 233) { //i key 2nd plyer kick
                    p2kick();
                    p2wincondition();

                }



            })
            //end of keydown event

        //start the function keyup
        $('body').keyup(function(ev) {
                if (ev.which === 65) {
                    $(p1).removeClass('vp');
                    $(p2).removeClass('ch');
                }
                if (ev.which === 68) {
                    $(p1).removeClass('vk');
                    $(p2).removeClass('ch');
                }
                if (ev.which === 76) {
                    $(p2).removeClass('cb')
                }
                if (ev.which === 39) {
                    $(p1).removeClass('vr')
                }
                if (ev.which === 37) {
                    $(p1).removeClass('vb')
                }
                if (ev.which === 73) {
                    $(p2).removeClass('ck');
                    $(p1).removeClass('vh');
                }
                if (ev.which === 79) {
                    $(p2).removeClass('cp');
                    $(p1).removeClass('vh')
                }
                if (ev.which === 74) {
                    $(p2).removeClass('cr')
                }


            })
            //end the function keyup

    }


    $('#start').click(function() {
        main();
        $('#start').fadeOut();
        $('#instructions').fadeIn(2000).fadeOut(10000);

    });




    //jquery ends
})
