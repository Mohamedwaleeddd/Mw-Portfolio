function run() {
  var htmlCode = document.getElementById("html-editor").value;
  var cssCode = document.getElementById("css-editor").value;
  var jsCode = document.getElementById("js-editor").value;
  
  // Save code to localStorage
  localStorage.setItem('htmlCode', htmlCode);
  localStorage.setItem('cssCode', cssCode);
  localStorage.setItem('jsCode', jsCode);

  var preview = window.open();
  preview.document.write(`
    <html>
      <head>
        <style>${cssCode}</style>
      </head>
      <body>
        ${htmlCode}
        <script>${jsCode}</script>
      </body>
    </html>
  `);
  preview.document.close();
}

// Retrieve code from localStorage
document.getElementById("html-editor").value = localStorage.getItem('htmlCode');
document.getElementById("css-editor").value = localStorage.getItem('cssCode');
document.getElementById("js-editor").value = localStorage.getItem('jsCode');
function createNewFile() {
  codeEditor.value = '';
}

function saveFile() {
  // Save the code to a database or perform any other desired action
  alert('Code saved!');
}

function downloadFile() {
  let fileName = prompt('Enter file name:', 'code.txt');
  if (fileName) {
    let htmlCode = document.getElementById("html-editor").value;
    let blob = new Blob([htmlCode], { type: 'text/plain' });
    let url = window.URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
function dark(){
document.querySelector('body').style.background="#fff";
}