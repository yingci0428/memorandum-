const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addBtn = document.getElementById('addBtn')
const removeBtn = document.getElementById('removeBtn')
const list = document.getElementById('list')


//用陣列取新增的內容
const listContent = []

function render() {
  let htmlStr = ''
  listContent.forEach(function (item) {
    htmlStr = htmlStr + `
    <div class="item">
        <div>
          <p>內容：${item.content}</p>
          <p>時間：${item.date} ${item.time}</p>
        </div>
      </div>
    `
  })

  // 新增以上的內容並改變HTML結構用inner
  list.innerHTML = htmlStr
}

addBtn.addEventListener('click', function () {
  // 用value抓取值，可在F12看到有無抓取值
  // console.log(content.value)
  // console.log(date.value)
  // console.log(time.value)

  //push新增函式
  listContent.unshift({
    content: content.value,
    date: date.value,
    time: time.value
  })
  //陣列裡有抓取到值
  // console.log(listContent);

  render()
})

removeBtn.addEventListener('click', function () {
  listContent.shift()
  
  render()
})