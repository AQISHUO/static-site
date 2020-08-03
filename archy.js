

function makeForSimChineseAudience(){
  window.document.title = "吖奇说 ARCHY SHUō"

  var shuo = document.getElementsByClassName("shuo")
  _.each(shuo,function(s){
    s.textContent = "说"
  })

  var chineseDesu = document.getElementsByClassName("chinese-des")[0]
   chineseDesu.innerHTML = "一个探讨当代艺术哲学科学科技科创的自媒体 <br> 主要做做小视频&写写小原创&翻译国外博主的文章"

}


if(navigator != null){
  var cnIndex = navigator.languages.indexOf("zh-CN")
  var twIndex = navigator.languages.indexOf("zh-TW")
  var hkIndex = navigator.languages.indexOf("zh-HK")

  var zhIndex = navigator.languages.indexOf("zh")

  if(cnIndex != -1 || zhIndex != -1){
    twIndex = twIndex == -1 ? 999 : twIndex
    hkIndex = hkIndex == -1 ? 999 : hkIndex
    if(cnIndex < twIndex && cnIndex < hkIndex || zhIndex < twIndex && zhIndex < hkIndex  ){
      makeForSimChineseAudience()
    }
  }

}
