export const get = (url, data, callback, error) => {
  var opts = {
    method: 'POST',
    mode:'cor',
    headers: {
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  }
  fetch(url, opts)
  .then((resonse) => resonse.text())
    .then((responseText) => {
      //将返回的JSON字符串转成JSON对象，并传递到回调方法中
      callback(JSON.parse(responseText));
    }
  ).catch(err=>{
    error(err)
  })
}