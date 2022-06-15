// 使用读取文件的构造函数FileReader()创建FileReader对象访问用户明确选择的文件的内容
var reader = new FileReader();
// 此时如果 reader.readyState返回0，就证明创建读取文件的实列对象成功,但还未调用读取方法
获取到的文件上传表单元素.addEventListener("change", function () {
  // 调用readAsText方法开始异步读取文件内容 this.files[0]为提供有关文件的信息并允许网页中的 JavaScript 访问其内容
  reader.readAsDataURL(
    this.files[0],
    "这里可选编码格式iso-8859-1或UTF-8也可不选"
  );
  // 此时如果 reader.readyState返回1，就证明调用读取方法成功
  // 为了提高用户体验可以把 可以把上传文件的表单 value 值 清空，表示已经上传成功
  this.value;
});
// 当readAsDataURL方法异步读取完成后，无论成功与否都会自动触发FileReader对象的loadend事件
// 设置load事件为读取完成后触发
reader.addEventListener("loadend", () => {
  // 此时如果 reader.readyState返回2，就证明读取文件成功完成
  // reader.result为读取完成的文本数据
  console.log(reader.result);
  // 读取完数据，也要清空下 reader内存
  reader = null;
});
