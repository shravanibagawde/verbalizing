console.log('hello');

function peripheryText(index){

  var wLength = Math.floor(width/9);
  var shortWLength = Math.floor(height/10);
  
  if(index == 0){
      curr_offset = char_offset;
      $(".periphery").eq(index).children().text(peripheryStr.slice(curr_offset, curr_offset + wLength));
      curr_offset += wLength;
  } else if(index == 1){
      $(".periphery").eq(index).children().text(peripheryStr.slice(curr_offset, curr_offset + shortWLength));
      curr_offset += shortWLength;

  } else if(index == 2){
      $(".periphery").eq(index).children().text(peripheryStr.slice(curr_offset, curr_offset + wLength));
      curr_offset += wLength;

  } else if(index == 3){
      $(".periphery").eq(index).children().text(peripheryStr.slice(curr_offset, curr_offset + shortWLength));
      curr_offset += shortWLength;

  }
  if(index == 3){
    char_offset += 1;
  }

  if(char_offset >= peripheryStr.length){
    char_offset = 1;
  }

  setTimeout(peripheryText, 150, index);
}

function resize(){
  width = $(window).width();
  height = $(window).height();
  var p_height = 40;
  var p_padding = 10;


  $("#periphery-top").css({
    width: width - (p_height + 2*p_padding - 0.25),
    height: p_height,
    top: p_padding,
    left: p_padding + 0.5
  });

  $("#periphery-bottom").css({
    width: width - (p_height + 2*p_padding),
    height: p_height,
    top: height-(p_height + p_padding),
    left: p_height + p_padding - 0.5,
    "transform-origin": "center center",
    transform: "rotate(180deg)"
  });

  $("#periphery-right").css({
    width: height - (p_height + 2*p_padding),
    height: p_height,
    top: 0,
    left: width- (p_height + p_padding),
    "transform-origin": "left bottom",
    transform: "rotate(90deg) translateX(-" + (p_height - p_padding) + "px)"
  });

  $("#periphery-left").css({
    width: height - (p_height + 2*p_padding - 1),
    height: p_height,
    top: height/2 - (2 * p_padding),
    left: 2*p_height - height/2,
    "transform-origin": "center bottom",
    transform: "rotate(-90deg)"
  });
}