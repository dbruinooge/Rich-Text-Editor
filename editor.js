document.addEventListener('DOMContentLoaded', () => {

  const content = document.querySelector('#content');
  const bold = document.querySelector('#bold');
  const italics = document.querySelector('#italics');
  const underline = document.querySelector('#underline');
  const orderedList = document.querySelector('#ordered_list');
  const unorderedList = document.querySelector('#unordered_list');
  const hyperlink = document.querySelector('#hyperlink');

  bold.addEventListener('click', event => {
    event.preventDefault();
    document.execCommand('bold', true, null);
  });

  italics.addEventListener('click', event => {
    event.preventDefault();
    document.execCommand('italic', true, null);
  });

  underline.addEventListener('click', event => {
    event.preventDefault();
    document.execCommand('underline', true, null);
  });

  orderedList.addEventListener('click', event => {
    event.preventDefault();
    document.execCommand('insertOrderedList', true, null);
  });

  unorderedList.addEventListener('click', event => {
    event.preventDefault();
    document.execCommand('insertUnorderedList', true, null);
  });

  hyperlink.addEventListener('click', event => {
    event.preventDefault();
    const link = window.prompt('Enter a link:');
    if (link) {
      document.execCommand('createLink', true, link);
    }
  });

});