/**
 * Created by Zain on 25/8/2017.
 */
$(function(){
    var w = $(document.body).outerWidth(true);
    var h = $(document.body).outerHeight(true);
    var l_num = Math.ceil(w/15);
    var c_num = Math.ceil(h/32);
    var CC = $('.CodeRainBox');
    var num_arr = [];
    for(var i = 0; i < l_num; i++){
        for(var j = 0; j < c_num ; j++){
            if(Math.random() <= 0.5){
                num_arr.push(0)
            }else {
                num_arr.push(1)
            }
        }
    }
    var coding = num_arr.toString().replace(/,/g, "");
    setInterval(
        function(){
                for(var i = 0; i < num_arr.length; i++){
                    if(Math.random() <= 0.5){
                        if (num_arr[i] == 1){
                            num_arr[i] = 0;
                        }else {
                            num_arr[i] = 1;
                        }
                    }
                }
            var coding = num_arr.toString().replace(/,/g, "");
            CC.html(coding)
        }
    ,150);
    CC.html(coding);
    console.log(num_arr.length)
});