var weixin = document.getElementsByClassName("weixin")
var logo = document.getElementById("logo")
var isShowingWeixin = false
_.each(weixin, function(weixin){
weixin.addEventListener("click",function(e){
  e.preventDefault()
  logo.src= ""
  logo.src= !isShowingWeixin ? "/img/wechat.jpg" : "/img/archyshuo.png"
  isShowingWeixin = !isShowingWeixin
})

})
