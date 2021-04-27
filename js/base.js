function btn_memorias_active (btn_memoriaxxxx){

if(btn_memoriaxxxx=="claustros"){
$("#btn_colegiaturas").removeClass("btn_blanco_active");
$("#colegiaturas").hide()
}else{
	$("#btn_claustros").removeClass("btn_blanco_active");
$("#claustros").hide()

}

if ($("#btn_"+btn_memoriaxxxx).hasClass("btn_blanco_active")){
			$("#btn_"+btn_memoriaxxxx).removeClass("btn_blanco_active");
	}else{
			$("#btn_"+btn_memoriaxxxx).addClass("btn_blanco_active");
	}



	$("#"+btn_memoriaxxxx).slideToggle('slow');
}



function btn_form_active (){
	if ($("#btn_form").hasClass("btn_blanco_active")){
			$("#btn_form").removeClass("btn_blanco_active");
	}else{
			$("#btn_form").addClass("btn_blanco_active");
	}
	$('#formulario').slideToggle('slow');


	}