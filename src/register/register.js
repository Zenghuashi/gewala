/**
 * Created by lenovo on 2017/9/14.
 */
// var app=angular.module("myApp04",[]);
// app.controller("myCtrl",function ($scope) {
//
// });

var registerApp = angular.module("registerPage", ["ngRoute"]);
registerApp.controller("registerCtrol", function ($scope) {
    $scope.shouye = " ";
});

//验证码
var code;
function createCode(){
    code = '';
    var codeLength = 4;
    var codeV = document.getElementById('code');
    var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z');
    for(var i = 0; i < codeLength; i++){
        var index = Math.floor(Math.random()*36);
        code += random[index];
    }
    codeV.value = code;
}
function validate(){
    var oValue = document.getElementById('cod').value.toUpperCase();
    if(oValue ==0){
        alert('请输入验证码');
    }else if(oValue != code){
        alert('验证码不正确，请重新输入');
        oValue = '';
        createCode();}
//        }else{
//            window.open('http://www.baidu.com','_self');
//        }
}
window.onload = function (){

    createCode();
};
// var code;
// function createCode() {
//     code = "";
//     var codeLength = 4;
//     var codeV = document.getElementById("code");
//     var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I',
//                  'J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
//
//     for (var i=0; i< codeLength; i++){
//         var movie = Math.floor(Math.random()*36);
//         code += random[movie];
//     }
//     codeV.value = code;
// }
//
//   function validate() {
//       var oValue = document.getElementById('cod').value.toUpperCase();
//       if(oValue ==0){
//           alert("请输入验证码！");
//       }else if(oValue != code){
//           alert("验证码错误，重新输入！");
//           oValue = "";
//           createCode();
//       }else{
//           alert("验证成功！")
//       }
//   }