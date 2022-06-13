
// // Tạo tooltip
// $(function () {
//   $('[data-toggle="tooltip"]').tooltip()
// })
// // Tạo tooltip

// // chuyễn đổi icon Like
// function myFunction(x) {
//   x.classList.toggle("fa-thumbs-down");
// }
// // chuyễn đổi icon Like

// ON/OFF tag
function tag() {
	var x = document.getElementById("adv");
	if (x.style.display === "none") 
	{
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}
// ON/OF tag

//----------------- check form---------------------------------------------
function checkRadio(field)
{
  for(var i=0; i < field.length; i++) {
    if(field[i].checked) return field[i].value;
  }
  return false;
}
function kiemtrahople()
{
	var hodem = document.forms["thamdoykien"].hodem.value; 
	var ten = document.forms["thamdoykien"].ten.value;
	var tennguoidung = document.forms["thamdoykien"].tennguoidung.value;
	var pass = document.forms["thamdoykien"].pass.value;
	var xacnhanpass = document.forms["thamdoykien"].xacnhanpass.value;
	var regemail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	// var regpass = /^([A-Z]){1}([\w_\.!@#$%^&*()]+){3,12}$/;
	var regpass = /([a-zA-Z0-9]){5,10}$/;
	
	
	if(hodem.length == 0) 
	{
		alert("Bạn chưa nhập họ đệm");
		document.forms["thamdoykien"].hodem.focus();
		return false;
	}
	if(ten.length == 0) 
	{
		alert("Bạn chưa nhập tên");
		document.forms["thamdoykien"].ten.focus();
		return false;
	}
	if(tennguoidung.length == 0) 
	{
		alert("Bạn chưa nhập tên người dùng");
		document.forms["thamdoykien"].tennguoidung.focus();
		return false;
	}
	
	if(!regemail.test(tennguoidung))
	{
		alert("Email không hợp lệ.\n abc@gmail.com");
		document.forms["thamdoykien"].tennguoidung.focus();
		return false;
	}
	if(!regpass.test(pass))
	{
		alert("Mật khẩu không đúng, cần nhập [a-zA-Z0-9]\n 5-10");
		document.forms["thamdoykien"].pass.focus();
		return false;
	}
		
	if(pass.length == 0) 
	{
		alert("Bạn chưa nhập mật khẩu");
		document.forms["dangky"].pass.focus();
		return false;
	}
	if(pass != xacnhanpass) {
	
		alert("Xác nhận mật khẩu không đúng");
		document.forms["dangky"].xacnhanpass.focus();
		return false;
	}
	if(document.forms["dangky"].selectedIndex < 0)
	 {

		alert("Bạn chưa chọn vị trí");
		return false;
   		
  		} 
	//kiểm tra gioi tinh đã chọn chưa
	if(checkRadio(document.forms["dangky"].gioitinh) == false) {
      alert("Lỗi: Bạn chưa chọn giới tính!");
      return false;
    }

    var e = document.getElementById("vitri");
	var vitrichon = e.options[e.selectedIndex].value;
	if (vitrichon == "none"){
		alert("Bạn chưa chọn vị trí");
		document.forms["dangky"].vitri.focus();
		return false;
	}
	if (!document.forms["dangky"].phim.checked  && !document.forms["dangky"].bongda.checked 
		&& !document.forms["dangky"].dulich.checked  && !document.forms["dangky"].amnhac.checked )
		{
			alert("Cảnh báo! Bạn không chọn sở thích nào cả!");
		}

	return true;
}
//----------------- check form---------------------------------------------
