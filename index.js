
window.onload = function(){
	var container = document.getElementsByClassName("container")[0];
	var list = document.getElementsByClassName("list")[0];
	var buttons = document.getElementsByClassName('buttons')[0].getElementsByTagName('span');
	var pre = document.getElementById("pre");
	var next = document.getElementById("next");
	var index = 1;

	//按钮显示
	function showButton(){
		for(var i=0;i<buttons.length;i++){
			if(buttons[i].className == "on"){
				buttons[i].className = "";
				break;
			}
		}
		buttons[index-1].className = "on";
	}

	//图片切换
	function animate(offset) {
		var newLeft = parseInt(list.style.left );
		var time = 300;//位移时间
		var interval = 10;//位移间隔时间
		var speed = offset/(time/interval);//每次位移量
		var left = parseInt(list.style.left) + offset;

		function go(){
			if(speed < 0 && parseInt(list.style.left ) > left || speed > 0 && parseInt(list.style.left ) < left) {
				list.style.left = parseInt(list.style.left ) + speed +"px";
				setTimeout(go,interval);
			} else {
				list.style.left = newLeft + offset + "px" ;

				if(newLeft > -700){	
					list.style.left = -3500+"px";
				}
				if(newLeft < -3500){
					list.style.left = -700+"px";
				}
			}
		}
		go();
		
	}
	next.onclick = function() {
		if(index == 5) {
			index=1;
		}else{
			index +=1;
		}		
		showButton();
		animate(-700);
	}
	pre.onclick = function(){		
		if(index == 1) {
			index=5;
		}else{
			index -=1;
		}
		showButton();
		animate(+700)
	}

	//点击按钮
	for(var i=0;i<buttons.length;i++) {
		buttons[i].onclick  = function() {
			if(this.className == "on"){         //防止点击本图片的时候执行
				return;
			}
			var myIndex = parseInt(this.getAttribute('index'));
			var offset = -700 * (myIndex - index);
			animate(offset);
			index = myIndex;
			showButton();
		}
	}
}






































