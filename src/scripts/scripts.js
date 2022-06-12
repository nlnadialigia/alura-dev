/* eslint-disable no-undef */
const stack = document.querySelector('.stack');
const codeArea = document.querySelector('.editor-code');
const button = document.querySelector('.editor-button');

function addHljs() {
  const content = codeArea.innerText;
  codeArea.innerHTML = `
  <code class="preview hljs ${stack.value}" contenteditable="true" aria-label="Editor de código"></code>
  `;
  const tagCode = document.querySelector('code');
  tagCode.textContent = content;
  hljs.highlightElement(tagCode);
}

button.addEventListener('click', () => {
  addHljs();
});
